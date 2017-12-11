const bookshelf = require('./../config/bookshelf');

let Post = bookshelf.Model.extend({
    tableName: 'posts'
});

module.exports = Post;
