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
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  methods: {
    ...mapActions(["bajarLaCantidad","borrarDelCarrito","subirLaCantidad"]),
    bajarCantidad(id) {
      this.bajarLaCantidad(id);
    },
     subirCantidad(id) {
      this.subirLaCantidad(id);
    },
    borrarCarrito(id) {
      this.borrarDelCarrito(id);
    },
  },
  computed: {
    ...mapState(["carrito"]),
  },
};
</script>

<style></style>
