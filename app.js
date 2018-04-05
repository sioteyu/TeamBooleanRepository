var express = require('express')
  , index = require('./controllers/index')
  , user = require('./controllers/user')
  , admin = require('./controllers/admin')
  , http = require('http')
  , path = require('path');

var session = require('express-session');
var app = express();
var expressLayouts = require('express-ejs-layouts');


// all environments
app.set('port', process.env.PORT || 3000);
app.set('layout', 'layouts/mainLayout')
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(expressLayouts);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser({uploadDir:'./public/uploads', keepExtensions:true}));
app.use(express.methodOverride());
app.use(session({secret : 'shhhhhh', resave : true, saveUninitialized : false}));
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

index.indexPage(app);
admin.adminPage(app);
user.userPage(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
