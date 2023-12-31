const express = require('express');
const createHttpError = require('http-errors');
const morgan = require('morgan');
require('dotenv').config();
const pool = require("./db")
const connectFlash = require('connect-flash');
const passport = require('passport');
const { ensureLoggedIn } = require('connect-ensure-login');
const session = require('express-session');


// Initialization
const app = express();

app.use(express.json());

// For Passport JS Authentication
// app.use(passport.initialize());
// app.use(passport.session());
// require('./utils/passport.auth');

// app.use((req, res, next) => {
//   res.locals.user = req.user;
//   next();
// });

// Connect Flash
// app.use(connectFlash());
// app.use((req, res, next) => {
//   res.locals.messages = req.flash();
//   console.log("hjhkl")
//   next();
// });

// Routes
app.use('/', require('./routes/index.route'));
app.use('/auth', require('./routes/auth.route'));
app.use(
  '/user',
  require('./routes/user.route')
);
app.use(
  '/admin',
  require('./routes/admin.route')
);

// 404 Handler
app.use((req, res, next) => {
  next(createHttpError.NotFound());
});

// Error Handler
app.use((error, req, res, next) => {
  error.status = error.status || 500;
  res.status(error.status);
  res.render('error_40x', { error });
});

app.listen(3000, () => {
  console.log("listening on port 3000")
})