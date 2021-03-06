require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const jwt = require('jsonwebtoken');
const { checkAdmin } = require("./src/middlewares/checkAdmin");
const { checkLogin } = require("./src/middlewares/checkLogin");


const adminRouter = require("./src/routes/admin");
const authRouter = require("./src/routes/auth");
const indexRouter = require("./src/routes/index");
const categoryRouter = require("./src/routes/category");
const postRouter = require("./src/routes/post");

const app = express();

// view engine setup
app.set('views', path.join(__dirname,'src/', 'views'));
app.set('view engine', 'ejs');
app.use(
  logger(":method :url :status :response-time ms - :res[content-length]", {
    skip: (req, res) => {
      if (
        req.path.startsWith("/assets") ||
        req.path.startsWith("/assets") ||
        req.path.startsWith("/js") ||
        req.path.startsWith("/dist") ||
        req.path.startsWith("/uploads") ||
        req.path.startsWith("/stylesheets")
      )
        return true;
      return false;
    },
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use("/", require("./src/routes"))
app.use('/api/', indexRouter);
app.use("/api/", categoryRouter);
app.use("/api/", postRouter);
app.use("/api/auth", authRouter);


//app.use("/admin", checkLogin, checkAdmin, adminRouter);
app.use("/api/admin", adminRouter)
app.use("*", (req, res) => {
  return res.render("404NotFound")
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.send(err.message);
});

//init mongo
require("./config/mongo")

module.exports = app;
