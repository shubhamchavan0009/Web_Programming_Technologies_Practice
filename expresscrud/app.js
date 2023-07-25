var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const hbs=require('hbs')
const cors=require('cors')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const userRouter=require('./routes/user')

var app = express();
/* mongodb */
const mongoose=require('mongoose')
mongoose.connect('mongodb://0.0.0.0:27017/expressdb')
.then(()=>console.log("Connected..!!"))
.catch((err)=>console.log(`Error :${err}`))




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')));
// boostrap file location path
app.use(express.static(__dirname+'/node_modules/bootstrap/dist'));
// jquery file location path
app.use(express.static(__dirname+'/node_modules/jquery/dist'));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/user', userRouter);

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
