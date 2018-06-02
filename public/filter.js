var config = {
    apiKey: "AIzaSyD_wHMWNXjgp3SGUFODlEespynmWRnqN5o",
    authDomain: "teambooleaniacademy.firebaseapp.com",
    databaseURL: "https://teambooleaniacademy.firebaseio.com",
    projectId: "teambooleaniacademy",
    storageBucket: "teambooleaniacademy.appspot.com",
    messagingSenderId: "490332136"
  };
firebase.initializeApp(config);
var app = angular.module("theApp", ["firebase"]);
app.controller("theCtr", function($scope, $firebaseArray) {
  var ref = firebase.database().ref().child("books").orderByChild("title");
  var userRef = firebase.database().ref().child("users").orderByChild("email");
  var bookList = $firebaseArray(ref)
  var userList = $firebaseArray(userRef);
  $scope.updateItems = function(){
    ref = firebase.database().ref().child("books").orderByChild("title").startAt($scope.query.toLowerCase()).endAt($scope.query.toLowerCase()+"\uf8ff");
    var bookList = $firebaseArray(ref);
    $scope.books = bookList;
  }
  $scope.updateUsers = function(){
    userRef = firebase.database().ref().child("users").orderByChild("email").startAt($scope.query.toLowerCase()).endAt($scope.query.toLowerCase()+"\uf8ff");
    var userList = $firebaseArray(userRef);
    $scope.users = userList;
  }
  $scope.changeVal = function(x){
    document.getElementById('valuedID').value = x.$id
  }
  $scope.deleteBook = function(book){
    bookList.$remove(book);
  }
  $scope.editBook = function(book){
    $scope.temps = book;
    console.log($scope.temps.comments);
  }
  $scope.ban = function(user){
    var temp = userList.$getRecord(user.$id)
    if (temp.isBanned) {
      temp.isBanned = false;
    }else{
      temp.isBanned = true;
    }
    userList.$save(temp)
  }
  $scope.addComment = function (id, name) {
    var d = new Date();
    commentRef = firebase.database().ref().child("users").child(id).child('comments')
    var currentDate = "";
    switch (d.getMonth()) {
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
    var title = document.querySelector('#title').value;
    var comment = document.querySelector('#comment').value;
    currentDate = currentDate + " " + d.getDate() + ", " + d.getFullYear();
    commentRef.push({
      title:title,
      comment:comment,
      date:currentDate,
      name:name
    })
  }
  $scope.books = bookList;
  $scope.users = userList;
});
