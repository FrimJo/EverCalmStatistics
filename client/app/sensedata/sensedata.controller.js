'use strict';

angular.module('evercalmStatisticsApp')
  .controller('SensedataCtrl', function ($scope, $http) {

  	$scope.sensedata = [];

    $scope.message = 'Hello';



    $http.get('/api/sensedata/'+$User._id).success(function(sensedata) {
    	$scope.sensedata = sensedata;

    	google.load('visualization', '1.0', {
	        'packages':['corechart'],
	        'callback' : function(){
				drawChart($scope.sensedata);
        	}
		});
    });
  });
