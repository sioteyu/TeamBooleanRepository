exports.userPage = function(app){
  var users = require('../models/users.js');
  app.get('/logout', function(req, res){
    req.session.destroy();
    res.render('index');
  });

  app.get('/profile', function(req, res) {
    if (req.session.user) {
      res.render('profilePage', {title:'Profile', user: req.session.user});
    }
  });

  app.post('/login', function(req, res){
  	users.authenticate(req, res);
  });
}
