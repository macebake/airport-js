function Plane() {
}

Plane.prototype.land = function(airport) {
  airport.clearedForLanding(this);
};

Plane.prototype.takeOff = function(airport) {
  airport.clearedForTakeOff(this);
};
