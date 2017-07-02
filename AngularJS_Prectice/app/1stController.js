myApp = angular.module('myApp',[]);

myApp.controller('1stController',function($scope){
  $scope.message ="Welcome";
  $scope.names=['jeet','harsh','arpan','sharvil','avnish'];
  $scope.cost = 30;
  $scope.student = {firstname:'Jeet',lastname:'Khatri',rollno:201612024};
});

myApp.controller('2stController',function(){
  this.message ="Welcome";
  this.names=['jeet','harsh','arpan','sharvil','avnish'];
  this.cost = 30;
  this.student = {firstname:'Jeet',lastname:'Khatri',rollno:201612024};
});
