/**
 * Created by mzimmerman on 1/8/15.
 */

"use strict";

angular.module('directives',[])
    .directive('lectureContents', function($window) {

        function linkF(scope,element,attr) {

            var numH3 = $("h3").length;
            $(element).after("<p>$(h3) gets "+numH3+"</p>");

        }

        return {
            restrict: 'E',
            transclude: false,
            link: linkF
        };
    });