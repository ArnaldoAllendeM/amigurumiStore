<template>
<div>
    <v-main>
      <v-container>
          
  <CharacterCard v-if="personaje" :personaje="personaje" />
      </v-container>
    </v-main>
  <router-view></router-view>
</div>
</template>

<script>
import CharacterCard from '../components/CharacterCard.vue'
export default {
  component: { CharacterCard },
  data: () => ({
    personaje: null,
  }),
  mounted() {
    const personaje = this.$store.state.personajes.find(
      (personaje) => personaje.id === Number.parseInt(this.$route.params.id)
    )
    console.log(personaje)
    this.personaje = personaje
  },
}
</script>

<style></style>