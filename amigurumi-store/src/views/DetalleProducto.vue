<template>
  <!-- Color Input, CSS Color Picker/> -->
  <div>
    <v-card class="mx-auto mx-5 my-5 pb-8 card" max-width="31vw">
      <v-flex>
        <v-img text-center class="mx-auto" aspect-ratio="1" max-width="100vh" height="300">
          <BigSmear :color="color" :producto="producto" />
        </v-img>
      </v-flex>
      <!-- <v-container class="px-0" fluid> -->
          <v-card-title class="px-8 ">{{ producto.nombre }}</v-card-title>
      <v-card-subtitle class="pb-0 px-8"> {{producto.descripcion}}</v-card-subtitle>
      <v-radio-group v-model="size" column class="px-8">
        <v-radio  label="SM (10 cm) $10.000" value="sm"></v-radio>
        <v-radio class="selected_radio_button" label="MD (15 cm) $15.000" value="md"></v-radio>
        <v-radio label="LG (20 cm) $20.000" value="lg"></v-radio>
      </v-radio-group>
      <!-- </v-container> -->

      <!-- Implementacion de libreria /> -->
      <div class="form__field">
        <div class="form__label px-8 py-4">
          <strong>Elija un color:</strong>
          <div>
            <v-swatches v-model="color" inline class="v-swatches"></v-swatches>
          </div>
        </div>
      </div>
      <v-textarea
      class="px-8 py-0"
        outlined
        auto-grow
        name="input-7-4"
        label="Ingrese mensaje"
        value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
      ></v-textarea>

      <v-card-actions class="px-8 py-0">        
        <v-btn @click="addToCart()" class="cy_addToCart button mt-5" text>
          Agregar al Carro
        </v-btn>
      </v-card-actions>
    </v-card>
     <v-snackbar
      v-model="snackbar"
      timeout=1500
      v-show="snackbar"
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
import CharacterCard from "../components/CharacterCard.vue";
import Smear from "../components/Smear.vue";
import BigSmear from "../components/BigSmear.vue";

import { mapActions } from "vuex";
export default {
  //importacion de componente de libreria
  components: { CharacterCard, BigSmear, Smear, VSwatches },
  data: () => ({
    //color default
    color: "#1CA085",
    // Props, implementacion de colores, posibilidad de agregar custom colors.
    swatches: [[{ color: "#F493A7" }, { color: "#ff0000" }]],
    producto: "",
    size: "",
    precio: 0,
    messages:0,
    snackbar:false,
    text:'Tu producto fue agregado al carro exitosamente!'
  }),
  props: {
    getId: String,
  },
  mounted() {
    const producto = this.$store.state.productos.find(
      (producto) => producto.id === Number.parseInt(this.$route.params.id)
    );
    this.producto = producto;
    this.guardarProducto(producto);
    console.log(this.producto);
  },
  // computed:{
  //   ...mapGetters(["getProductDetail"]),
  // }
  methods: {
    ...mapActions(["agregarACarrito", "guardarProducto"]),
    updateColor(color) {
      this.color = color;
    },
    // el usuario ya debe haber elegido un tamaño y un color (Validar)
    // Tamaño, color y precio, que el precio varíe según el tamaño
    // agregar cantidad, debe comenzar en 1 (si cambia color o tamaño se vuelve un nuevo producto) find en la store con los 3 parámetros

    addToCart() {
      // if()si estan seleccionadas todas las opciones
      this.priceBySize;
      console.log(this.messages)
      this.messages++;
      this.snackbar = false;
      this.snackbar = true;
      const nuevoProducto = {
        nombre: this.producto.nombre,
        id: this.producto.id + this.size + this.color,
        imagen: this.producto.imagen,
        color: this.color,
        size: this.size,
        precio: this.precio,
        cantidad: 1,
      };
      console.log(this.messages);
      this.agregarACarrito(nuevoProducto, this.messages);
    },
  },
  computed: {
    // traer un arreglo de price
    priceBySize() {
      console.log(this.producto.precio.sm);
      if (this.size == "sm") {
        this.precio = this.producto.precio.sm;
      } else if (this.size == "md") {
        this.precio = this.producto.precio.md;
      } else {
        this.precio = this.producto.precio.lg;
      }
    },
  },
};
</script>

<!-- CSS Color Picker/> -->
<style>
.card{
  background-color: #fff8fb !important;
}
.vue-swatches__container{
  background-color: #fff8fb !important;
}
.vue-swatches{
  margin: auto !important;
  
  
}
.vue-swatches__swatch{
  /* margin: auto !important; */
  padding: 1px;
  margin: 1px;
  border: 1px !important;
}
</style>
