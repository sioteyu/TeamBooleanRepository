var firebase = require('firebase');
var singleton = require('../helpers/singleton.js');
var config = singleton.config;
var bucket = singleton.configAdmin;
var filter = require('../helpers/filter.js');
var ref = firebase.app().database().ref();

exports.upload = function(req, res){
  var bookRef = ref.child('books');
  console.log('./'+req.files.fileUploaded.path.replace('\\', '/'));
  bucket.upload('./'+req.files.fileUploaded.path.replace('\\', '/'), function(err, file) {
    var photoName = req.files.fileUploaded.path.split('\\');
    bookRef.push({
      title:req.body.title,
      author:req.body.author,
      description:req.body.description,
      photo:photoName[2],
      availability: null,
      comments: null,
      ratings: 0
    });
      if(err)
      {
          console.log(err);
          return;
      }
    });
}
exports.getUsers = function(req, res) {
  var usersRef = ref.child('users');
  var json = {'title':'Admin', 'layout':'layouts/adminLayout', page:'users'};
  json['data'] = [];
  usersRef.on('value', function (snap) {
		snap.forEach(function (childSnap) {
      json['data'].push(childSnap.val());
		});
    res.render('admin/users', json);
	});
}

exports.searchBook = function(req, res){
  var bookRef = ref.child('books');
  var json = {'header':'Results'};
  var query = req.query['searchItem'].toLowerCase().trim();
  json['data'] = [];
    bookRef.on('value', function (snap) {
    	snap.forEach(function (childSnap) {
        var child = childSnap.child('title').val().toLowerCase();;
        if (child.indexOf(query) !== -1) {
          json['data'].push(childSnap.val());
        }
  			});
        req.session.data = json;
        res.render('bookResult', req.session.data);
		});
}
