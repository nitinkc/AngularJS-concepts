//Module
var myFirstApp = angular.module('myFirstApp',[
    'ngRoute',
    'ngResource'
]);

myFirstApp.config(function($routeProvider){
   
    $routeProvider
    
    .when('/',{
        templateUrl : 'pages/home.html',
        controller : 'homeController'
    })
    
    .when('/weather',{
        templateUrl : 'pages/weather.html',
        controller : 'weatherController'
    })
          
});

//Controllers

myFirstApp.controller('homeController',['$scope','cityService','$log', function ($scope, cityService,$log){
    $scope.city = cityService.city;
    
    // This will persist the value accross multiple #'s
     $scope.$watch('city', function(){
       cityService.city = $scope.city; 
    });
    $log.log(cityService.city);
    
}]);

myFirstApp.controller('weatherController',['$scope', 'cityService', '$resource' , function ($scope, cityService,$resource){
    $scope.city = cityService.city;
    
    $scope.weatherAPI = $resource()
}]);

//Service

// Sending the city name to the Weather Forecast page
myFirstApp.service('cityService', function() {
    
    //Setting a Default City
    //this.city = "Fremont, CA";
});