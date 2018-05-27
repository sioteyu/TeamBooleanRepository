var formidable = require('formidable');
var books = require('../models/books.js');
var users = require('../models/users.js');

exports.adminPage = function(app){

  app.get('/users', function(req, res) {
    if (req.session.authority == 'admin') {
      books.getUsers(req, res);
    }else{
      res.redirect('http://localhost:3000/');
    }
  });

  app.get('/admin', function(req, res) {
    if (req.session.authority == 'admin') {
      res.render('admin/admin', {title:'Admin', layout:'layouts/adminLayout'});
    }else{
      res.redirect('http://localhost:3000/');
    }

  });

  app.get('/books', function(req, res){
    if (req.session.authority == 'admin') {
      res.render('admin/books', {title:'Admin', layout:'layouts/adminLayout'});
    }else{
      res.redirect('http://localhost:3000/');
    }
  });

  app.get('/edit', function(req, res){
    if (req.session.authority == 'admin') {
      res.render('admin/editBook', {title:'Admin', layout:'layouts/adminLayout'});
    }else{
      res.redirect('http://localhost:3000/');
    }
  });

  app.get('/add', function(req, res){
    if (req.session.authority == 'admin') {
      res.render('admin/addBook', {title:'Admin', layout:'layouts/adminLayout'});
    }else{
      res.redirect('http://localhost:3000/');
    }
  })

  app.post('/upload', function(req, res){
    var form = new formidable.IncomingForm();
    books.upload(req, res);
    res.render('admin/upload', {title:'Admin', layout:'layouts/adminLayout'});
  });

  app.post('/status', function(req, res){
    users.updateStatus(req.body.userID, function(){
      res.redirect('http://localhost:3000/users')
    })
  });

}
