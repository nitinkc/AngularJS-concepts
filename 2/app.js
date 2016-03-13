var myApp = angular.module('myApp', ['ngRoute']);


/********************* CONFIG **********************************/
myApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'home.html',
        controller: 'mainController'
    })
    .when('/extra', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    
    .when('/first', {
        templateUrl: 'pages/first.html',
        controller: 'firstController'
    })
    
    .when('/second/:num', {//pattern matching
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
    //If no param is given to the second
    .when('/second', {//pattern matching
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
});


/********************* CONTROLLERS **********************************/
//$log is singleton. Exception is $scope
myApp.controller('mainController', ['$scope', '$log', 'nameService', function($scope, $log, x) {//x is for demonstration purpose
    
    $scope.name = x.name;
    
    // This will persist the value accross multiple #'s
     $scope.$watch('name', function(){
       x.name = $scope.name; 
    });
    $log.log(x.name);
    $log.log(x.nameLength());
    
}]);

myApp.controller('firstController', ['$scope', '$log', function($scope, $log) {
    
    $scope.name = 'Main';
    
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', 'nameService', function($scope, $log, $routeParams, nameService) {
    
    //Catch the route param
    $scope.num = $routeParams.num || -1;// Set it to 1 of nothing is given
    
    // Trying to bind the name with the second controller using the singleton services 'nameService'
    $scope.name = nameService.name;
    
     // This will persist the value accross multiple #'s
    $scope.$watch('name', function(){
       nameService.name = $scope.name; 
    });
}]);


/*************************** SERVICES *******************************************/
myApp.service('nameService',function(){
    var self = this;
    
    this.name = 'Nitin Kumar';
    
    this.nameLength = function() {
        return self.name.length;
    };
});
