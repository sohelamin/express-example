var config = require('./config');

var mongoose = require('mongoose')
mongoose.connect('mongodb://' + config.database.host + '/' + config.database.database)
var Schema = mongoose.Schema

var postSchema = new Schema({
    title: String,
    content: String,
    date: {
        type: Date,
        default: Date.now
    }
});

// Post model
var Post = mongoose.model('Post', postSchema);

module.exports = {Post};
