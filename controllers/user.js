exports.userPage = function(app){

  app.get('/logout', function(req, res){
    req.session.destroy();
    res.render('index');
  });
  
}
