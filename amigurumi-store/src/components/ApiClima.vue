<template>
  <div id="ilpleut">
    <div id="container">
      <h3 v-show="getCity">
        {{ getCity }}
      </h3>

      <svg
        class="sun"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 207.33 207.33"
      >
        <title>Weather</title>
        <g class="cls-1">
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <rect
                class="cls-2"
                x="30.36"
                y="30.36"
                width="146.61"
                height="146.61"
              />
              <rect
                class="cls-2"
                x="30.36"
                y="30.36"
                width="146.61"
                height="146.61"
                transform="translate(103.67 -42.94) rotate(45)"
              />
              <circle class="cls-3" cx="103.67" cy="103.67" r="49.54" />
            </g>
          </g>
        </g>
      </svg>

      <svg
        class="cloud"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 207.33 207.33"
      >
        <title>Weather</title>
        <g class="cls-4">
          <rect
            x="12.76"
            y="125.45"
            width="142.71"
            height="52.24"
            rx="26.12"
            ry="26.12"
          />
          <circle cx="43.54" cy="140.84" r="36.84" />
          <circle cx="96.01" cy="123.58" r="44.77" />
        </g>
        <rect
          class="cls-5"
          x="8.76"
          y="127.45"
          width="142.71"
          height="52.24"
          rx="26.12"
          ry="26.12"
        />
        <circle class="cls-5" cx="39.54" cy="142.84" r="36.84" />
        <circle class="cls-5" cx="92.01" cy="125.58" r="44.77" />
      </svg>

      <div class="weatherContainer">
        <h1>{{ getTemp | roundUp }}<span>°C</span></h1>
      </div>
      <div class="weatherDetails">
        <div class="humidity">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 75.01 105.05"
            class="ic_humidity"
          >
            <title>humidityDrop</title>
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <path
                  class="cls-1"
                  d="M39.67,4.59l28.73,46a36,36,0,1,1-59.73-.09Z"
                />
                <g class="cls-2">
                  <path
                    class="cls-3"
                    d="M16.89,54.62a9.57,9.57,0,0,1,1.67-3.4,8.07,8.07,0,0,1,2.86-2.3,9.3,9.3,0,0,1,4.11-.83,9.1,9.1,0,0,1,4.21.86,7.67,7.67,0,0,1,2.73,2.35A9.43,9.43,0,0,1,34,54.78,19.77,19.77,0,0,1,34.38,59a14.59,14.59,0,0,1-.54,4.08,9,9,0,0,1-1.64,3.21,7.48,7.48,0,0,1-2.84,2.11,10.24,10.24,0,0,1-4.1.76,10,10,0,0,1-4.19-.79,7.13,7.13,0,0,1-2.75-2.16,8.59,8.59,0,0,1-1.51-3.29,17.54,17.54,0,0,1-.46-4.13A15.49,15.49,0,0,1,16.89,54.62Zm6,5.58a5.57,5.57,0,0,0,.27,1.45,2.75,2.75,0,0,0,.74,1.14,2,2,0,0,0,1.43.46,2,2,0,0,0,1.41-.46,2.82,2.82,0,0,0,.77-1.14,5.21,5.21,0,0,0,.31-1.43c0-.5.06-1,.06-1.37s0-.86-.06-1.41a7.75,7.75,0,0,0-.29-1.61,3.28,3.28,0,0,0-.72-1.31A1.68,1.68,0,0,0,25.48,54a2,2,0,0,0-1.45.5,3.18,3.18,0,0,0-.79,1.24,5.69,5.69,0,0,0-.33,1.58c0,.57-.06,1.07-.06,1.51S22.87,59.68,22.89,60.2ZM53,47.65,30.71,87.77H26L48.37,47.65Zm-8.21,25a9.2,9.2,0,0,1,1.68-3.3,7.89,7.89,0,0,1,2.86-2.21,9.58,9.58,0,0,1,4.1-.81,9.48,9.48,0,0,1,4.21.83,7.5,7.5,0,0,1,2.73,2.27,9,9,0,0,1,1.49,3.38A19.6,19.6,0,0,1,62.25,77a14.89,14.89,0,0,1-.54,4.1,9.35,9.35,0,0,1-1.65,3.29,7.43,7.43,0,0,1-2.83,2.19,10,10,0,0,1-4.11.78,9.64,9.64,0,0,1-4.18-.81,7.09,7.09,0,0,1-2.76-2.24,9.27,9.27,0,0,1-1.51-3.37,17.86,17.86,0,0,1-.46-4.16A14.84,14.84,0,0,1,44.75,72.66Zm6.14,5.54a5.57,5.57,0,0,0,.27,1.45,2.75,2.75,0,0,0,.74,1.14,2,2,0,0,0,1.43.46,2,2,0,0,0,1.41-.46,2.82,2.82,0,0,0,.77-1.14,5.21,5.21,0,0,0,.31-1.43c0-.5.06-1,.06-1.37s0-.86-.06-1.41a7.75,7.75,0,0,0-.29-1.61,3.28,3.28,0,0,0-.72-1.31A1.68,1.68,0,0,0,53.48,72a2,2,0,0,0-1.45.5,3.18,3.18,0,0,0-.79,1.24,5.69,5.69,0,0,0-.33,1.58c0,.57-.06,1.07-.06,1.51S50.87,77.68,50.89,78.2Z"
                  />
                </g>
              </g>
            </g>
          </svg>
          <h4>
            {{ getHumidity }}
          </h4>
        </div>
        <div class="wind">
          <svg
            class="wind"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 516.4 382.5"
          >
            <title>windIcon</title>
            <g id="Layer_2" data-name="Layer 2">
              <g class="cls-1" id="wind" data-name="wind">
                <path
                  d="M344.2,76.5a76.5,76.5,0,0,0-153,0h38.2a38.2,38.2,0,1,1,38.2,38.2H38.2v38.2H267.7C309.8,153.1,344.2,118.6,344.2,76.5Z"
                />
                <path
                  d="M439.8,76.5A76.69,76.69,0,0,0,363.3,153h38.3a38.2,38.2,0,1,1,38.2,38.3H0v38.2H439.9A76.69,76.69,0,0,0,516.4,153C516.4,110.9,481.9,76.5,439.8,76.5Z"
                />
                <path
                  d="M382.5,267.8H114.7V306H382.5c11.5,0,19.1,7.6,19.1,19.1s-7.6,19.1-19.1,19.1-19.1-7.6-19.1-19.1H325.2c0,30.6,24.9,57.4,57.4,57.4S440,357.6,440,325.1,415,267.8,382.5,267.8Z"
                />
              </g>
            </g>
          </svg>
          <h4>{{ getWindSpeed | convertWind | roundUp }} km/h</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
body {
  background: #20262e;
  padding: 20px;
  font-family: Helvetica;
  text-align: center;

  p {
    font-size: 0.5rem;
    color: #fff;
    padding: 8px 0 0;
  }

  svg {
    width: 100px;
    .cls-1 {
      isolation: isolate;
    }
    .cls-2 {
      fill: #ff0;
    }
    .cls-3 {
      fill: #ffd600;
    }
    .cls-4 {
      opacity: 0.15;
      mix-blend-mode: multiply;
    }
    .cls-5 {
      fill: #eee;
    }

    &.sun {
      position: absolute;
      z-index: 0;
      -webkit-animation: rotating 12s linear infinite;
    }
    &.cloud {
      position: relative;
      z-index: 1;
    }
  }

  @-webkit-keyframes rotating {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }

  #container {
    width: 320px;
    height: 580px;
    margin: 0 auto;
    background: linear-gradient(to bottom, #3773c1 0%, #7db9e8 100%);
    border-radius: 8px;
    transition: all 0.2s;

    h3,
    h4 {
      font-family: "Source Sans Pro", sans-serif;
      font-size: 2rem;
      color: #fff;
      padding: 20px 0 20px;
      font-weight: 200;
    }
    h4 {
      font-size: 1.2rem;
    }

    .weatherContainer {
      h1 {
        font-size: 5rem;
        font-weight: 700;
        color: #fff;
        span {
          font-size: 2rem;
          vertical-align: top;
        }
      }
      h4 {
        padding: 0 0 14px;
      }
    }

    .weatherDetails {
      div {
        display: inline-block;
        height: 30px;
        margin: 0 5%;

        &.humidity,
        &.wind,
        &.uvindex {
          h4 {
            display: block;
            vertical-align: middle;
            padding: 0;
          }
          &.uvindex {
            svg {
              position: relative;
              top: 3px;
              .cls-1 {
                stroke: #000;
                stroke-miterlimit: 10;
                stroke-width: 2px;
              }
            }
          }
          svg {
            width: 32px;
            display: inline-block;
            padding: 4px;
            opacity: 0.4;

            .cls-3 {
              fill: #fff;
            }
          }
          .ic_humidity {
            width: 24px;
          }
        }
      }
    }

    .weatherForecast {
      padding: 20px;
      margin: 20px 0 0;
      border-top: 1px solid rgba(0, 0, 0, 0);
      background: #79b5e7;
      transform: skew(180deg, -4deg);
      .container {
        transform: skew(180deg, 4deg);
        div {
          width: 30%;
          margin: 0;
          display: inline-block;
          p {
            padding: 0;
            font-size: 0.75rem;
            color: rgba(0, 0, 0, 0.6);
          }
          h3 {
            padding: 0;
            span {
              font-size: 1rem;
              vertical-align: super;
            }
          }
          .flex {
            display: flex;
            width: 100%;
            margin: 0;
            h4 {
              padding: 0;
              font-size: 0.75em;
              line-height: 1.125;
              margin: 0 auto;
            }
          }
        }
      }
    }
  }
}
</style>>


<script >
export default {
  data() {
    return {
      latitude: 0.0,
      longitude: 0.0,
      getHumidity: "0",
      getCity: "Locating...",
      getTemp: "",
      getConditions: "",
      getDetailedConditions: "",
      getWindSpeed: "0",
      locationInput: "",
      getUvIndex: "0",
      getForecast: "",
      getDate: "",
      getDay2: "",
      getDay3: "",
      getDay4: "",
      getDay2Temp: "",
      getDay3Temp: "",
      getDay4Temp: "",
      getDay2Conditions: "",
      getDay3Conditions: "",
      getDay4Conditions: "",
    };
  },
  methods: {
    getLocation: function () {
      if (!navigator.geolocation) {
        this.errorMsg = "Geolocation is not supported by your browser";
        this.getCity = this.errorMsg;
        console.warn(this.errorMsg);
        return;
      }
      console.log("Getting current position..");
      var options = { timeout: 80000 };
      navigator.geolocation.getCurrentPosition(
        this.success,
        this.error,
        options
      );
    },
    success: function (position) {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      this.latitude = parseFloat(this.latitude).toFixed(2);
      this.longitude = parseFloat(this.longitude).toFixed(2);

      this.getWeather();
    },
    getWeather: function () {
      var vm = this;
      var appId = "41c06d8f13cfbd976e5123eb5821a4e6";

      var myCurrentWeatherApi =
        "https://api.openweathermap.org/data/2.5/forecast/daily/?lat=" +
        this.latitude +
        "&lon=" +
        this.longitude +
        "&appid=" +
        appId +
        "&cnt=4&units=metric";

      var myUvIndexApi =
        "https://api.openweathermap.org/data/2.5/uvi?appid=" +
        appId +
        "&lat=" +
        this.latitude +
        "&lon=" +
        this.longitude;

      axios.get(myCurrentWeatherApi).then(function (response) {
        vm.getCity = response.data.city.name;
        //current day
        vm.getHumidity = response.data.list[0].humidity;
        vm.getWindSpeed = response.data.list[0].speed;
        vm.getTemp = response.data.list[0].temp.max;
        vm.getConditions = response.data.list[0].weather[0].main;
        vm.getDetailedConditions = response.data.list[0].weather[0].description;
        vm.getUvIndex = response.data.value;
        //day 2 '[1]'
        vm.getDay2 = response.data.list[1].dt;
        vm.getDay2Temp = response.data.list[1].temp.day;
        vm.getDay2Conditions = response.data.list[1].weather[0].description;
        //day 3 '[2]'
        vm.getDay3 = response.data.list[2].dt;
        vm.getDay3Temp = response.data.list[2].temp.day;
        vm.getDay3Conditions = response.data.list[1].weather[0].description;
        //day 4 '[3]'
        vm.getDay4 = response.data.list[3].dt;
        vm.getDay4Temp = response.data.list[3].temp.day;
        vm.getDay4Conditions = response.data.list[3].weather[0].description;
        console.log("My weather API:" + myCurrentWeatherApi);
      }),
        axios.get(myUvIndexApi).then(function (response) {
          vm.getUvIndex = response.data.value;
        });
    },
  },
  filters: {
    capitalize: function (value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
    convertWind: function (value) {
      if (!value) return "";
      value = (value * 18) / 5;
      return value;
    },
    roundUp: function (value, decimals) {
      if (!value) {
        value = 0;
      }
      if (!decimals) {
        decimals = 0;
      }
      value =
        Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
      return value;
    },
    convertDate: function (value) {
      if (!value) return "";
      var milliDate = value * 1000;
      var myDate = new Date(milliDate);

      var returnDate = myDate.toString();
      returnDate = returnDate.substring(0, 3);
      return returnDate;
    },
  },
  created: function () {
    this.getLocation();
    console.log("Ready Freddie!");
  },
};
</script>