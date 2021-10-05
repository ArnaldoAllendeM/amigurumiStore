<template>
<div>

  <h1>Carrito de compras</h1>
  <v-card
    class="mx-auto"
    max-width="400"
    tile
  >
    <v-list-item v-for="({id, cantidad, nombre, color, size}, i) in this.carrito" :key="i">
      <v-list-item-content>
        <v-list-item-title>id: {{id}}</v-list-item-title>
        <v-list-item-title>id: {{cantidad}}</v-list-item-title>
        <v-list-item-title>id: {{nombre}}</v-list-item-title>
        <v-list-item-title>id: {{color}}</v-list-item-title>
        <v-list-item-title>id: {{size}}</v-list-item-title>
        <v-btn @click="bajarCantidad(id)">(-)</v-btn>
        <v-btn>(+)</v-btn>
        <v-btn>Borrar</v-btn>
      </v-list-item-content>
    </v-list-item>

    
  </v-card>
</div>
</template>


<script>
import {mapActions, mapState} from 'vuex'
export default {
methods: {
      ...mapActions(["bajarCantidad"]),
      bajarCantidad(id){
      this.bajarCantidad(id)
}
},
computed:{
    ...mapState(["carrito"])
}
}
</script>

<style>

</style>