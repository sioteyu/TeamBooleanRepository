exports.userPage = function(app){
  var users = require('../models/users.js');
  var books = require('../models/books.js')
  app.post('/logout', function(req, res){
    req.session.destroy(function(err){
      if (err) {
        console.log(err);
      }else{
        res.render('landingPage', { header: 'Home', user: '', userPhoto:''});
      }
    });
  });

  app.get('/profile', function(req, res) {
    if (req.session.user) {
      users.getUser(req.session.user, function(userData){
        var favorites = userData['favorites'].split(',');
        books.getMultipleBook(favorites, function(data) {
          console.log(data);
            res.render('profilePage', {header:'Profile', user: req.session.user, userData: userData, favorites: data, userPhoto:req.session.photo});
        });

      })

    }else{
      res.render('landingPage', { header: 'Home', user: req.session.user, userPhoto:req.session.photo});
    }
  });

  app.post('/login', function(req, res){
  	users.authenticate(req, res, function(){
      users.getUser(req.session.user, function(userData){
        var favorites = userData['favorites'].split(',');
        books.getMultipleBook(favorites, function(data) {
          res.render('profilePage', {header:'Profile', user: req.session.user, userData: userData, favorites: data, userPhoto:req.session.photo});
        });
      })
    });
  });
}
