const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('User', userSchema);
