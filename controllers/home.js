const User = require('./../models/User');

exports.index = (req, res) => {
  // let newUser = User({'email': 'sohelamincse@gmail.com', 'password': '123456'});

  // newUser.save(function(err) {
  //     if (err) throw err;
  // });

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
