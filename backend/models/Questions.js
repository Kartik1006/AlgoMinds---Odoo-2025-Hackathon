const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
    content: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    upvotes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    downvotes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true });

const QuestionSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true }, // This will store the HTML from the rich text editor
  tags: [{ type: String, required: true }],
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  answers: [AnswerSchema], // Embed answers within the question document
  acceptedAnswer: { type: Schema.Types.ObjectId, ref: 'Answer' }, // Not a real ref, but stores the _id of the accepted answer
}, { timestamps: true });


module.exports = mongoose.model('Question', QuestionSchema);