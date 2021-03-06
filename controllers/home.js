const User = require('./../models/User');

exports.createUser = async (req, res) => {
  try {
    const newUser = new User({ email: 'sohelamincse@gmail.com', password: '123456' });
    await newUser.save();
  } catch (error) {
    console.log(error);
  }

  await res.send({});
};


exports.index = (req, res) => {
  res.render('dashboard', {
    title: 'Express.js',
  });
};

exports.getLogin = (req, res) => {
  res.render('login', {
    title: 'Express.js',
  });
};

exports.logout = (req, res) => {
  req.logout();
  res.locals.user = null;

  res.redirect('/login');
};

exports.postLogin = (req, res) => {
  res.redirect('/protected');
};

exports.protected = (req, res) => {
  res.render('dashboard', {
    title: 'Express.js',
  });
};
