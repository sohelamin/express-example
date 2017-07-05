var dbConfig = require('./db');

var knex = require('knex')({
    client: dbConfig.client,
    connection: {
        host: dbConfig.host,
        user: dbConfig.user,
        password: dbConfig.password,
        database: dbConfig.database,
        charset: 'utf8'
    }
});

module.exports = require('bookshelf')(knex);
