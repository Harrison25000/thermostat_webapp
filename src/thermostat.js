var thermoStat = function (){
  this.temp = 20
  this.powersavemode = true
};

thermoStat.prototype.powersaveoff = function(){
  this.powersavemode = false
};
thermoStat.prototype.powersaveon = function(){
  this.powersavemode = true
};

thermoStat.prototype.increase = function() {
  if(this.powersavemode == true && this.temp == 25)
  {return 'Limbo bar at maximum'}
  else if(this.temp == 32)
  {return 'Limbo bar at maximum!'}
  else
  {this.temp ++};
  console.log(this.temp)
};

thermoStat.prototype.decrease = function() {
  if(this.temp == 10)
  {return 'Limbo bar at minimum!'}
  else
  {this.temp --};
};

thermoStat.prototype.reset = function() {
  this.temp = 20
};

thermoStat.prototype.energy = function() {
  if(this.temp<18)
  {return 'low-usage'}
  else if(this.temp>18 && this.temp<25)
  {return 'medium-usage'}
  else
  {return 'high-usage'};
};
