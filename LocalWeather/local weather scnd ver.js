// $.ajax({
//     url: 'http://api.openweathermap.org/data/2.5/weather?lat=' + place.geometry.location.lat().toFixed(2) + '&lon=' + place.geometry.location.lng().toFixed(2) + '&units=imperial&appid=4ffaf308cc9aeca85e4e7514613725bc',
//     type: 'GET',
//     error: function(data) {
//       alert("An error has occured. See response: " + data.responseText);
//     },
//     success: function(data) {
//       currentWeatherFahr = data; 
//       $("#location_temp").html(currentWeatherFahr.main.temp + ' F');
//       $("#location_temp_min").html(currentWeatherFahr.main.temp_min + ' F');
//       $("#location_temp_max").html(currentWeatherFahr.main.temp_max + ' F');
//       $("#conversion").html('Convert to Celsius');
//       $("#current_location").append('<div> <button id="conversion"> Convert to Celsius </button> </div> </div>');   
//       $("#conversion").on("click", weatherForLocation);  
//     }
//   });

//     $.ajax({
//     url: 'http://api.openweathermap.org/data/2.5/forecast/daily?lat=' + place.geometry.location.lat().toFixed(2) + '&lon=' + place.geometry.location.lng().toFixed(2) + '&cnt=7&mode=json&units=imperial&appid=4ffaf308cc9aeca85e4e7514613725bc',
//     type: 'GET',
//     error: function(seven) {
//       alert("An error has occured. See response: " + data.responseText);
//     },
//     success: function(seven) {
//       $("#forecast").empty();
//       sevDays = seven.list;
//       $("#forecast").append('<table id="sevDaysTable"></table>');
//       for (var i = 0; i < sevDays.length; i++) {
//       $("#sevDaysTable").append('<tr> <td>' + (i+1) + '. dan </td> <td> <img src=http://openweathermap.org/img/w/' + sevDays[i].weather[0].icon + '.png> </td> <td>' + sevDays[i].temp.min.toFixed(1) + '</td> <td>' + sevDays[i].temp.max.toFixed(1) + '</td> </tr>');
//       }
//     }
//   });