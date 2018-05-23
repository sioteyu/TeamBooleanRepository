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
    temp.isBanned = true;
    userList.$save(temp)
  }

  $scope.unBan = function(user){
    var temp = userList.$getRecord(user.$id)
    temp.isBanned = false;
    userList.$save(temp)
  }
  $scope.books = bookList;
  $scope.users = userList;
});
