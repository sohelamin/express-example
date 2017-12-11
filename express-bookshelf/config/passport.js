const passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;

const User = require('./../models/User');

passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    }, function (email, password, done) {
        new User({email: email})
            .fetch()
            .then(function(user) {
                if (!user) {
                    return done(null, false, { message: 'Incorrect email.' });
                }

                if (user.get('password') != password) {
                    return done(null, false, { message: 'Incorrect password.' });
                }

                return done(null, user.toJSON());
            });
    }
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    new User({id: id})
        .fetch()
        .then(function(user) {
            done(false, user.toJSON());
        });
});
