exports.userPage = function(app){
  var users = require('../models/users.js');
  var books = require('../models/books.js')
  app.post('/logout', function(req, res){
    req.session.destroy(function(err){
      if (err) {
        console.log(err);
      }else{
        res.redirect('http://localhost:3000')
      }
    });
  });

  app.get('/profile', function(req, res) {
    var json = {};
    if (req.session.user) {
      users.getUser(req.session.user, function(userData){
        if(userData['favorites']){
          var favorites = userData['favorites'].split(',');
          books.getMultipleBook(favorites, function(data) {
            books.getMyBook(req.session.user, function (mybooks) {
              console.log(data);
              res.render('profilePage', {header:'Profile', user: req.session.user, userData:userData, favorites:data, myBooks:mybooks, userPhoto:req.session.photo});
            })
          });
        }else{
          books.getMyBook(req.session.user, function (mybooks) {
            res.render('profilePage', {header:'Profile', user: req.session.user, userData: userData, favorites: {}, myBooks:mybooks, userPhoto:req.session.photo});

        })
      }
      })

    }else{
      res.redirect('http://localhost:3000/')
    }
  });

  app.get('/view', function(req, res){
    if (req.session.user) {
      users.getUser(req.query['id'], function(userData){
        if(userData['favorites']){
          var favorites = userData['favorites'].split(',');
          books.getMultipleBook(favorites, function(data) {
            res.render('otherProfile', {header:'Profile', user: req.session.user, userData: userData, favorites: data, userPhoto:req.session.photo, query:req.query['id']});
          });
        }else{
          res.render('otherProfile', {header:'Profile', user: req.session.user, userData: userData, favorites: {}, userPhoto:req.session.photo, query:req.query['id']});
        }

      })

    }else{
      res.redirect('http://localhost:3000/')
    }
  });

  app.post('/login', function(req, res){
  	users.authenticate(req, res, function(status){
      if (req.session.authority == 'admin') {
        res.redirect('http://localhost:3000/admin')
      }else{
        if(status){
          users.getUser(req.session.user, function(userData){
            if(userData['favorites']){
              var favorites = userData['favorites'].split(',');
              books.getMultipleBook(favorites, function(data) {
                res.redirect('http://localhost:3000/profile');
              });
            }else{
              res.redirect('http://localhost:3000/profile');
            }

          })
        }else{
          res.redirect('http://localhost:3000/')
        }
      }
    });
  });

  app.post('/advertise', function(req, res){
    books.advertiseBook(req, function(){
      res.render('success', {message:'Your book has been successfully advertised!', header: 'Home', user: req.session.user, userPhoto:req.session.photo});
    })
  });

  app.get('/advertise', function(req, res){
    if(req.session.user){
      res.render('uploadPage', {header: 'Home', user: req.session.user, userPhoto:req.session.photo});
    }else{
      res.redirect('http://localhost:3000/')
    }
  })

  app.post('/feedback', function (req, res) {

  })
}
