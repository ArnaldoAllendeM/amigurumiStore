<template>
  <div>
    <Carrousel />
    <v-row p-5>
      <v-col
        v-for="producto in $store.state.productos"
        :key="producto.id"
        class="col-12 col-sm-12 col-md-6 col-lg-3"
      >
        <CharacterCard
          :producto="producto"
          @click="$router.push({ path: `${$event.id}` })"
        />
      </v-col>
    </v-row>
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
