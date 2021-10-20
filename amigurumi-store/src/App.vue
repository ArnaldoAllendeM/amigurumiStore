<template>
  <v-app>
    <Navigation />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";
export default {
  data: () => ({
    name: "App",
    fab: null,
    color: "",
    flat: null,
  }),

  components: {
    Navigation,
    Footer,
  },
  methods: {
    updateColor(color) {
      this.color = color;
    },
  },
};
</script>
<style lang="scss">
/**Estilos de fuente para todo el sitio */
@import url("https://fonts.googleapis.com/css2?family=Karla:wght@300;400;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;600;700&display=swap");

* {
  font-family: "Karla", sans-serif !important;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Rubik", sans-serif !important;
  color: #fe70aa;
  font-weight: 700;
}

body {
  font-family: "Karla", sans-serif;
  color: #6a7695 !important;
  font-weight: 300;
  font-size: 1rem;
  letter-spacing: 0px;
}
</style>