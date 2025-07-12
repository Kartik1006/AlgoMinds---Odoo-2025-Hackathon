const Question = require('../models/Question');
const Notification = require('../models/Notification');
const { getIO } = require('../socket'); // We will create this socket file later

// Ask a new Question
exports.askQuestion = async (req, res) => {
    const { title, description, tags } = req.body;
    try {
        const newQuestion = new Question({
            title,
            description,
            tags,
            user: req.user.id
        });
        const question = await newQuestion.save();
        res.json(question);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Get all questions
exports.getAllQuestions = async (req, res) => {
    try {
        const questions = await Question.find().populate('user', ['username']).sort({ createdAt: -1 });
        res.json(questions);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Get a single question by ID
exports.getQuestionById = async (req, res) => {
    try {
        const question = await Question.findById(req.params.id)
            .populate('user', ['username'])
            .populate('answers.user', ['username']);
        if (!question) return res.status(404).json({ msg: 'Question not found' });
        res.json(question);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Post an answer
exports.postAnswer = async (req, res) => {
    try {
        const question = await Question.findById(req.params.id);
        if (!question) return res.status(404).json({ msg: 'Question not found' });
        
        const newAnswer = {
            content: req.body.content,
            user: req.user.id
        };

        question.answers.unshift(newAnswer);
        await question.save();
        
        // --- Notification Logic ---
        if (question.user.toString() !== req.user.id) { // Don't notify if you answer your own question
            const notification = new Notification({
                recipient: question.user,
                sender: req.user.id,
                type: 'new_answer',
                questionId: question.id,
            });
            await notification.save();
            // Emit real-time event
            getIO().to(question.user.toString()).emit('new_notification', notification);
        }

        res.json(question.answers);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Vote on an answer
exports.voteAnswer = async (req, res) => {
    // voteType will be 'up' or 'down'
    const { voteType } = req.body; 
    try {
        const question = await Question.findOne({ "answers._id": req.params.answerId });
        if (!question) return res.status(404).json({ msg: 'Answer not found' });

        const answer = question.answers.id(req.params.answerId);
        const userId = req.user.id;

        // Reset user's previous vote
        answer.upvotes.pull(userId);
        answer.downvotes.pull(userId);

        // Apply new vote
        if (voteType === 'up') {
            answer.upvotes.push(userId);
        } else if (voteType === 'down') {
            answer.downvotes.push(userId);
        }
        
        await question.save();
        res.json({ upvotes: answer.upvotes.length, downvotes: answer.downvotes.length });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Accept an answer
exports.acceptAnswer = async (req, res) => {
    try {
        const question = await Question.findOne({ "answers._id": req.params.answerId });
        if (!question) return res.status(404).json({ msg: 'Answer not found' });

        // Check if the user accepting is the one who asked the question
        if (question.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' });
        }
        
        question.acceptedAnswer = req.params.answerId;
        await question.save();
        res.json(question);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};