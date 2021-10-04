<template>
  <div>
    <Navbar2 />
    <Carrousel />
    <v-container>
      <v-row no-gutters>
        <v-col v-for="producto in $store.state.productos" :key="producto.id">
          <CharacterCard
            :producto="producto"
            @click="$router.push({ path: `${$event.id}` })"
          />
        </v-col>
      </v-row>
    </v-container>
    <ApiClima />
    <Form />
  </div>
</template>

<script>
import Carrousel from "../components/Carrousel.vue";
import CharacterCard from "../components/CharacterCard.vue";
import ApiClima from "../components/ApiClima.vue";
import Form from "../components/Form.vue";
export default {
  data: () => ({
    name: "Home",
  }),
  components: {
    Carrousel,
    Form,
    ApiClima,
    CharacterCard,
  },
};
</script>
