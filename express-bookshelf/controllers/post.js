const Post = require('./../models/Post');

exports.index = function(req, res, next) {
    Post.collection()
        .fetch()
        .then(function(collection) {
            res.render('post/index', {
                title: 'Express.js',
                posts: collection.toJSON()
            });
        });
};

exports.getCreate = function(req, res, next) {
    res.render('post/create', {
        title: 'Express.js'
    });
}

exports.postCreate = function(req, res, next) {
    new Post(req.body)
        .save()
        .then(function(model) {
            res.redirect('/posts');
        });
};

exports.show = function(req, res, next) {
    new Post({id: req.params.postId})
        .fetch()
        .then(function(model) {
            res.render('post/show', {
                title: 'Express.js',
                post: model.toJSON()
            });
        });
};

exports.edit = function(req, res, next) {
    new Post({id: req.params.postId})
        .fetch()
        .then(function(model) {
            res.render('post/edit', {
                title: 'Express.js',
                post: model.toJSON()
            });
        });
};

exports.update = function(req, res, next) {
    new Post({id: req.params.postId})
        .save({title: req.body.title, content: req.body.content})
        .then(function(model) {
            res.redirect('/posts');
        });
};

exports.delete = function(req, res, next) {
    new Post({id: req.params.postId})
        .destroy()
        .then(function(model) {
            res.redirect('/posts');
        });
};
