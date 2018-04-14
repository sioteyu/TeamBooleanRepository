var firebase = require('firebase');
var singleton = require('../helpers/singleton.js');
var config = singleton.config;
var bucket = singleton.configAdmin
firebase.initializeApp(config);

var ref = firebase.app().database().ref();

exports.addUser = function(req, res){
  var usersRef = ref.child('users');
	usersRef.push({
	firstname: req.body.firstname,
	lastname: req.body.lastname,
	email: req.body.email,
	password: req.body.password,
  isBanned: false
	});
}

exports.authenticate = function(req, res){
  var usersRef = ref.child('users');
	usersRef.on('value', function (snap) {
		snap.forEach(function (childSnap) {
			if(childSnap.child('email').val()===req.body.email.trim()&&
					childSnap.child('password').val()===req.body.password.trim()){
        req.session.user = childSnap.key;
        req.session.email = childSnap.child('email').val();
        req.session.name = childSnap.child('firstname').val() + ' ' + childSnap.child('lastname').val();
				console.log("Login Sucess!!!");
        res.render('profilePage', {header:'Profile'});
			}
		});
	});
}
