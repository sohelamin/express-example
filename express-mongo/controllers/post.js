const mongoose = require('mongoose');
const Post = require('./../models/Post');

exports.index = function(req, res, next) {
    Post.find({}, function(err, posts) {
        if (err) throw err;

        res.render('post/index', {
            title: 'Express.js',
            posts: posts
        });
    });
};

exports.getCreate = function(req, res, next) {
    res.render('post/create', {
        title: 'Express.js'
    });
}

exports.postCreate = function(req, res, next) {
    let newPost = Post(req.body);

    newPost.save(function(err) {
        if (err) throw err;

        res.redirect('/posts');
    });
};

exports.show = function(req, res, next) {
    Post.findOne({_id : new mongoose.mongo.ObjectID(req.params.postId)}, function(err, post) {
        if (err) throw err;

        res.render('post/show', {
            title: 'Express.js',
            post: post
        });
    });
};

exports.edit = function(req, res, next) {
    Post.findOne({_id : new mongoose.mongo.ObjectID(req.params.postId)}, function(err, post) {
        if (err) throw err;

        res.render('post/edit', {
            title: 'Express.js',
            post: post
        });
    });
};

exports.update = function(req, res, next) {
    Post.findOne({_id : new mongoose.mongo.ObjectID(req.params.postId)}, function(err, post) {
        if (err) throw err;

        post.title = req.body.title;
        post.content = req.body.content;

        post.save(function(err) {
            if (err) throw err;

            res.redirect('/posts');
        });
    });
};

exports.delete = function(req, res, next) {
    Post.findOneAndRemove({_id : new mongoose.mongo.ObjectID(req.params.postId)}, function(err) {
        if (err) throw err;
        res.redirect('/posts');
    });
};
