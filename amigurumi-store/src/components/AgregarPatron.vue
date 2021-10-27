<template>
  <v-dialog v-model="dialog">
    <template #activator="{ on }">
      <v-btn v-on="on" color="info">Agregar Patrón</v-btn>
    </template>
    <v-card>
      <v-card-title> Agregando Producto </v-card-title>
      <v-card-text>
        <PatronesForm @submit="handleFormSubmit" mode="create" />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import PatronesForm from './PatronesForm.vue'
export default {
  components: {
    PatronesForm
  },
  data: () => ({
    dialog: false
  }),
  methods: {
    async handleFormSubmit(nuevoProducto) {
      try {
        const response = await this.$store.dispatch('crearPatrones', nuevoProducto)
        console.log({ response, nuevoProducto })
        this.dialog = false
        this.$store.dispatch('getPatrones')
      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>

<style></style>