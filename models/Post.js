const mongoose = require('mongoose');

const { Schema } = mongoose;

const postSchema = new Schema({
  title: String,
  content: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Post', postSchema);
