'use strict';

describe('Directive: sensedata', function () {

  // load the directive's module and view
  beforeEach(module('evercalmStatisticsApp'));
  beforeEach(module('app/sensedata/sensedata.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<sensedata></sensedata>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the sensedata directive');
  }));
});