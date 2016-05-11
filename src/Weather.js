function Weather(){
}

Weather.prototype.isStormy = function() {
  weather = Math.random();
  if (weather > 0.75){
    return true;
  } else {
    return false;
  }
};
