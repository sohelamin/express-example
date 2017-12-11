const bookshelf = require('./../config/bookshelf');

let User = bookshelf.Model.extend({
    tableName: 'users'
});

module.exports = User;
