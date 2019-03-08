'use strict';

describe('Feature Test:', function () {
var thermostat;

beforeEach(function() {
  thermostat = new thermoStat();
});

it('thermostat starts at 20', function(){
expect(thermostat.temp).toEqual(20);
});

it('increase adds one degree to thermostat temp', function(){
thermostat.increase()
console.log(thermostat.temp)
expect(thermostat.temp).toEqual(21);
});

it('decreases the thermostat by one degree', function(){
  thermostat.decrease()
  console.log(thermostat.temp)
  expect(thermostat.temp).toEqual(19);
});

it('cannot go lower than 10', function(){
  thermostat.temp = 10
  console.log(thermostat.temp)
  console.log(thermostat.decrease())
  expect(thermostat.decrease()).toEqual('Limbo bar at minimum!');
});

it('cannot go higher than 32 if powersave off', function(){
  thermostat.powersaveoff()
  thermostat.temp = 32
  console.log(thermostat.temp)
  console.log(thermostat.increase())
  expect(thermostat.increase()).toEqual('Limbo bar at maximum!');
});

it('cannot go higher than 25 on powersave', function(){
  thermostat.powersaveoff();
  thermostat.powersaveon();
  thermostat.temp = 25;
  console.log(thermostat.temp);
  console.log(thermostat.increase());
  expect(thermostat.increase()).toEqual('Limbo bar at maximum');
});

it('can go higher than 25 on powersave off', function(){
  console.log('-----powersaveoff-----')
  thermostat.powersaveoff()
  thermostat.temp = 25
  console.log(thermostat.temp)
  thermostat.increase()
  expect(thermostat.temp).toEqual(26)
});

it('can reset back to 20 degress', function(){
  console.log('---!---')
  thermostat.increase()
  console.log(thermostat.temp)
  thermostat.reset()
  console.log(thermostat.temp)
  expect(thermostat.temp).toEqual(20)
  console.log('---!---')
});

it('can see energy usage', function(){
  console.log('---&---')
  thermostat.temp
  console.log(thermostat.energy())
  expect(thermostat.energy()).toEqual('medium-usage')
  console.log('---&---')
});




});
