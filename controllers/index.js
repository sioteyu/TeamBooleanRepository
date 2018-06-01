var formidable = require('formidable');
var fs = require('fs');
var users = require('../models/users.js');
var books = require('../models/books.js');
var comments = require('../models/comments.js');
var crypto = require('../helpers/encryption.js');

exports.indexPage = function(app){

  app.get('/', function(req, res){
    res.render('landingPage', { header: 'Home', user: req.session.user, userPhoto:req.session.photo});
  });

  app.get('/search', function(req, res){
  	books.searchBook(req, res);
  });

  app.get('/bookPreview', function(req, res){
    books.getBook(req.query['id'], function(data){
      comments.getComments(req, res, req.query['id'], function(json){
        data['favorite'] = 'off'

        data['header'] = 'Book Preview';
        data['user'] = req.session.user;
        data['bookID'] = req.query['id'];
        data['comments'] = json;
        data['userPhoto'] = req.session.photo;
        books.getAvails( req.query['id'], data, function(newData){
          if (req.session.user) {
            users.getUser(req.session.user, function(userData){
              if(userData['favorites']){
                var favorites = userData['favorites'].split(',');
                for (var i = 0; i < favorites.length; i++) {
                  if(req.query['id'] == favorites[i]){
                    newData['favorite'] = 'on';
                    break;
                  }
                }
              }else{
                newData['favorite'] = 'off';
              }
              res.render('bookPreview', newData);
            })
          }else {
            res.render('bookPreview', newData);
          }
        })

      });
    });
  });

  app.post('/comment', function(req, res){
    comments.addComment(req, res, req.body.bookID);
    res.redirect('http://localhost:3000/bookPreview?id='+req.body.bookID);
  });

  app.post('/signup', function(req, res){
    users.addUser(req, res);
      res.render('success', {message:'You have successfully registered!', header: 'Home', user: req.session.user, userPhoto:req.session.photo});
  });
}
