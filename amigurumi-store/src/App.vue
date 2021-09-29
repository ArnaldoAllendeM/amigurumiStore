<template>
  <v-app>
    <navigation />
    <v-main>
      <router-view />

      <Carrousel />
      <v-container>
        <v-row no-gutters>
          <Cards />
        </v-row>
      </v-container>
      <Form />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Carrousel from "./components/Carrousel.vue";
import Cards from "./components/Cards.vue";
import Form from "./components/Form.vue";
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
    Carrousel,
    Cards,
    Footer,
    Form,
  },
};
</script>
