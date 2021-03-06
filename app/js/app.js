'use strict';

angular.module('makeithappen', [
    'ngRoute',
    'ngResource',
    'jsonForms',
    'ui.ace'
]).config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/local', {
            templateUrl: 'templates/local.html',
            controller: 'LocalController'
        });
        $routeProvider.when('/remote', {
            templateUrl: 'templates/remote.html',
            controller: 'RemoteController'
        });
        $routeProvider.when('/editor', {
            templateUrl: 'templates/editor.html',
            controller: 'EditorController'
        });
        $routeProvider.when('/async', {
            templateUrl: 'templates/async.html',
            controller: 'AsyncController'
        });
        $routeProvider.otherwise({
            redirectTo: '/local'
        })
    }
]);