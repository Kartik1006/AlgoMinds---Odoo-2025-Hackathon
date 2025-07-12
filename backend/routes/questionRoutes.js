const express = require('express');
const router = express.Router();
const {
    askQuestion,
    getAllQuestions,
    getQuestionById,
    postAnswer,
    voteAnswer,
    acceptAnswer
} = require('../controllers/questionController');
const auth = require('../middleware/authMiddleware');

router.post('/', auth, askQuestion);
router.get('/', getAllQuestions);
router.get('/:id', getQuestionById);
router.post('/:id/answers', auth, postAnswer);
router.post('/answers/:answerId/vote', auth, voteAnswer);
router.post('/answers/:answerId/accept', auth, acceptAnswer);

module.exports = router;