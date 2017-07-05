var express = require('express');
var router = express.Router();
var passport = require('passport');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;

var homeController = require('./../controllers/home');

router.get('/', homeController.index);

router.get('/login', homeController.getLogin);

router.get('/logout', homeController.logout);

router.post('/login', passport.authenticate('local'), homeController.postLogin);

router.get('/protected', ensureLoggedIn(), homeController.protected);

module.exports = router;
