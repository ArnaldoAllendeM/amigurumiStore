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
export default {
  data: () => ({
    name: "App",
  
  }),
  components: {
    Navbar,
  },
};
</script>
