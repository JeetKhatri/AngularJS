var myfilter = angular.module('myfilter',[]);

  myfilter.filter("availability",function(){
    return function (availability){
      switch(availability){
      case 1:
        return "Available";
      case 2:
        return "Not Available";
     }
   }
  });

  myfilter.controller('filterController',function($scope){
    $scope.message ="Welcome";
    $scope.students = [
      {
        name : 'jeet',
        id : 201612024,
        isAvailable : 1
      },
      {
        name : 'harsh',
        id : 201612043,
        isAvailable : 2
      },
      {
        name : 'arpan',
        id : 201612056,
        isAvailable : 2
      },
      {
        name : 'sharvil',
        id : 201612023,
        isAvailable : 1
      },
      {
        name : 'avnish',
        id : 201612038,
        isAvailable : 1
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
