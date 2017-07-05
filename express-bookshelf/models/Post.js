var bookshelf = require('./../config/bookshelf');

var Post = bookshelf.Model.extend({
    tableName: 'posts'
});

module.exports = Post;
