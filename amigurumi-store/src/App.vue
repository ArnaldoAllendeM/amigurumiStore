<template>
  <!-- <div> -->
    <v-app>
      <Navbar />
      <v-main>
        <router-view />
      </v-main>
    </v-app>
    <!-- <Carrousel />
    <v-container>
      <v-row no-gutters>
        <Cards />
      </v-row>
    </v-container>
     <Form />
    <Footer />
  </div> -->
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Carrousel from "./components/Carrousel.vue";
import Cards from "./components/Cards.vue";
import Form from "./components/Form.vue";
import Footer from "./components/Footer.vue";
export default {
  data: () => ({
    name: "App",
  
  }),
  components: {
    Navbar,
    Carrousel,
    Cards,
    Footer,
     Form,
  },
};
</script>
