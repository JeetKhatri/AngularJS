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

myApp.controller('myController',function($scope,$http){
    $scope.message ="Welcome";

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
               // for success -> response, for error -> error
    $http.get('data/students.json').then(function(response){
      $scope.students = response.data;
    });

  });
