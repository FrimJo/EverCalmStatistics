'use strict';

angular.module('evercalmStatisticsApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActionRegExp = function (regExp){
      var patt = new RegExp(regExp);
      return patt.test($location.path());
    }

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });