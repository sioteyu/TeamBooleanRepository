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
var formidable = require('formidable');
var fs = require('fs');

const keyFilename="./serviceKey.json";
const projectId = "teambooleaniacademy";
const bucketName = `${projectId}.appspot.com`;
const gcs = require('@google-cloud/storage')({
    projectId,
    keyFilename
});

const bucket = gcs.bucket(bucketName);

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
  console.log(req.files);
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
        req.session.name = childSnap.child('firstname').val() + ' ' + childSnap.child('lastname').val();
				console.log("Login Sucess!!!");
				res.render('profile', {name : req.session.name});
			}
		});
	});
};

exports.upload = function(req, res){
  // var bookRef = ref.child('books');
  // bookRef.push({
  //   title:req.body.title,
  //   author:req.body.author,
  //   description:req.body.description,
  //   longitude:req.body.longitude,
  //   latitude:req.body.latitude
  // });

  var form = new formidable.IncomingForm();
  form.uploadDir = './uploads';
  form.keepExtensions = true;
  form.parse(req, function(err, fields, files)
  {
    bucket.upload('./'+files.fileUploaded.path.replace('\\', '/'), function(err, file) {
        if(err)
        {
            console.log(err);
            return;
        }
      });
  });
  res.render('profile', {name:req.session.name});
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
  bookRef.on('value', function (snap) {
		snap.forEach(function (childSnap) {
      var child = childSnap.child('title').val();
        if (child.indexOf(req.query['searchItem'])!== -1) {
          console.log(child);
        }
			});
		});
    res.render('index');
};


//
// var bookRef = ref.child('books');
// bookRef.push({
//   title:req.body.title,
//   author:req.body.author,
//   description:req.body.description,
//   longitude:req.body.longitude,
//   latitude:req.body.latitude
// });
// res.render('profile');
