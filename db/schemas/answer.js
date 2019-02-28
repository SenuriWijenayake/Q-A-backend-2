var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var answerSchema = new Schema({
  userId : String,
  questionId: Number,
  oldAnswerId : Number,
  oldConfidence : Number,
  newAnswerId : Number,
  newConfidence : Number,
  questionSet : String,
  submitTime : { type : Date, required: false, default: Date.now },
  editTime : { type : Date, required: false, default: Date.now },
  femaleFirst : { type : Boolean, required: false}
});

var Answer = mongoose.model('Answer', answerSchema);

module.exports = Answer;
