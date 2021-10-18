<template>
  <div>
    <h1>Carrito de compras</h1>
    <v-card class="mx-auto" max-width="400" tile>
      <v-list-item
        v-for="({ id, cantidad, nombre, color, size }, i) in this.carrito"
        :key="i"
      >
        <v-list-item-content>
          <v-list-item-title>id: {{ id }}</v-list-item-title>
          <v-list-item-title>cantidad: {{ cantidad }}</v-list-item-title>
          <v-list-item-title>nombre: {{ nombre }}</v-list-item-title>
          <v-list-item-title>color: {{ color }}</v-list-item-title>
          <v-list-item-title>Tamaño: {{ size }}</v-list-item-title>
          <v-btn @click="bajarCantidad(id)">(-)</v-btn>
          <v-btn @click="subirCantidad(id)">(+)</v-btn>
          <v-btn @click="borrarCarrito(id)">Borrar</v-btn>
        </v-list-item-content>
      </v-list-item>
    </v-card>
    <div v-if="verForm()">
      <v-btn @click="enviarCarrito()" >Comprar</v-btn>

    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
// import FormInput from "../components/FormInput.vue"
export default {
 data: () => ({
  stringArray: []
  }),
  props: ['arregloCarrito'],
  name: "carrito",
  // components: FormInput,
  methods: {
    ...mapActions(["bajarLaCantidad","borrarDelCarrito","subirLaCantidad", "enviarDataCarrito"]),
    bajarCantidad(id) {
      console.log(...this.carrito)
      this.bajarLaCantidad(id);
    },
     subirCantidad(id) {
      this.subirLaCantidad(id);
    },
    borrarCarrito(id) {
      this.borrarDelCarrito(id);
    },
   enviarCarrito(){
        // this.stringArray.push(this.carrito)
        // console.log(this.stringArray[0])
        // console.log(this.stringArray)
        for (const [key, val] of Object.entries(this.carrito)) {
          this.stringArray.push(val)
    console.log(key)
    console.log(val)
}
console.log(this.stringArray)
this.enviarDataCarrito(this.stringArray);
      // this.carrito.forEach((number, index) => this.stringArray.push(number.) console.log(`${index}:${number.cantidad}`))
      },
    verForm(){
      console.log(this.carrito[0]);
      if(this.carrito[0]==undefined){
        return false
      }else{
        return true
      }
    }
  },
  computed: {
    ...mapState(["carrito"]),
     
      // this.enviarDataCarrito(this.carrito);
    },

};
</script>

<style></style>
