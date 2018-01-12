var firebase = require("firebase");
var config = {
    apiKey: "AIzaSyD_wHMWNXjgp3SGUFODlEespynmWRnqN5o",
    authDomain: "teambooleaniacademy.firebaseapp.com",
    databaseURL: "https://teambooleaniacademy.firebaseio.com",
    projectId: "teambooleaniacademy",
    storageBucket: "teambooleaniacademy.appspot.com",
    messagingSenderId: "490332136"
  };
firebase.initializeApp(config);
var ref = firebase.app().database().ref();

exports.index = function(req, res){
  res.render('index', { title: 'Express' });

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
        req.session.email = childSnap.child('email').val();
				console.log("Login Sucess!!!");
				res.render('profile', {
          firstname:childSnap.child('firstname').val(),
          lastname:childSnap.child('lastname').val()
        });
			}
		});
	});
};

exports.upload = function(req, res){
  var bookRef = ref.child('books');
  bookRef.push({
    title:req.body.title,
    author:req.body.author,
    description:req.body.description,
    longitude:req.body.longitude,
    latitude:req.body.latitude
  });
  res.render('profile');
};

exports.profile = function(req, res){
	if (req.session.email) {
    res.render('profile');
	}else{
    res.render('index');
  }

};
