const mongoose = require('mongoose');

const {
  ObjectID,
} = mongoose.mongo;
const Post = require('./../models/Post');

exports.index = async (req, res) => {
  let posts = [];
  try {
    posts = await Post.find({});
  } catch (error) {
    console.error(error);
  }

  await res.render('post/index', {
    title: 'Express.js',
    posts,
  });
};

exports.getCreate = (req, res) => {
  res.render('post/create', {
    title: 'Express.js',
  });
};

exports.postCreate = async (req, res) => {
  try {
    const post = new Post(req.body);
    await post.save();
  } catch (error) {
    console.error(error);
  }

  await res.redirect('/posts');
};

exports.show = async (req, res) => {
  let post = null;
  try {
    post = await Post.findOne({ _id: new ObjectID(req.params.postId) });
  } catch (error) {
    console.error(error);
  }

  await res.render('post/show', {
    title: 'Express.js',
    post,
  });
};

exports.edit = async (req, res) => {
  let post = null;
  try {
    post = await Post.findOne({ _id: new ObjectID(req.params.postId) });
  } catch (error) {
    console.error(error);
  }

  await res.render('post/edit', {
    title: 'Express.js',
    post,
  });
};

exports.update = async (req, res) => {
  try {
    await Post.findOneAndUpdate(
      { _id: new ObjectID(req.params.postId) },
      { title: req.body.title, content: req.body.content },
    );
  } catch (error) {
    console.error(error);
  }

  await res.redirect('/posts');
};

exports.delete = async (req, res) => {
  try {
    await Post.findOneAndRemove({ _id: new ObjectID(req.params.postId) });
  } catch (error) {
    console.error(error);
  }

  await res.redirect('/posts');
};
