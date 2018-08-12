var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    
    .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
    .when('/second/:num', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
});

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
    
    
    
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {
    
    
    
}]);

// Adding a new Directive
myApp.directive("searchResult", function(){
    return {//Return the actual directive
        restrict:'AECM'//Attribute,Element,Class, CoMMent
        // tepmlate can be organised int he html files to be called from templateUrl
        //,template: '<a href="#" class="list-group-item"><h2> Test</h2><p> This is a paragraph </p></a>'
        ,templateUrl:'directive/searchresult.html'
        ,replace : true    // takes away the custom element and replaces the true html element
        
    }
})
