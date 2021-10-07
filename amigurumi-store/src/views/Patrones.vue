<template>
  <div>
    <v-row class="p-5">
      <v-col
        v-for="patron in $store.state.patrones"
        :key="patron.id"
        class="col-12 col-sm-12 col-md-6 col-lg-3"
      >
        <CharacterCardPatron
          :producto="patron"
          @click="$router.push({ path: `/patrones/${$event.id}` })"
        />
      </v-col>
    </v-row>
  </div>
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

<style></style>