var firebase = require('firebase');
var singleton = require('../helpers/singleton.js');
var config = singleton.config;
var bucket = singleton.configAdmin;
var filter = require('../helpers/filter.js');
var ref = firebase.app().database().ref();

exports.upload = function(req, res){
  console.log(req.body.genre);
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
  var json = {'title':'Admin', 'layout':'layouts/adminLayout', page:'users', user: req.session.user};
  json['data'] = [];
  usersRef.once('value', function (snap) {
		snap.forEach(function (childSnap) {
      json['data'].push(childSnap.val());
      json['userPhoto'] = req.session.photo;
		});
    res.render('admin/users', json);
	});
}

exports.searchBook = function(req, res){
  var bookRef = ref.child('books');
  var json = {'header':'Results'};
  var query = req.query['searchItem'].toLowerCase().trim();
  json['data'] = [];
  json['userPhoto'] = req.session.photo;
  json['user'] = req.session.user;
    bookRef.once('value', function (snap) {
    	snap.forEach(function (childSnap) {
        var child = childSnap.child('title').val().toLowerCase();
        if (child.indexOf(query) !== -1) {
          json['data'].push(childSnap.val());
          json.data[json.data.length - 1].key = childSnap.key;
        }
  			});
        res.render('bookResult', json);
		});
  }
  exports.getBook = function(query, cb){
    var bookRef = ref.child('books');

    bookRef.once('value', function (snap) {
      cb(snap.val()[query]);
    });
  }
  exports.getMultipleBook = function(query, cb){
    var bookRef = ref.child('books');
    var json = {};
    json['bookData'] = [];
    counter = 0
    for (var i = 0; i < query.length; i++) {
      bookRef.child(query[i]).on('value', function(snap){
        json['bookData'].push(snap.val());
        counter += 1;
        if(counter == query.length){
          cb(json)
        }
      });
    }
  }

  exports.getMyBook = function(id, cb){
    var bookRef = ref.child('books');
    var json = {};
    json['myBooks'] = [];
    bookRef.once('value', function (snap) {
      snap.forEach(function (childSnap) {
        childSnap.child('availability').forEach(function (snapChild) {
          if (snapChild.child('id').val() == id) {
            json['myBooks'].push(childSnap.val())
          }
        })
      })
      cb(json)
    })
  }

  exports.advertiseBook = function(req, cb){
      var availRef = ref.child('books').child(req.body.valuedID).child('availability');
      availRef.push({
        user:req.session.name,
        id:req.session.user,
        type:req.body.job,
        description:req.body.description,
        longitude:req.body.longitude,
        latitude:req.body.latitude,
        address:req.body.address
      });
      cb();
  }


  exports.getAvails = function(query, data, cb){
      var availRef = ref.child('books').child(query).child('availability');
      data['availability'] = [];
      availRef.once('value', function(snap){
        snap.forEach(function (childSnap) {
          data['availability'].push(childSnap.val());
        });
        cb(data)
      });
  }
