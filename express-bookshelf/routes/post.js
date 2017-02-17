var express = require('express');
var router = express.Router();

var Post = require('./../db').Post;

router.get('/', function(req, res, next) {
    Post.collection().fetch().then(function(collection) {
        res.render('index', {
            title: 'Express.js',
            posts: collection.toJSON()
        });
    });
});

router.get('/create', function(req, res, next) {
    res.render('create', {
        title: 'Express.js'
    });
});

router.post('/', function(req, res, next) {
    new Post(req.body).save().then(function(model) {
        res.redirect('/posts');
    });
});

router.get('/:postId', function(req, res, next) {
    new Post({id: req.params.postId}).fetch().then(function(model) {
        res.render('show', {
            title: 'Express.js',
            post: model.toJSON()
        });
    });
});

router.get('/:postId/edit', function(req, res, next) {
    new Post({id: req.params.postId}).fetch().then(function(model) {
        res.render('edit', {
            title: 'Express.js',
            post: model.toJSON()
        });
    });
});

router.post('/:postId', function(req, res, next) {
    new Post({id: req.params.postId}).save({title: req.body.title, content: req.body.content}).then(function(model) {
        res.redirect('/posts');
    });
});

router.post('/:postId/delete', function(req, res, next) {
    new Post({id: req.params.postId})
        .destroy()
        .then(function(model) {
            res.redirect('/posts');
        });
});

module.exports = router;
