exports.userPage = function(app){
  var users = require('../models/users.js');
  app.post('/logout', function(req, res){
    req.session.destroy(function(err){
      if (err) {
        console.log(err);
      }else{
        res.render('landingPage', { header: 'Home', user: '', photo:req.session.photo});
      }
    });
  });

  app.get('/profile', function(req, res) {
    if (req.session.user) {
      users.getUser(req.session.user, function(data){
        res.render('profilePage', {header:'Profile', user: req.session.user, userData: data, photo:req.session.photo});
      })

    }else{
      res.render('landingPage', { header: 'Home', user: req.session.user, photo:req.session.photo});
    }
  });

  app.post('/login', function(req, res){
  	users.authenticate(req, res, function(){
      users.getUser(req.session.user, function(data){
        res.render('profilePage', {header:'Profile', user: req.session.user, userData: data, photo:req.session.photo});
      })
    });
  });
}
