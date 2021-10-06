<template>
  <div>
    <v-row class="p-5">
      <v-col
        v-for="producto in $store.state.productos"
        :key="producto.id"
        class="col-12 col-sm-12 col-md-6 col-lg-3"
      >
        <CharacterCard
          :producto="producto"
          @click="$router.push({ path: `/detalle/${$event.id}` })"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Store from "../store";
import CharacterCard from "../components/CharacterCard.vue";
export default {
  name: "VistaProductos",
  components: {
    CharacterCard,
  },

  //añadido para firestore
  async beforeRouteEnter(to, from, next) {
    await Store.dispatch("getAmigurumis");
    next();
  },
};
</script>

<style></style>
