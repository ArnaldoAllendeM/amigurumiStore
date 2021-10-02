<template>
<html class = "html">
    <body>
<div class="container">
      <div class="row">
  <div class="col-12 center">
           <span id="city">&#8226;</span>
        </div>
      </div>
          <div class="row weather-info">
        <div class="col-4 center first_div">
          Humedad: <span id="humidity">&#8212;</span>
        </div>
        <div class="col-4 center second_div">
          <span id="temp-celsius">&#8212;</span>
          <span id="temp-fahrenheit" class="hidden">&#8212;</span>
        </div>
        <div class="col-4 center third_div">
      </div>
      </div>
    </div>
 </body>
</html>
</template>

<style>
* {
  font-family: "Raleway", Helvetica, Arial, sans-serif;
  line-height: normal;
  box-sizing: border-box;
}

.container {
  position: relative;
  max-width: 700px;
  max-height: 700px;
  margin: 2em auto;
}

#city {
  display: block;
  padding-top: 0.5em;
  font-size: 2.5em;
  font-family: "Raleway", Arial, sans-serif;
}

.weather-icon {
  margin-top: 2em;
  margin-left: auto;
  height: 200px;
}


.weather-info {
  font-family: "Raleway", Arial, sans-serif;
  font-size: 1.6em;
  margin-bottom: 1em;
  margin-top: 0.5em;
}


.unit-change {
  cursor: pointer;
  border: 2px solid #FDFDFD;
  border-radius: 20px;
  padding: 0.5em 1.5em;
}

.unit-change:hover {
  background-color: #FDFDFD;
  color: #333447;
}

.unit-change:active {
  background-color: lightgray;
}

#temp-celsius, #temp-fahrenheit {
  font-weight: 800;
  font-size: 1.7em;
}

.hidden { 
  display: none;
}


footer {
  position: relative;
  bottom: 0;
  padding: 1em 1em 0 1em;
  text-align: center;
}

footer p {
  font-size: 0.8em;
}


@media only screen and (max-width: 719px) {
  .container {
    margin: 0;
    width: 100%;
  }

  .weather-info {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column
  }

  .first_div {
    -webkit-box-ordinal-group: 1;
    -moz-box-ordinal-group: 1;
    -ms-flex-order: 1;
    -webkit-order: 1;
    order: 1;
  }

  .second_div {
    -webkit-box-ordinal-group: 0;
    -moz-box-ordinal-group: 0;
    -ms-flex-order: 0;
    -webkit-order: 0;
    order: 0;
  }

  .first_div, .third_div {
    font-size: 0.7em;
  }

  .unit-change {
    background-color: #FDFDFD;
    color: #333447;
  }
}

</style>

<script>
$(document).ready(function() {
var hours, longitude, latitude;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
       $.getJSON("https://api.timezonedb.com/v2/get-time-zone?key=9KO15I9T9P1B&format=json&callback=?&by=position&lat=" + latitude + "&lng=" + longitude, function (timezone) {
       var date = new Date((timezone.timestamp - timezone.gmtOffset) * 1000);
       var hours = date.getHours();
      var minutes = "0" + date.getMinutes();
        var formattedTime = hours + ':' + minutes.substr(-2);
        $("#local-time").html(formattedTime); 
        $.getJSON("https://secret-ocean-49799.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&APPID=5a5a02f356f4f64fe223c5d5a5efde42", function (data) {
           var temp = [(data.main.temp - 273).toFixed(0) + "&deg;C", (1.8 * (data.main.temp - 273) + 32).toFixed(0) + "&deg;F"];
          $("#city").html(data.name + ", " + data.sys.country);
          $("#humidity").html(data.main.humidity + "%");
          $("#temp-celsius").html(temp[0]);
          $("#temp-fahrenheit").html(temp[1]);
          $(".unit-change").click(function () {
            $("#temp-fahrenheit").toggle();
            $("#temp-celsius").toggle();
          });
        })
      });
    })
  } else {
    	alert("El Geolocalizador no es soportado en este buscador, usar chrome o firefox");
  };
})
</script>
