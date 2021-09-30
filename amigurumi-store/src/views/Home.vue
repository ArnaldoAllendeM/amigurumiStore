<template>
  <div>
    
    <Carrousel />
    <v-container>
      <v-row no-gutters>
        <v-col v-for="producto in $store.state.productos" :key="producto.id">
        <CharacterCard 
        :producto="producto"
        @click="$router.push({ path: `${$event.id}` })"/>
        </v-col>
      </v-row>
    </v-container>
    <Form />
  </div>
</template>

<script>
import Carrousel from "../components/Carrousel.vue";
import Cards from "../components/Cards.vue";
import CharacterCard from "../components/CharacterCard.vue";
import Form from "../components/Form.vue";
export default {
  data: () => ({
    name: "Home",
  }),
  components: {
    Carrousel,
    Cards,
    Form,
    CharacterCard,
  },
};
</script>
