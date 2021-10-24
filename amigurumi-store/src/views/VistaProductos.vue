<template>
  <section class="productos">
    <div class="text-center">
      <h2 class="mt-10">Productos</h2>
      <h6 class="mb-0">
        Figuras sencillas elaboradas con imaginación artesanal.
        <br />Fabricación 100% nacional.
      </h6>
    </div>

    <v-row class="p-5 v-row">
      <v-col
        v-for="producto in $store.state.productos"
        :key="producto.id"
        class="col-12 col-sm-12 col-md-6 col-lg-3 v-col"
      >
        <CharacterCard
          :producto="producto"
          @click="$router.push({ path: `/detalle/${$event.id}` })"
          class="clickCard"
        />
      </v-col>
    </v-row>
  </section>
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

<style lang="scss" scoped>
.productos h2 {
  font-size: 30px;
  line-height: 40px;
  font-weight: 600;
  margin-bottom: 25px;
}

.productos h6 {
  font-size: 18px;
  font-weight: 400;
  color: #263b5e;
  line-height: 30px;
  margin-bottom: 35px;
}
</style>
