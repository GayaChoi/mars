var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var app = express();


app.use(express.static(path.join(__dirname, 'app')));
app.use(favicon(path.join(__dirname,'app','Assets','images','favicon.ico')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'app/html', 'index.html'));
});

app.get('/forms', function (req, res) {
  res.sendFile(path.join(__dirname, 'app/html', 'forms.html'));
});

app.get('/buttons', function(req, res) {
  res.sendFile(path.join(__dirname, 'app/html', 'buttons.html'));
});

app.get('/modals', function(req, res) {
  res.sendFile(path.join(__dirname, 'app/html', 'modals.html'));
});

app.get('/preview', function(req, res) {
  res.sendFile(path.join(__dirname, 'app/html', 'preview.html')); 
});



// ERROR Handling

app.use(function(req, res, next) {
  const error = new Error('Page Not Found');
  error.status(404);
  res.send('404 Page Not Found');
  next(error);
});

app.use(function(req, res, next) {
  const error = new Error('method Allowed');
  error.status(405);
  res.send('405 method Allowed');
  next(error);
});

app.use(function(req, res, next) {
  const error = new Error('Service Unavailable');
  error.status(503);
  res.send('503 Service Unavailable');
  next(error);
});

app.use(function(req, res, next) {
 const error = new Error('Unauthorized');
 error.status(401);
 res.send('401 Unauthorized');
 next(error);
});

app.use(function(error, req, res, next) {
 res.status(error.status || 500);    
 res.send('500 Internal Server Error');
});

module.exports = app;
