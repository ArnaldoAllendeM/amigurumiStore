<template>
  <div>
    <v-layout justify-center class="mb-4">
      <h1>Administración</h1>
      <AgregarProducto />
    </v-layout>
    <TablaProductos />
    <h1> Pedidos </h1>
    <TablaPedidos />
  </div>
</template>

<script>
import AgregarProducto from '../components/AgregarProducto.vue'
import TablaProductos from '../components/TablaProductos.vue'
import TablaPedidos from '../components/TablaPedidos.vue'
export default {
  components: {
    TablaProductos,
    AgregarProducto,
    TablaPedidos,
  }
}
</script>

<style></style>