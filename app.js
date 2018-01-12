var express = require('express')
  , routes = require('./routes')
  , result = require('./routes/result')
  , http = require('http')
  , path = require('path');
var session = require('express-session');
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
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
app.post('/signup', routes.signup);
app.post('/login', routes.login);
app.post('/upload', routes.upload);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
