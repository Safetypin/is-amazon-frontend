'use strict';

/**
 * @ngdoc overview
 * @name isAmazonFrontEndApp
 * @description
 * # isAmazonFrontEndApp
 *
 * Main module of the application.
 */
angular
  .module('isAmazonFrontEndApp', [
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
