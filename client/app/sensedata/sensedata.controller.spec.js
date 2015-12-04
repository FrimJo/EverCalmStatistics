'use strict';

describe('Controller: SensedataCtrl', function () {

  // load the controller's module
  beforeEach(module('evercalmStatisticsApp'));

  var SensedataCtrl, scope, $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/gsr')
      .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);


    scope = $rootScope.$new();
    SensedataCtrl = $controller('SensedataCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of sensedata to the scope', function () {
    $httpBackend.flush();
    expect(scope.sensedata.length).toBe(4);
  });
});
