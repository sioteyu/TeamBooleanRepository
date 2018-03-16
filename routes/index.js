var firebase = require('firebase');
var singleton = require('./singleton.js');
var config = singleton.config;
var bucket = singleton.configAdmin;

firebase.initializeApp(config);
var ref = firebase.app().database().ref();
var formidable = require('formidable');
var fs = require('fs');
var filter = require('./filter.js');


exports.index = function(req, res){
  res.render('landingPage', { title: 'Home' });
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
  var json = {'title':'Results'};
  var query = req.query['searchItem'].toLowerCase();
  console.log(filter.filterAll(query));
  json['data'] = [];
  bookRef.on('value', function (snap) {
		snap.forEach(function (childSnap) {
      var child = childSnap.child('title').val().toLowerCase();;
      if (child.indexOf(query) !== -1) {
        json['data'].push(childSnap.val());
      }
			});
		})
    res.render('bookResult', json)
};
