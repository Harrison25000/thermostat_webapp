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

  $('#current-city').change(function (){
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp)
  })
});

function displayWeather(city) {
 var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
 var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
 var units = '&units=metric';
 $.get(url + token + units, function(data) {
   $('#current-temperature').text(data.main.temp);
 })

}});
