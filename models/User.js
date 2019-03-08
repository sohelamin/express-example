const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    date: {
        type: Date,
        default: Date.now
    }
});

let User = mongoose.model('User', userSchema);

module.exports = User;
