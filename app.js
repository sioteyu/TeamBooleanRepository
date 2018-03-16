var express = require('express')
  , index = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');
var session = require('express-session');
var app = express();
var bodyParser = require('body-parser');
var expressLayouts = require('express-ejs-layouts');


// all environments
app.set('port', process.env.PORT || 3000);
app.set('layout', 'layouts/layout')
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(expressLayouts);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser({uploadDir:'./uploads', keepExtensions:true}));
app.use(express.methodOverride());
app.use(session({secret : 'shhhhhh', resave : true, saveUninitialized : false}));
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


//get
app.get('/', index.index);
app.get('/profile', index.profile);
app.get('/search', index.search)
app.get('/logout', user.logout);
app.get('/admin', function(req, res){
  res.render('upload', {title:'admin', layout:false});
})
//post
app.post('/signup', index.signup);
app.post('/login', index.login);
app.post('/upload', user.upload);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
