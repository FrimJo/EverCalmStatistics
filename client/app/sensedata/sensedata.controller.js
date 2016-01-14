'use strict';

angular.module('evercalmStatisticsApp')
  .controller('SensedataCtrl', function ($window, $scope, $stateParams, $http, Auth, User) {

    // Try fetch a user id from the parameters.
    var userId = $stateParams.id
  
    if(userId){

      // If a user id were found, get sense data for that id.
      $http.get('/api/sensedata/' + userId).success(function(sensedata) { 
        
        google.load('visualization', '1.0', {
            'packages':['corechart'],
            'callback' : function(){
              drawChart(sensedata);
            }
          });
        });

    }else{
      
      // Else, check to see if a user is logged in.
      Auth.isLoggedInAsync(function (success){
        if(success){
          
          // If we have a logged in user, get it's id.
          userId = Auth.getCurrentUser()._id;
              
          // And fetch the sense data using that id. 
          $http.get('/api/sensedata/' + userId).success(function(sensedata) { 
            
            google.load('visualization', '1.0', {
              'packages':['corechart'],
              'callback' : function(){
                drawChart(sensedata);
              }
            });
          });
        }
      });
    }


  });
