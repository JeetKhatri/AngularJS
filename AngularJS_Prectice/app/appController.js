var myApp = angular.module('myApp',['ngRoute']);

myApp.config(['$routeProvider',function($routeProvider){

  $routeProvider
    .when('/home',{
      templateUrl: 'views/home.html'
    })
    .when('/directory',{
      templateUrl: 'views/directory.html',
      controller: 'myController'
    })
    .otherwise({
      redirectTo: '/home'
    });
}]);

myApp.controller('myController',function($scope){
    $scope.message ="Welcome";
    $scope.students = [
      {
        name : 'jeet',
        id : 201612024,
        isAvailable : true
      },
      {
        name : 'harsh',
        id : 201612043,
        isAvailable : false
      },
      {
        name : 'arpan',
        id : 201612056,
        isAvailable : false
      },
      {
        name : 'sharvil',
        id : 201612023,
        isAvailable : true
      },
      {
        name : 'avnish',
        id : 201612038,
        isAvailable : true
      }
    ];

    $scope.removeStudent = function(s){
      var rs = $scope.students.indexOf(s);
      $scope.students.splice(rs,1);
    };

    $scope.addStudent = function(){
      $scope.students.push({
        name : $scope.newStudent.name,
        id : $scope.newStudent.id,
        isAvailable : true
      });
       $scope.newStudent.name="";
       $scope.newStudent.id="";
    };

  });
