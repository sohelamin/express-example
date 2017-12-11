const express = require('express');
let router = express.Router();
const passport = require('passport');
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;

const homeController = require('./../controllers/home');

router.get('/', homeController.index);

router.get('/login', homeController.getLogin);

router.get('/logout', homeController.logout);

router.post('/login', passport.authenticate('local'), homeController.postLogin);

router.get('/protected', ensureLoggedIn(), homeController.protected);

module.exports = router;
