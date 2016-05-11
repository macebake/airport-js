function Airport() {
  this.weather = new Weather();
  this.hangar = [];
}

Airport.prototype.planes = function() {
  return this.hangar;
};

Airport.prototype.clearedForLanding = function(plane) {
  if (this.isStormy()) {
    throw new Error('Too stormy to land!');
  } else {
    this.hangar.push(plane);
  }
};

Airport.prototype.clearedForTakeOff = function(plane) {
  if (this.isStormy()) {
    throw new Error('Too stormy to take off!');
  } else {
    this.hangar.pop(plane);
  }
};

Airport.prototype.isStormy = function(){
  if (this.weather.isStormy()){
    return true;
  } else {
    return false;
  }
};
