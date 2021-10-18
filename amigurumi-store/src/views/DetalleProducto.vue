<template>
  <!-- Color Input, CSS Color Picker/> -->
  <div>
    <div class="original">
      <h2>background image</h2>
    </div>
    <v-card class="mx-auto" max-width="500">
      <v-container>
        <v-flex>
          <v-img text-center>
            <BigSmear :color="color" :producto="producto" />
            <v-card-title>{{ producto.nombre }}</v-card-title>
          </v-img>
        </v-flex>
        <v-container class="px-0" fluid>
          <v-radio-group v-model="size" row>
            <v-radio label="SM (10 cm) $10.000" value="sm"></v-radio>
            <v-radio label="MD (15 cm) $15.000" value="md"></v-radio>
            <v-radio label="LG (20 cm) $20.000" value="lg"></v-radio>
          </v-radio-group>
        </v-container>
        <v-card-subtitle class="pb-0"> Amigurumi </v-card-subtitle>

        <v-card-text class="text--primary">
          <div>Whitehaven Beach</div>

          <div>Whitsunday Island, Whitsunday Islands</div>
        </v-card-text>
        <!-- Implementacion de libreria /> -->
        <div class="form__field">
          <div class="form__label">
            <strong>Please choose a color:</strong>
            <v-swatches v-model="color" inline></v-swatches>
          </div>
        </div>
        <v-textarea
          outlined
          auto-grow
          name="input-7-4"
          label="Outlined textarea"
          value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
        ></v-textarea>

        <v-card-actions>
          <v-btn @click="addToCart()"  color="orange" text>
            Agregar al Carro
          </v-btn>

          <v-btn color="orange" text> Añadir a Favoritos </v-btn>
        </v-card-actions>
      </v-container>
    </v-card>
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
    // messages:0,
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
      this.messages++;
      const nuevoProducto = {
        nombre: this.producto.nombre,
        id: this.producto.id + this.size + this.color,
        imagen: this.producto.imagen,
        color: this.color,
        size: this.size,
        precio: this.precio,
        cantidad: 1,        
      };
      console.log(this.messages)
      this.agregarACarrito(nuevoProducto);
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
<style></style>
