<template>
  <CharacterCard v-if="producto" :producto="producto" />
</template>

<script>
import CharacterCard from '../components/CharacterCard.vue'
export default {
  component: { CharacterCard },
  data: () => ({
    producto: null,
  }),
  mounted() {
    const producto = this.$store.state.productos.find(
      (producto) => producto.id === Number.parseInt(this.$route.params.id)
    )
    this.producto = producto
  },
}
</script>

<style></style>
