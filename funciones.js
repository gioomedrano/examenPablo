var examenPablo = angular.module('examenPablo', []);
examenPablo.controller("Resta", function($scope){
  
 $scope.cantidad1= 35;
 $scope.cantidad2= 75;
 $scope.total= 0;


  $scope.total = $scope.cantidad1 - $scope.cantidad2

  })
examenPablo.controller("Suma", function($scope){
  
 $scope.cantidad1= 50;
 $scope.cantidad2= 50;
 $scope.total= 0;


  $scope.total = $scope.cantidad1 + $scope.cantidad2

  });
