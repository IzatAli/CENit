var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const passport=require('passport');
const { Strategy }= require('passport-local');
const inputMiddleware = require('./middlewares/inputMiddleware')
//test routes
const {
  adminRouter,
  userRouters,
  clientRouter
} =require('./routes');
// actual Routes
const authMiddleware= require('./middlewares/authMiddleware')
//database connection
const mongoose = require('mongoose');
// var indexRouter = require('./routes/index');

var app = express();

//connect 
mongoose.connect('mongodb://127.0.0.1:27017/myDb',(err)=>{
  if (err){
    return console.log('Error connecting with DB',err);
  }

  console.log('DB connected successfilly')
});
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
/// verifing user Creditionals 
passport.use(new Strategy((username, password, done)=>{
  authMiddleware.executeLogin(username, password, done)

}
));
//inputmiddleware
app.use(inputMiddleware.handleOptions);
//Actual Routes
app.post('/signup', authMiddleware.userSignUp);
app.post('/login',
passport.initialize(),
passport.authenticate('local',{
  session:false,
  scope:[]
}),
authMiddleware.generateToken,
authMiddleware.respond
);
//app.use('/', indexRouter);
//Testing APIs
app.use('/users', userRouters);
app.use('/clients', clientRouter);
app.use('/admins', adminRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
