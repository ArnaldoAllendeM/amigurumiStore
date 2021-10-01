<template>
  <!-- Color Input, CSS Color Picker/> -->
  <div>
    <input class="red" name="color" type="radio" />
    <input class="green" name="color" type="radio" />
    <input class="pink" name="color" type="radio" />
    <input checked class="yellow" name="color" type="radio" />
    <input class="purple" name="color" type="radio" />

    <!-- <span>
   {{getProductDetail(this.$route.params.id)}}
   </span> -->
    <h1>Hola {{ this.$route.params.id }}</h1>
    <!-- <CharacterCard  :producto="producto" /> -->
    <h1>{{ producto.nombre }}</h1>
    <img :src="producto.imagen" />
    <h1>{{ producto.id }}</h1>
    <!-- Implementacion de libreria /> -->
    <div class="form__field">
      <div class="form__label">
        <strong>Elige un color:</strong>
      </div>
      <div class="form__input">
        <v-swatches
          v-model="color"
          :swatches="swatches"
          row-length="5"
          popover-x="left"
        ></v-swatches>
      </div>
    </div>
  </div>
</template>

<script>
//Importación de libreria vue Swatches
import VSwatches from "vue-swatches";
// Import the styles too, globally
import "vue-swatches/dist/vue-swatches.css";
import CharacterCard from "../components/CharacterCard.vue";
// import {mapGetters} from "vuex";
export default {
  //importacion de componente de libreria
  components: { VSwatches },
  component: { CharacterCard },
  data: () => ({
    //color default
    color: "#1CA085",
    // Props, implementacion de colores, posibilidad de agregar custom colors.
    swatches: [[{ color: "#F493A7" }, { color: "#ff0000" }]],
    producto: null,
    data: {
      detail: {},
    },
  }),
  mounted() {
    const producto = this.$store.state.productos.find(
      (producto) => producto.id === Number.parseInt(this.$route.params.id)
    );
    this.producto = producto;
  },
  // computed:{
  //   ...mapGetters(["getProductDetail"]),
  // }
};
</script>

<!-- CSS Color Picker/> -->
<style>
.preview {
  background: #ccc;
  width: 415px;
  height: 430px;
  border: solid 10px #fff;
}

input[type="radio"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 25px;
  height: 25px;
  margin: 5px 0 5px 5px;
  background-size: 225px 70px;
  position: relative;
  float: left;
  display: inline;
  top: 0;
  border-radius: 3px;
  z-index: 99999;
  cursor: pointer;
  box-shadow: 1px 1px 1px #000;
}

input[type="radio"]:hover {
  -webkit-filter: opacity(0.4);
  filter: opacity(0.4);
}

.red {
  background: red;
}

.red:checked {
  background: linear-gradient(brown, red);
}

.green {
  background: green;
}

.green:checked {
  background: linear-gradient(green, lime);
}

.yellow {
  background: yellow;
}

.yellow:checked {
  background: linear-gradient(orange, yellow);
}

.purple {
  background: purple;
}

.pink {
  background: pink;
}

.purple:checked {
  background: linear-gradient(purple, violet);
}

.red:checked ~ img {
  -webkit-filter: opacity(0.5) drop-shadow(0 0 0 red);
  filter: opacity(0.5) drop-shadow(0 0 0 red);
}

.green:checked ~ img {
  -webkit-filter: opacity(0.5) drop-shadow(0 0 0 green);
  filter: opacity(0.5) drop-shadow(0 0 0 green);
}

.yellow:checked ~ img {
  -webkit-filter: opacity(0.5) drop-shadow(0 0 0 yellow);
  filter: opacity(0.5) drop-shadow(0 0 0 yellow);
}

.purple:checked ~ img {
  -webkit-filter: opacity(0.5) drop-shadow(0 0 0 purple);
  filter: opacity(0.5) drop-shadow(0 0 0 purple);
}

.pink:checked ~ img {
  -webkit-filter: opacity(0.5) drop-shadow(0 0 0 pink);
  filter: opacity(0.5) drop-shadow(0 0 0 pink);
}

img {
  width: 394px;
  height: 375px;
  position: relative;
}

.label {
  width: 150px;
  height: 75px;
  position: absolute;
  top: 170px;
  margin-left: 130px;
}

::selection {
  background: #000;
}
</style>
