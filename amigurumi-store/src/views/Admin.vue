<template>
  <div>
    <v-layout justify-center class="mb-4">
      <h1>Administración</h1>
      <AgregarProducto />
    </v-layout>
    <TablaProductos />
    <h1> agregar colores </h1>
    <h1> Pedidos </h1>
  </div>
</template>

<script>
import AgregarProducto from '../components/AgregarProducto.vue'
import TablaProductos from '../components/TablaProductos.vue'
export default {
  components: {
    TablaProductos,
    AgregarProducto,
  }
}
</script>

<style></style>