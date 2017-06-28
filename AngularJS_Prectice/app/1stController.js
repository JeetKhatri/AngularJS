myApp = angular.module('myApp',[]);

myApp.controller('1stController',function($scope){
  $scope.message ="Welcome";
  $scope.names=['jeet','harsh','arpan','sharvil','avnish'];
  $scope.cost = 30;
  $scope.student = {firstname:'Jeet',lastname:'Khatri',rollno:201612024};
});
