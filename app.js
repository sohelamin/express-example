require('dotenv').config()
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const passport = require('passport');

const serverConfig = require('./config/server');
const dbConfig = require('./config/db');
require('./config/passport');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

try {
  mongoose.connect(`mongodb://${dbConfig.host}/${dbConfig.name}`, { useNewUrlParser: true });
} catch (error) {
  console.error(error);
}

app.use('/', require('./routes/index'));
app.use('/posts', require('./routes/post'));

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(serverConfig.port, () => console.log(`App listening on port ${serverConfig.port}`));
