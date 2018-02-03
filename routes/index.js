var firebase = require('firebase');
var singleton = require('./singleton.js');
var config = singleton.config;
var bucket = singleton.configAdmin;
firebase.initializeApp(config);
var ref = firebase.app().database().ref();
var formidable = require('formidable');
var fs = require('fs');


exports.index = function(req, res){
  res.render('index', { title: 'Express' });
  //download algorithm
  // bucket.file('68e94bf4eb6347674e058bd2f8c28094.jpg').download({
  // destination: './public/downloads/68e94bf4eb6347674e058bd2f8c28094.jpg'
  // })};
};

exports.signup = function(req, res){
	var usersRef = ref.child('users');
	usersRef.push({
	firstname: req.body.firstname,
	lastname: req.body.lastname,
	email: req.body.email,
	password: req.body.password
	});
};

exports.login = function(req, res){
	var usersRef = ref.child('users');
	usersRef.on('value', function (snap) {
		snap.forEach(function (childSnap) {
			if(childSnap.child('email').val()===req.body.email.trim()&&
					childSnap.child('password').val()===req.body.password.trim()){
        req.session.user = childSnap.key;
        req.session.email = childSnap.child('email').val();
        req.session.name = childSnap.child('firstname').val() + ' ' + childSnap.child('lastname').val();
				console.log("Login Sucess!!!");
				res.render('profile', {name : req.session.name});
			}
		});
	});
};

exports.profile = function(req, res){
	if (req.session.email) {
    res.render('profile',{name:req.session.name});
	}else{
    res.render('index');
  }
};

exports.search = function(req, res){
	var bookRef = ref.child('books');
  var json = {};
  var counter = 0;
  json['data'] = [];
  bookRef.on('value', function (snap) {
		snap.forEach(function (childSnap) {
      var child = childSnap.child('title').val().toLowerCase();;
        if (child.indexOf(req.query['searchItem'].toLowerCase()) !== -1) {
          bucket
          .file(childSnap.child('photo').val())
          .download({destination: './public/downloads/'+childSnap.child('photo').val()})
          .then(()=>{
            counter++;
            console.log(counter);
            json['data'].push(childSnap.val());
            if(counter==snap.numChildren()){
              res.render('results', json);
            }
          });
        }
			});
		})
};
