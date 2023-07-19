const express = require("express");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const {
  verifyToken,
  verifyStudent,
  verifyAdmin,
} = require("./middleware/verifyToken");
const app = express();
app.use(bodyParser.json());

// app.listen(5500, () => {
//   console.log("server is listening on port 5500");
// });
// const authenticate = require("./verifyToken.js");
// app.use(authenticate)

app.use(express.json());

// For Passport JS Authentication
// app.use(passport.initialize());
// app.use(passport.session());
// require("./utils/passport.auth");

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
app.use("/", require("./routes/index.route"));
app.use("/auth", require("./routes/auth.route"));
app.use(
  "/users",
  // ensureLoggedIn({ redirectTo: '/auth/login' }),
  verifyToken,
  verifyStudent,
  require("./routes/student.route")
);
app.use(
  "/college",
  verifyToken,
  verifyAdmin,
  require("./routes/college.route")
);

// 404 Handler
app.use((req, res, next) => {
  next(createHttpError.NotFound());
});

// Error Handler
app.use((error, req, res, next) => {
  error.status = error.status || 500;
  res.status(error.status);
  // res.render("error_40x", { error });
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
