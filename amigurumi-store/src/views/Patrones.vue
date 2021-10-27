<template>
  <section class="patrones">
    <div class="text-center">
      <h2 class="mt-10">Patrones</h2>
      <h6 class="mb-0">
        Figuras sencillas elaboradas con imaginación artesanal.
        <br />Fabricación 100% nacional.
      </h6>
    </div>

    <v-row class="p-5">
      <v-col
        v-for="patron in $store.state.patrones"
        :key="patron.id"
        class="col-12 col-sm-12 col-md-6 col-lg-3"
      >
        <CharacterCardPatron
          :patron="patron"
          @click="$router.push({ path: `/patrones/${$event.id}` })"
        />
      </v-col>
    </v-row>
  </section>
</template>

<script>
import Store from "../store";
import CharacterCardPatron from "../components/CharacterCardPatron.vue";
export default {
  name: "Patrones",
  components: {
    CharacterCardPatron,
  },
  //añadido para firestore
  async beforeRouteEnter(to, from, next) {
    await Store.dispatch("getPatrones");
    next();
  },
};
</script>

<style lang="scss" scoped>
.patrones h2 {
  font-size: 30px;
  line-height: 40px;
  font-weight: 600;
  margin-bottom: 25px;
}

.patrones h6 {
  font-size: 18px;
  font-weight: 400;
  color: #263b5e;
  line-height: 30px;
  margin-bottom: 35px;
}
</style>