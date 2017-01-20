var place = {};
var currentWeather = {};
var sevDays = {};
var units = "metric";
var unitsSymbol = '&#x2103';
var unitsName = "Fahrenheits";
var date;

function initialize() {
        var input = document.getElementById('searchTextField');
        var autocomplete = new google.maps.places.Autocomplete(input);
        google.maps.event.addListener(autocomplete, 'place_changed', function () {
            place = autocomplete.getPlace();
            document.getElementById('city2').value = place.name;
            document.getElementById('cityLat').value = place.geometry.location.lat().toFixed(2);
            document.getElementById('cityLng').value = place.geometry.location.lng().toFixed(2);
            $("#search").on("click", weatherForLocation);
        });
}

function weatherForLocation (current) {
  var placeName = document.getElementById("searchTextField").value;
  $.ajax({
    url: 'http://api.openweathermap.org/data/2.5/weather?lat=' + place.geometry.location.lat().toFixed(2) + '&lon=' + place.geometry.location.lng().toFixed(2) + '&units=' + units + '&appid=4ffaf308cc9aeca85e4e7514613725bc',
    type: 'GET',
    error: function(current) {
      alert("An error has occured. See response: " + data.responseText);
    },
    success: function(current) {
      $("#current_location").empty();
      currentWeather = current; 
      $("#current_location").append('<div id="location_name">' + placeName + '</div><div id="current_data"><div id="location_temp"><span>Current Temperature:    '+ currentWeather.main.temp.toFixed(1) + '</span><span style="color: rgba(0,0,0,0);">l</span>' + unitsSymbol + '</div> <div id="location_temp_min"><span>Minimal Temperature:    ' + currentWeather.main.temp_min.toFixed(1) + '</span><span style="color: rgba(0,0,0,0);">l</span>' + unitsSymbol + '  </div> <div id="location_temp_max"><span>Maximum Temperature:  ' + currentWeather.main.temp_max.toFixed(1) + '</span><span style="color: rgba(0,0,0,0);">l</span>' + unitsSymbol + '</div><div id="conversion_button_div"><button id="conversion"> Convert to ' + unitsName + '</button></div>  </div> </div>');     
      $("#conversion").on("click", tempConversion);
    }
  });
  sevDaysWeather(units);
}

function sevDaysWeather (seven) {
  date = new Date;
  $.ajax({
    url: 'http://api.openweathermap.org/data/2.5/forecast/daily?lat=' + place.geometry.location.lat().toFixed(2) + '&lon=' + place.geometry.location.lng().toFixed(2) + '&cnt=7&mode=json&units=' + units + '&appid=4ffaf308cc9aeca85e4e7514613725bc',
    type: 'GET',
    error: function(seven) {
      alert("An error has occured. See response: " + data.responseText);
    },
    success: function(seven) {
      $("#forecast").empty();
      sevDays = seven.list;
      $("#forecast").append('<table id="sevDaysTable"><th>Day</th><th>Weather Conditions</th><th>Min Temperature</th><th>Max Temperature</th></table>');
      for (var i = 0; i < sevDays.length; i++) {
      date.setDate(date.getDate() + 1);
      $("#sevDaysTable").append('<tr> <td>' + String(date).substring(0,3) + '</td> <td> <img src=http://openweathermap.org/img/w/' + sevDays[i].weather[0].icon + '.png> </td> <td>' + sevDays[i].temp.min.toFixed(1) + '<span style="color: rgba(0,0,0,0);">l</span>' + unitsSymbol + '</td> <td>' + sevDays[i].temp.max.toFixed(1) + '<span style="color: rgba(0,0,0,0);">l</span>' + unitsSymbol +'</td> </tr>');
      }
    }
  });
}

function tempConversion (data) {
  if (units == "metric") {
    units = "imperial";
    unitsSymbol = '&#x2109';
    unitsName = "Celsius";
  }

  else {
    units = "metric";
    unitsSymbol = '&#x2103';
    unitsName = "Fahrenheits";
  }
  weatherForLocation(units);
}
















