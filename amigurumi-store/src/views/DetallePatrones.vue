<template>
  <!-- Color Input, CSS Color Picker/> -->
  <div class="pt-5">
    <v-card  class="mx-auto mb-5 card" max-width="500" height="680">
      <v-flex>
        <v-img :src="patron.imagen" aspect-ratio="1" max-width="100vh" height="300"></v-img>
        <v-card-title class="pb-0 px-5">{{ patron.nombre }}</v-card-title>
        <v-card-text class="px-5">{{ patron.descripcion }}</v-card-text>
        <v-card-title style="color:#fe70aa" class="justify-end py-0 px-5">${{ patron.precio }}</v-card-title>
      </v-flex>

      <v-card-text class="text--primary">
      </v-card-text>
      <!-- Implementacion de libreria /> -->
      <v-textarea
        class="px-5"
        outlined
        auto-grow
        name="input-7-4"
        label="Ingrese mensaje"
        value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
      ></v-textarea>

      <v-card-actions >
        <div class="text-xs-center px-4">

        <v-btn @click="addToCartPatrones()" class="button justify-center" text>
          Agregar al Carro
        </v-btn>
        </div>
      </v-card-actions>
    </v-card>
      <v-snackbar
      v-model="snackbar"
      timeout=1500
    >
   
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Cerrar
        </v-btn>
      </template>
    </v-snackbar>
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
    color: "",
    // Props, implementacion de colores, posibilidad de agregar custom colors.
    swatches: [[{ color: "#F493A7" }, { color: "#ff0000" }]],
    patron: "",
    size: "",
    precio: 0,
    snackbar:false,
    text:'Tu producto fue agregado al carro exitosamente!',
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
      this.snackbar = true;
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
<style scoped>
.card{
  background-color: #fff8fb !important;
}

</style>
