<template>
  <div>
    <h1>Vista de Productos</h1>
    <CharacterCard 
    :personaje="personaje"/>
  </div>
</template>

<script>
import Cards from "../components/Cards.vue";
import CharacterCard from "../components/CharacterCard.vue";
export default {
  name: "VistaProductos",
  components: {
    Cards,
    CharacterCard,
  },
  computed: {
    personaje() {
      return this.personaje;
    },
  },
};
</script>

<style></style>
