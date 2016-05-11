describe("Plane", function() {

  var plane = new Plane();
  var airport = jasmine.createSpyObj('airport',['clearedForLanding'], ['clearedForTakeOff']);

  it('lands at an airport', function() {
    expect(plane.land).not.toBeUndefined();
  });

  it('takes off from an airport', function(){
    expect(plane.takeOff).not.toBeUndefined();
  });

});
