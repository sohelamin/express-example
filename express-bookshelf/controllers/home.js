exports.index = function(req, res, next) {
    // var newPost = User({'email': 'sohelamincse@gmail.com', 'password': '123456'});

    // newPost.save(function(err) {
    //     if (err) throw err;

    //     res.redirect('/login');
    // });

    res.render('dashboard', {
        title: 'Express.js'
    });
};

exports.getLogin = function(req, res, next) {
    res.render('login', {
        title: 'Express.js'
    });
};

exports.logout = function(req, res, next) {
    req.logout();
    res.locals.user = null;

    res.redirect('/login');
};

exports.postLogin = function(req, res, next) {
    res.redirect('/protected');
}

exports.protected = function(req, res, next) {
    res.render('dashboard', {
        title: 'Express.js'
    });
};
