var firebase = require('firebase');
var singleton = require('../helpers/singleton.js');
var config = singleton.config;
var bucket = singleton.configAdmin;

var ref = firebase.app().database().ref();

exports.addComment = function(req, res, bookID){
  var commentsRef = ref.child('books').child(bookID).child('comments');
  var datetime = new Date();
  var currentDate = "";
  switch (datetime.getMonth()) {
    case 0:
      currentDate = "January";
      break;
    case 1:
      currentDate = "February";
      break;
    case 2:
      currentDate = "March";
      break;
    case 3:
      currentDate = "April";
      break;
    case 4:
      currentDate = "May";
      break;
    case 5:
      currentDate = "June";
      break;
    case 6:
      currentDate = "July";
      break;
    case 7:
      currentDate = "August";
      break;
    case 8:
      currentDate = "September";
      break;
    case 9:
      currentDate = "October";
      break;
    case 10:
      currentDate = "November";
      break;
    case 11:
      currentDate = "December";
      break;
  }
  currentDate = currentDate + " " + datetime.getDate() + ", " + datetime.getFullYear();
  commentsRef.push({
    title: req.body.pixrating_title,
    body: req.body.comment,
    rating: req.body.pixrating,
    date: currentDate
    });
  }

  exports.getComments = function(req, res, bookID, cb){
    var commentsRef = ref.child('books').child(bookID).child('comments');
    var json = {};
    json['comments'] = [];
    commentsRef.once('value', function (snap) {
      snap.forEach(function (childSnap) {
        json['comments'].push(childSnap.val());
      });
      cb(json);
  	});
  }
