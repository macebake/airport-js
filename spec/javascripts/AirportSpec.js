describe('Airport', function() {

  var plane = jasmine.createSpy('plane');
  var airport = new Airport();

  it('responds to planes', function() {
    expect(airport.planes).not.toBeUndefined();
  });

  it('lands plane after cleared for landing', function(){
    spyOn(airport, 'isStormy').and.returnValue(false);
    airport.clearedForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });

  it('lets plane takes off after cleared for takeoff', function(){
    spyOn(airport, 'isStormy').and.returnValue(false);
    airport.clearedForTakeOff(plane);
    expect(airport.planes()).toEqual([]);
  });

  it('can check for stormy weather', function() {
    expect(airport.isStormy()).toBeDefined();
  });

});
