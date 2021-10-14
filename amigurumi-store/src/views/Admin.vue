<template>
  <div>
    <v-layout justify-center class="mb-4">
      <h1>Administración</h1>
      <!-- <AgregarCurso /> -->
    </v-layout>
    <TablaProductos />
  </div>
</template>

<script>
import TablaProductos from '../components/TablaProductos.vue'
// import AgregarCurso from '../components/AgregarCurso.vue'
export default {
  components: {
    TablaProductos,
    // AgregarCurso,
  }
}
</script>

<style></style>