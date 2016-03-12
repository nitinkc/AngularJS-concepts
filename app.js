// MODULE
// Not Polluting the global namespace
//Evenrythiong will under angularApp variable which is in the Global namespace
//Here global namespace is same as the String that is searched in html got ng-app tag
//Inside [] goes the dependent modules, like ngMessages here


var angularApp = angular.module('angularApp', ['ngMessages','ngResource']);

// CONTROLLERS
//NOT GOOD FOR MINIFICATION
//$scope,$log, $filter, $resource changes to a,b,c,d
angularApp.controller('mainController',  function ($scope,$log, $filter, $resource) {// injecting the two AngJS Services
    
    // *********************** SCOPE TESTING *********************
    $scope.myName = 'nitin';//Adding a variable to the $scope
    console.log($scope);//Angular js doing dependency injection
    
    var searchPeople = function(firstName, lastName, height, age, occupation){
        return 'Jane Dow';
    }
   
    // ********************** LOG MESSAGES **************************
    //Return the parameters of the function searchPeople
    console.log(angular.injector().annotate(searchPeople));
    //place to put the code associated with the controller
    console.log($log);
    
    $log.log("This is a Log");
    $log.info("This is some information");
    $log.error("Demo of error");
    $log.warn("warning");
    $log.debug("debug");
    
    //*********************** Filter Testing *****************************
     $scope.name = 'John';
    //using filter service
    $scope.formattedName = $filter('uppercase')($scope.name);
    
    $log.info($scope.name);
    $log.info($scope.formattedName);
    

});

//SECOND WAY OF DEPENDENCY INJECTION
//Wrapping in the array make is minifucation safe!!
//Keep the fuinction in the last
//DO NOT CHANGE THE ORDER in array!!
angularApp.controller('myController', ['$scope','$timeout', '$filter', function ($scope,$timeTest, $filter) {
    $scope.name = "Interpolation Example";
    
    //Run this after 3 seconds
    $timeTest(function(){//timeTest intention Alias of $timeout
        $scope.name = "Changes after 3 seconds!!";
    }, 3000);//IIFE
    
    $scope.handle = '';
    
    $scope.lowercaseHandle = function(){
        return $filter('lowercase')($scope.handle);
    }
    
}]);



