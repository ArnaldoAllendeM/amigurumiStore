<template>
  <div>
    <v-hover v-slot="{ hover }">
      <v-card
        v-ripple
        class="mx-auto card pb-5"
        max-width="500px"
        :elevation="hover ? 12 : 2"
        @click="$emit('click', patron)"
      >
        <v-img :src="patron.imagen" height="200px"></v-img>

        <v-card-subtitle class="card-subtitle"> Amigurumi </v-card-subtitle>
        <v-card-title class="card-title"> {{ patron.nombre }}</v-card-title>
        <v-card-text class="card-price"> ${{ patron.precio }} </v-card-text>
        <div class="text-center">
          <v-btn
            @click="$router.push({ path: `/patrones/${getId}` })"
            class="button"
            >Ver amigurumi</v-btn
          >
        </div>
      </v-card>
    </v-hover>
  </div>
</template>

<script>
export default {
  props: {
    patron: { type: Object, required: true },
  },
  computed: {
    getId() {
      return this.patron.id;
    },
  },
};
</script>

<style scoped>
.card {
  transition: all 0.2s linear;
  cursor: pointer;
  background-color: #fff8fb;
}

.button {
  background: #e74f8a !important;
  color: #ffff;
  text-decoration: none;
  box-shadow: none;
}

.card-subtitle {
  text-transform: uppercase;
  padding-bottom: 0;
}

.card-title {
  font-family: "Rubik", sans-serif !important;
  font-weight: 300;
  padding-top: 0;
  margin: 0;
}

.card-price {
  color: #fe70aa !important;
  font-size: 1.2rem;
}
</style>
