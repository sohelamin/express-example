var config = require('./config');

var knex = require('knex')({
    client: config.database.client,
    connection: {
        host: config.database.host,
        user: config.database.user,
        password: config.database.password,
        database: config.database.database,
        charset: 'utf8'
    }
});

var bookshelf = require('bookshelf')(knex);

// Post model
var Post = bookshelf.Model.extend({
    tableName: 'posts'
});

module.exports = {Post};
