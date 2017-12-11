const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let postSchema = new Schema({
    title: String,
    content: String,
    date: {
        type: Date,
        default: Date.now
    }
});

let Post = mongoose.model('Post', postSchema);

module.exports = Post;
