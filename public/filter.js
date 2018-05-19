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
  var bookList = $firebaseArray(ref)
  $scope.updateItems = function(){
    ref = firebase.database().ref().child("books").orderByChild("title").startAt($scope.query.toLowerCase()).endAt($scope.query.toLowerCase()+"\uf8ff");
    var bookList = $firebaseArray(ref);
    $scope.books = bookList;
  }
  $scope.changeVal = function(x){
    document.getElementById('valuedID').value = x.$id
  }
  $scope.books = bookList;
});
