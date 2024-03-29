var myApp = angular.module('myApp',['ngRoute','ngAnimate']);

myApp.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){

  $locationProvider.html5Mode(true);

  $routeProvider
  .when('/home',{
    templateUrl: 'views/home.html',
    controller: 'myController'
  })
  .when('/contact',{
    templateUrl: 'views/contact.html',
    controller: 'contactController'
  })
  .when('/contactSuccess',{
    templateUrl: 'views/contactSuccess.html'
  })
    .when('/directory',{
      templateUrl: 'views/directory.html',
      controller: 'myController'
    })
    .otherwise({
      redirectTo: '/home'
    });
}]);

myApp.directive('randomStudent',function(){
  return{
    restrict: 'E',
    scope: {
      students: "=",
      title: "="                 // = for binding data
    },
    templateUrl: 'views/random.html',        // transclude automatic false so not display anything inside <random-student> tag.
  //  transclude: true,                        // when we write true so display it and also hase to write ng-transclude where we want to display it
    replace: true,                       // when we do this it replace <random-student> with outermost tag of random page, check in insepect element
    controller:function($scope){
      $scope.random = Math.floor(Math.random() * 5);
    }
  };
});

myApp.controller('myController',function($scope,$http){
    $scope.message ="Welcome";

    $scope.removeAllStudent = function(){
      $scope.students = [];
    };

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

myApp.controller('contactController',function($scope,$location){

      $scope.sendMessage = function(){
          $location.path('/contactSuccess');
      }

});
