<template>
  <!-- Color Input, CSS Color Picker/> -->
  <div>
    <v-card class="mx-auto mb-5" max-width="500" height="100vh">
      <v-flex>
        <v-img :src="patron.imagen" max-width="300" height="300"></v-img>
        <v-card-title>{{ patron.nombre }}</v-card-title>
        <v-card-title>{{ patron.precio }}</v-card-title>
      </v-flex>
      <v-card-subtitle class="pb-0"> Patrón </v-card-subtitle>

      <v-card-text class="text--primary">
        <div>{{ patron.descripcion }}</div>
      </v-card-text>
      <!-- Implementacion de libreria /> -->
      <v-textarea
        outlined
        auto-grow
        name="input-7-4"
        label="Outlined textarea"
        value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
      ></v-textarea>

      <v-card-actions>
        <v-btn @click="addToCartPatrones()" color="orange" text>
          Agregar al Carro
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
//Importación de libreria vue Swatches
import VSwatches from "vue-swatches";
// Import the styles too, globally
import "vue-swatches/dist/vue-swatches.css";
import CharacterCardPatron from "../components/CharacterCardPatron.vue";
import Smear from "../components/Smear.vue";
import BigSmear from "../components/BigSmear.vue";

import { mapActions } from "vuex";
export default {
  //importacion de componente de libreria
  components: { CharacterCardPatron, BigSmear, Smear, VSwatches },
  data: () => ({
    //color default
    color: "#1CA085",
    // Props, implementacion de colores, posibilidad de agregar custom colors.
    swatches: [[{ color: "#F493A7" }, { color: "#ff0000" }]],
    patron: "",
    size: "",
    precio: 0,
  }),
  mounted() {
    const patron = this.$store.state.patrones.find(
      (patron) => patron.id === Number.parseInt(this.$route.params.id)
    );
    this.patron = patron;
    console.log(this.patron);
  },
  // computed:{
  //   ...mapGetters(["getProductDetail"]),
  // }
  methods: {
    ...mapActions(["agregarPatrones"]),
    updateColor(color) {
      this.color = color;
    },
    // el usuario ya debe haber elegido un tamaño y un color (Validar)
    // Tamaño, color y precio, que el precio varíe según el tamaño
    // agregar cantidad, debe comenzar en 1 (si cambia color o tamaño se vuelve un nuevo producto) find en la store con los 3 parámetros

    addToCartPatrones() {
      // if()si estan seleccionadas todas las opciones
      this.priceBySize;
      const nuevoProducto = {
        nombre: this.patron.nombre,
        id: this.patron.id + this.size + this.color,
        imagen: this.patron.imagen,
        color: this.color,
        precio: this.patron.precio,
        cantidad: 1,
      };
      console.log(nuevoProducto);
      this.agregarPatrones(nuevoProducto);
    },
  },
};
</script>

<!-- CSS Color Picker/> -->
<style></style>
