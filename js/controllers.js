/**
 * Created by mzimmerman on 1/6/15.
 */

"use strict";

angular.module('controllers', [])
    .controller('MainController', ['$scope', 'lectureService', function($scope,lectureService) {

        $scope.mainTest = "Got MainController";

        getLectures();
        console.log($scope.lectureList);

        function getLectures() {
            lectureService.getLectures()
                .success(function(data) {
                    $scope.lectureList = _.compact(data.split(','));
                })
                .error(function(data,status) {
                    $scope.lectureList = "http get error, lectures not found, error:"+status;
                });
        }

    }])
    .controller('LecturesController', ['$scope','$routeParams','dateService',function($scope,$routeParams,dateService) {

        $scope.lecturesTest = "Got LecturesController";

        var _currentLecture = $routeParams.lectureDate;
        var date = new Date(_currentLecture);

        $scope.lectures = {
            currentLecture: _currentLecture,
            lectureUrl: baseurl+'lectures/'+_currentLecture+'.html',
            formattedLectureDate: dateService.getFormattedDate(_currentLecture)
        };

    }]);