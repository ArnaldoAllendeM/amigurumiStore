<template>
  <div id="ApideClima">
    <div id="container">
      <h3 v-show="getCiudad">
        {{ getCiudad }}
      </h3>

      <svg
        class="sol"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 207.33 207.33"
      >
        <title>ApiClima</title>
        <g class="clima-1">
          <g id="Clima_2" data-name="Clima 2">
            <g id="Clima_1-2" data-name="Clima 1">
              <rect
                class="clima-2"
                x="30.36"
                y="30.36"
                width="146.61"
                height="146.61"
              />
              <rect
                class="clima-2"
                x="30.36"
                y="30.36"
                width="146.61"
                height="146.61"
                transform="translate(103.67 -42.94) rotate(45)"
              />
              <circle class="clima-3" cx="103.67" cy="103.67" r="49.54" />
            </g>
          </g>
        </g>
      </svg>

      <svg
        class="nube"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 207.33 207.33"
      >
        <title>Clima</title>
        <g class="clima-4">
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
          class="clima-5"
          x="8.76"
          y="127.45"
          width="142.71"
          height="52.24"
          rx="26.12"
          ry="26.12"
        />
        <circle class="clima-5" cx="39.54" cy="142.84" r="36.84" />
        <circle class="clima-5" cx="92.01" cy="125.58" r="44.77" />
      </svg>

      <div class="ClimaContainer">
        <h1>{{ getTemperatura | RedondearValor }}<span>°C</span></h1>
      </div>
        <h6>{{ getCondiciones}}
            </h6>
      <div class="DetallesClima">
        <div class="humedad">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 75.01 105.05"
            class="humedad"
          >
            <title>Humedad</title>
            <g id="Clima_2" data-name="Clima 2">
              <g id="Clima_1-2" data-name="Clima 1">
                <path
                  class="clima-1"
                  d="M39.67,4.59l28.73,46a36,36,0,1,1-59.73-.09Z"
                />
                <g class="clima-2">
                  <path
                    class="clima-3"
                    d="M16.89,54.62a9.57,9.57,0,0,1,1.67-3.4,8.07,8.07,0,0,1,2.86-2.3,9.3,9.3,0,0,1,4.11-.83,9.1,9.1,0,0,1,4.21.86,7.67,7.67,0,0,1,2.73,2.35A9.43,9.43,0,0,1,34,54.78,19.77,19.77,0,0,1,34.38,59a14.59,14.59,0,0,1-.54,4.08,9,9,0,0,1-1.64,3.21,7.48,7.48,0,0,1-2.84,2.11,10.24,10.24,0,0,1-4.1.76,10,10,0,0,1-4.19-.79,7.13,7.13,0,0,1-2.75-2.16,8.59,8.59,0,0,1-1.51-3.29,17.54,17.54,0,0,1-.46-4.13A15.49,15.49,0,0,1,16.89,54.62Zm6,5.58a5.57,5.57,0,0,0,.27,1.45,2.75,2.75,0,0,0,.74,1.14,2,2,0,0,0,1.43.46,2,2,0,0,0,1.41-.46,2.82,2.82,0,0,0,.77-1.14,5.21,5.21,0,0,0,.31-1.43c0-.5.06-1,.06-1.37s0-.86-.06-1.41a7.75,7.75,0,0,0-.29-1.61,3.28,3.28,0,0,0-.72-1.31A1.68,1.68,0,0,0,25.48,54a2,2,0,0,0-1.45.5,3.18,3.18,0,0,0-.79,1.24,5.69,5.69,0,0,0-.33,1.58c0,.57-.06,1.07-.06,1.51S22.87,59.68,22.89,60.2ZM53,47.65,30.71,87.77H26L48.37,47.65Zm-8.21,25a9.2,9.2,0,0,1,1.68-3.3,7.89,7.89,0,0,1,2.86-2.21,9.58,9.58,0,0,1,4.1-.81,9.48,9.48,0,0,1,4.21.83,7.5,7.5,0,0,1,2.73,2.27,9,9,0,0,1,1.49,3.38A19.6,19.6,0,0,1,62.25,77a14.89,14.89,0,0,1-.54,4.1,9.35,9.35,0,0,1-1.65,3.29,7.43,7.43,0,0,1-2.83,2.19,10,10,0,0,1-4.11.78,9.64,9.64,0,0,1-4.18-.81,7.09,7.09,0,0,1-2.76-2.24,9.27,9.27,0,0,1-1.51-3.37,17.86,17.86,0,0,1-.46-4.16A14.84,14.84,0,0,1,44.75,72.66Zm6.14,5.54a5.57,5.57,0,0,0,.27,1.45,2.75,2.75,0,0,0,.74,1.14,2,2,0,0,0,1.43.46,2,2,0,0,0,1.41-.46,2.82,2.82,0,0,0,.77-1.14,5.21,5.21,0,0,0,.31-1.43c0-.5.06-1,.06-1.37s0-.86-.06-1.41a7.75,7.75,0,0,0-.29-1.61,3.28,3.28,0,0,0-.72-1.31A1.68,1.68,0,0,0,53.48,72a2,2,0,0,0-1.45.5,3.18,3.18,0,0,0-.79,1.24,5.69,5.69,0,0,0-.33,1.58c0,.57-.06,1.07-.06,1.51S50.87,77.68,50.89,78.2Z"
                  />
                </g>
              </g>
            </g>
          </svg>
          <h4>
            {{ getHumedad }}
          </h4>
        </div>
        <div class="wind">
          <svg
            class="wind"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 516.4 382.5"
          >
            <title>Icono Viento</title>
            <g id="Clima_2" data-name="Clima 2">
              <g class="clima-1" id="wind" data-name="wind">
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
          <h4>
            {{ getVelocidadViento | ConvertirViento | RedondearValor }} km/h
          </h4>
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
    .clima-2 {
      fill: #ff0;
    }
    .clima-3 {
      fill: #ffd600;
    }
    .clima-4 {
      opacity: 0.15;
      mix-blend-mode: multiply;
    }
    .clima-5 {
      fill: #eee;
    }

    &.sol {
      position: absolute;
      z-index: 0;
      -webkit-animation: rotating 12s linear infinite;
    }
    &.nube {
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
    height: 400px;
    margin: 0 auto;
    background: white;
    color: black;
    border-radius: 8px;
    transition: all 0.2s;
    text-align: center;

    h3,
    h4 {
      font-family: "Source Sans Pro", sans-serif;
      font-size: 2rem;
      color: black;
      padding: 20px 0 20px;
      font-weight: 200;
    }
    h4 {
      font-size: 1.2rem;
    }

    .container {
      h1 {
        font-size: 5rem;
        font-weight: 700;
        color: black;
        span {
          font-size: 2rem;
          vertical-align: top;
        }
      }
      h4 {
        padding: 0 0 14px;
      }
    }

    .DetallesClima {
      div {
        display: inline-block;
        height: 30px;
        margin: 0 5%;

        &.humedad,
        &.wind {
          svg {
            width: 32px;
            display: inline-block;
            padding: 4px;
            opacity: 0.4;

            .clima-3 {
              fill: #fff;
            }
          }
          .humedad {
            width: 24px;
          }
        }
      }
    }
  }
}
</style>


<script >
export default {
  data() {
    return {
      getCiudad: "Localizando...",
      getTemperatura: null,
      getHumedad: null,
      getVelocidadViento: null,
      getCondiciones:null,
    };
  },
  methods: {
    getLocalizacion: function () {
      if (!navigator.geolocation) {
        this.mensajeError =
          "La Geolocalizacion no es soportada en este buscador";
        this.getCiudad = this.mensajeError;
        return;
      }

      let opciones = { timeout: 80000 };
      navigator.geolocation.getCurrentPosition(
        this.logrado,
        this.error,
        opciones
      );
    },
    logrado: function (position) {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      this.latitude = parseFloat(this.latitude).toFixed(2);
      this.longitude = parseFloat(this.longitude).toFixed(2);

      this.getClimaApi();
    },
    getClimaApi: function () {
      let geo = this;
      let api = "41c06d8f13cfbd976e5123eb5821a4e6";

      let ApiClima =
        "https://api.openweathermap.org/data/2.5/weather?lat=" +
        this.latitude +
        "&lon=" +
        this.longitude +
        "&appid=" +
        api +
        "&cnt=4&units=metric";

      axios.get(ApiClima).then(function (response) {
        console.log(response.data)
        geo.getCiudad = response.data.name;
        //dia actual
        geo.getHumedad = response.data.main.humidity;
        geo.getVelocidadViento = response.data.wind.speed;
        console.log(response.data)
        geo.getTemperatura = response.data.main.temp;
        geo.getCondiciones = response.data.weather[0].main;
      });
    },
  },
  filters: {
    capitalize: function (valor) {
      if (!valor) return "";
      valor = valor.toString();
      return valor.charAt(0).toUpperCase() + valor.slice(1);
    },
    ConvertirViento: function (valor) {
      if (!valor) return "";
      valor = (valor * 18) / 5;
      return valor;
    },
    RedondearValor: function (valor, decimales) {
      if (!valor) {
        valor = 0;
      }
      if (!decimales) {
        decimales = 0;
      }
      valor =
        Math.round(valor * Math.pow(10, decimales)) / Math.pow(10, decimales);
      return valor;
    },
  },
  created: function () {
    this.getLocalizacion();
  },
};
</script>