var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

var Post = require('./../db').Post;

router.get('/', function(req, res, next) {
    Post.find({}, function(err, posts) {
        if (err) throw err;

        res.render('index', {
            title: 'Express.js',
            posts: posts
        });
    });
});

router.get('/create', function(req, res, next) {
    res.render('create', {
        title: 'Express.js'
    });
});

router.post('/', function(req, res, next) {
    var newPost = Post(req.body);

    newPost.save(function(err) {
        if (err) throw err;

        res.redirect('/posts');
    });
});

router.get('/:postId', function(req, res, next) {
    Post.findOne({_id : new mongoose.mongo.ObjectID(req.params.postId)}, function(err, post) {
        if (err) throw err;

        res.render('show', {
            title: 'Express.js',
            post: post
        });
    });
});

router.get('/:postId/edit', function(req, res, next) {
    Post.findOne({_id : new mongoose.mongo.ObjectID(req.params.postId)}, function(err, post) {
        if (err) throw err;

        res.render('edit', {
            title: 'Express.js',
            post: post
        });
    });
});

router.post('/:postId', function(req, res, next) {
    Post.findOne({_id : new mongoose.mongo.ObjectID(req.params.postId)}, function(err, post) {
        if (err) throw err;

        post.title = req.body.title;
        post.content = req.body.content;

        post.save(function(err) {
            if (err) throw err;

            res.redirect('/posts');
        });
    });
});

router.post('/:postId/delete', function(req, res, next) {
    Post.findOneAndRemove({_id : new mongoose.mongo.ObjectID(req.params.postId)}, function(err) {
        if (err) throw err;
        res.redirect('/posts');
    });
});

module.exports = router;
