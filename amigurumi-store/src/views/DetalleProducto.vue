<template>
  <div>
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
    swatches: [
      ["#F64272", "#F6648B", "#F493A7", "#F891A6", "#FFCCD5"],
      ["#8b5aff", "#a27bff", "#b99cff", "#d0bdff", "#e8deff"],
      ["#51e5db", "#74ebe3", "#96f0ea", "#b9f5f1", "#dcfaf8"],
      ["#ffa51a", "#ffb748", "#ffc976", "#ffdba3", "#ffedd1"],
    ],
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

<style></style>
