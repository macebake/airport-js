describe('Weather', function() {

  var weather = new Weather();

  it('returns true if value is over 0.75', function(){
    spyOn(Math, 'random').and.returnValue(1);
    expect(weather.isStormy()).toBeTruthy();
  });

  it('returns false if value is under 0.75', function() {
    spyOn(Math, 'random').and.returnValue(0);
    expect(weather.isStormy()).toBeFalsy();
  });

});
