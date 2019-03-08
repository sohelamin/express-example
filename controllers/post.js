const mongoose = require('mongoose');
const {
  ObjectID,
} = mongoose.mongo;
const Post = require('./../models/Post');

exports.index = (req, res) => {
  Post.find({}, (err, posts) => {
    if (err) throw err;

    res.render('post/index', {
      title: 'Express.js',
      posts,
    });
  });
};

exports.getCreate = (req, res) => {
  res.render('post/create', {
    title: 'Express.js',
  });
};

exports.postCreate = async (req, res) => {
  const post = Post(req.body);
  try {
    await post.save();
    res.redirect('/posts');
  } catch (err) {
    res.redirect('/posts');
  }
};

exports.show = (req, res) => {
  Post.findOne({
    _id: new ObjectID(req.params.postId),
  }, (err, post) => {
    if (err) throw err;

    res.render('post/show', {
      title: 'Express.js',
      post,
    });
  });
};

exports.edit = (req, res) => {
  Post.findOne({
    _id: new ObjectID(req.params.postId),
  }, (err, post) => {
    if (err) throw err;

    res.render('post/edit', {
      title: 'Express.js',
      post,
    });
  });
};

exports.update = (req, res) => {
  Post.findOne({
    _id: new ObjectID(req.params.postId),
  }, (err, post) => {
    if (err) throw err;

    post.title = req.body.title;
    post.content = req.body.content;

    post.save((err) => {
      if (err) throw err;

      res.redirect('/posts');
    });
  });
};

exports.delete = (req, res) => {
  Post.findOneAndRemove({
    _id: new ObjectID(req.params.postId),
  }, (err) => {
    if (err) throw err;
    res.redirect('/posts');
  });
};
