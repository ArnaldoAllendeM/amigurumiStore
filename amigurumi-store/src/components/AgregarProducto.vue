<template>
  <v-dialog v-model="dialog">
    <template #activator="{ on }">
      <v-btn v-on="on" color="info">Agregar Producto</v-btn>
    </template>
    <v-card>
      <v-card-title> Agregando Producto </v-card-title>
      <v-card-text>
        <ProductoForm @submit="handleFormSubmit" mode="create" />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import ProductoForm from '../components/ProductoForm.vue'
export default {
  components: {
    ProductoForm
  },
  data: () => ({
    dialog: false
  }),
  methods: {
    async handleFormSubmit(nuevoProducto) {
      try {
        const response = await this.$store.dispatch('crearProducto', nuevoProducto)
        console.log({ response, nuevoProducto })
        this.dialog = false
        this.$store.dispatch('getAmigurumis')
      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>

<style></style>