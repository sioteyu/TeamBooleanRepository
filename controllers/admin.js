var formidable = require('formidable');
var books = require('../models/books.js');


exports.adminPage = function(app){

  app.get('/users', function(req, res) {
    books.getUsers(req, res);
  });

  app.get('/admin', function(req, res) {
    res.render('admin/admin', {title:'Admin', layout:'layouts/adminLayout', page:'admin'});
  });

  app.get('/UploadBooks', function(req, res){
    console.log('uploadform');
    res.render('admin/upload', {title:'Admin', layout:'layouts/adminLayout', page:'uploadForm'});
  });

  app.post('/upload', function(req, res){
    var form = new formidable.IncomingForm();
    books.upload(req, res);
    res.render('admin/upload', {title:'Admin', layout:'layouts/adminLayout', page:'uploadForm'});
  });
}
