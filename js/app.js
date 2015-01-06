/**
 *
 * Created by mzimmerman on 1/6/15.
 */

"use strict";

angular.module('app', ['controllers','ngRoute'])
    .config(function($locationProvider,$routeProvider) {

        $routeProvider
            .when('/lectures/:lectureDate', {
                templateUrl: 'lectures/lecture.html',
                controller: 'LecturesController'
            })
            .otherwise({
                templateUrl: '404.html'
            });

    });

