$(document).ready(function() {
  var thermostat = new thermoStat();
  $('#temperature').text(thermostat.temp);
  $('#power-saving-status').text('ON')


$('#temperature-up').on('click', function() { // event listener
  thermostat.increase(); // update model
  $('#temperature').text(thermostat.temp); // update view
});

$('#temperature-down').click(function() { // this is an alternate version of .on('click'), with a sprinkle of jQuery syntactic sugar
  thermostat.decrease();
  $('#temperature').text(thermostat.temp);
});

$('#temperature-reset').click(function() { // this is an alternate version of .on('click'), with a sprinkle of jQuery syntactic sugar
  thermostat.reset();
  $('#temperature').text(thermostat.temp);
});

$('#powersave-on').click(function() { // this is an alternate version of .on('click'), with a sprinkle of jQuery syntactic sugar
  thermostat.powersaveon();
  $('#temperature').text(thermostat.temp);
  $('#power-saving-status').text('ON')
});

$('#powersave-off').click(function() { // this is an alternate version of .on('click'), with a sprinkle of jQuery syntactic sugar
  thermostat.powersaveoff();
  $('#temperature').text(thermostat.temp);
  $('#power-saving-status').text('OFF')
});

function updateTemp() {
    $("#temperature").text(thermostat.temp);
    if(thermostat.energy() == 'low-usage') {
      $("#temperature").css('color', 'green')
    } else if (thermostat.energy() == 'medium-usage') {
      $("#temperature").css('color', 'orange')
    } else if (thermostat.energy() == 'high-usage') {
      $("#temperature").css('color', 'red')
    }
  };

});
