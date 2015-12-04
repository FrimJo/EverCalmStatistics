'use strict';

describe('Controller: SensedataCtrl', function () {

  // load the controller's module
  beforeEach(module('evercalmStatisticsApp'));

  var SensedataCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SensedataCtrl = $controller('SensedataCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
