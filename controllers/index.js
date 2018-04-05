var formidable = require('formidable');
var fs = require('fs');
var users = require('../models/users.js');
var books = require('../models/books.js');
var crypto = require('../helpers/encryption.js')

exports.indexPage = function(app){

  app.get('/', function(req, res){
    res.render('landingPage', { title: 'Home' });
  });

  app.get('/search', function(req, res){
  	books.searchBook(req, res);
  });

  app.post('/signup', function(req, res){
    users.addUser(req, res);
  });
  app.get('/bookPreview', function(req, res){
    res.render('bookPreview', {title: 'Results'});
  })
}
