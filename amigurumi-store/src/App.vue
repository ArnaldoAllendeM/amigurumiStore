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
};
</script>
