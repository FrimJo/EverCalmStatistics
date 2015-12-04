'use strict';

angular.module('evercalmStatisticsApp')
  .directive('sensedata', function () {
    return {
      templateUrl: 'app/sensedata/sensedata.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });