// MODULE
// Not Polluting the global namespace
//Evenrythiong will under angularApp variable which is in the Global namespace
//Here global namespace is same as the String that is searched in html got ng-app tag
//Inside [] goes the dependent modules, like ngMessages here

var angularApp = angular.module('angularApp', ['ngMessages'
                                               ,'ngResource'
                                               //, 'ngRoute'
                                              ]);

//angularApp.config(function ($routeProvider) {
//    
//    $routeProvider
//    
//    .when('/', {
//        templateUrl: 'index.htm',
//        controller: 'mainController'
//    })
//    
//    .when('/second', {
//        templateUrl: 'pages/second.html',
//        controller: 'secondController'
//    })
//    
//    .when('/first', {
//        templateUrl: 'pages/first.html',
//        controller: 'secondController'
//    })
//});

// CONTROLLERS
//NOT GOOD FOR MINIFICATION
//$scope,$log, $filter, $resource changes to a,b,c,d

angularApp.controller('mainController',  function ($scope,$log, $filter, $resource) {// injecting the two AngJS Services

    // *********************** SCOPE TESTING *********************
    $scope.myName = 'nitin';//Adding a string  variable to the $scope
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

    /*********************** Filter Testing *****************************/
     $scope.name = 'John';
    //using filter service
    $scope.formattedName = $filter('uppercase')($scope.name);

    $log.info($scope.name);
    $log.info($scope.formattedName);


});

// SECOND WAY OF DEPENDENCY INJECTION
// Wrapping in the array make is minifucation safe!!
// Keep the fuinction in the last
// DO NOT CHANGE THE ORDER in array!!
angularApp.controller('myController', ['$scope','$timeout', '$filter','$log', function ($scope,$timeTest, $filter, $log) {
    $scope.name = "Interpolation Example";

    //Run this after 3 seconds change the text
    $timeTest(function(){//timeTest is intention Alias of $timeout
        $scope.name = "Changes after 3 seconds!!";
    }, 3000);//IIFE

    /*********** Two Way Data Binding ***************/
    $scope.handle = '';

    $scope.lowercaseHandle = function(){
        return $filter('lowercase')($scope.handle);
    }

    /**************** WATHER DEMO ***********************/
    $scope.$watch('handle',function(newValue, oldValue){
       $log.info("Value Changed!!");
        $log.log("Old Value - " + oldValue + " || new-value - " + newValue);
    });

    /***************** CAVET ***************************
    The watching is within the Angular js context
    ****************************************************/
    //$timeout should be prefered as it is angularJS tag

    //settimeout starts a new thread
    setTimeout(function(){//setTimeout is nortmal javascript function!!
        //$scope.handle = 'newHandle';//The DOM will not update
        // set time out is a new thread. even though it changed the scope, but since it is outside
        // Angular JS it never added into the Digest Loop

        // apply is to the AngularJS context
        $scope.$apply(function(){
            $scope.handle = 'New Handle';
            console.log("Scope Changed");
        });

    },3000);

    /************************* RULES **************************************/
    $scope.newHandle = '';
     $scope.uppercasehandle = function() {//converting into uppercase
        return $filter('uppercase')($scope.newHandle);
    };

    $scope.characters = 5;

// Defining some rules to be iterated on the html
    $scope.rules = [
        {rulename: "Must be 5 characters"},
        {rulename: "Must not be used elsewhere"},
        {rulename: "Must be cool!!"}
    ];

    console.log($scope.rules);

    /******************************Alert ON CLICK EVENT*********************************************/

    $scope.methodToCallOnClick = function(){
        alert("Button Click Event Handled");
    };
}]);

/*********************************** EXAMPLE OF ROUTE PROVIDER ****************************/

//angularApp.controller('firstController',['$scope','$log', function ($scope,$log) {
//    $log.info($location.path());
//}]);
//
//angularApp.controller('secondController',['$scope','$log', function ($scope,$log) {
//    $log.info($location.path());
//}]);
