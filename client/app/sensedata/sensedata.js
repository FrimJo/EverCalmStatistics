'use strict';

angular.module('evercalmStatisticsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('sensedata', {
        url: '/sensedata',
        templateUrl: 'app/sensedata/sensedata.html',
        controller: 'SensedataCtrl'
      });
  });