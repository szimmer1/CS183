/**
 * Created by mzimmerman on 1/7/15.
 */

"use strict";

angular.module('services',[])
    .factory('lectureService', function($http) {
        var lectureService = {};

        lectureService.getLectures = function() {
            return $http.get(baseurl + 'lectures/lecture_list');
        };

        return lectureService;
    })
    .factory('dateService', function() {

        var dateService = {};

        var days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
        var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

        dateService.getFormattedDate = function(string) {
            var date = new Date(string);
            return (days[date.getDay()]+' '+months[date.getMonth()]+' '+(date.getDate()+1)+', '+date.getFullYear());
        };

        return dateService;
    })