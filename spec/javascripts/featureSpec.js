describe('Feature Test', function() {

  var plane = new Plane();
  var airport = new Airport();

  it('lands at airport', function() {
    spyOn(airport, 'isStormy').and.returnValue(false);
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

  it('takes off', function(){
    spyOn(airport, 'isStormy').and.returnValue(false);
    plane.takeOff(airport);
    expect(airport.planes()).not.toContain(plane);
  });

  it('blocks takeoff when weather is stormy', function() {
    spyOn(airport, 'isStormy').and.returnValue(true);
    expect(function(){plane.takeOff(airport);}).toThrowError('Too stormy to take off!');
  });

  it('blocks landing when weather is stormy', function() {
    spyOn(airport, 'isStormy').and.returnValue(true);
    expect(function(){plane.land(airport);}).toThrowError('Too stormy to land!');
  });


});
