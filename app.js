var express = require('express')
  , routes = require('./routes')
  , result = require('./routes/result')
  , http = require('http')
  , path = require('path');
var session = require('express-session');
var app = express();
var bodyParser = require('body-parser');


// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.favicon());
app.use(express.logger('dev'));
//app.use(express.bodyParser({uploadDir:'./uploads', keepExtensions:true}));
app.use(express.methodOverride());
app.use(session({secret : 'shhhhhh', resave : true, saveUninitialized : false}));
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


//all post and get
app.get('/', routes.index);
app.get('/profile', routes.profile);
app.get('/search', routes.search)
app.post('/signup', routes.signup);
app.post('/login', routes.login);
app.post('/upload', routes.upload);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
