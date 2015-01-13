/**
 *
 * Created by mzimmerman on 1/6/15.
 */

"use strict";

angular.module('app', ['controllers','services','directives','ngRoute'])
    .config(function($locationProvider,$routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'welcome.html',
                controller: 'MainController'
            })
            .when('/lectures/:lectureDate', {
                templateUrl: 'lectures/lecture.html',
                controller: 'LecturesController'
            })
            .otherwise({
                redirectTo: '#!'
            });

        // Don't want to interpret hashed url's for static website
        // $locationProvider.html5Mode(true);

    });

