<template>
  <div>
    <Carrousel />
    <v-container>
      <v-row no-gutters>
        <Cards />
      </v-row>
    </v-container>
    <v-container>
    <v-row>
      <v-col
        v-for="personaje in $store.state.personajes"
        :key="personaje.id"
        cols="12"
        sm="6"
        lg="4"
      >
        <CharacterCard
          :personaje="personaje"
          @click="$router.push({ path: '/productos'})"
        />
      </v-col>
      <router-view></router-view>
    </v-row>
  </v-container>
     <Form />
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Carrousel from "../components/Carrousel.vue";
import Cards from "../components/Cards.vue";
import Form from "../components/Form.vue";
import Footer from "../components/Footer.vue";
import CharacterCard from "../components/CharacterCard.vue";
export default {
  data: () => ({
    name: "Home",
    items: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" },
    ],
    rutas:[{
      text : "Novedades", link: '/home'
    },{
    text : "Productos", link: '/productos'
    },{
    text : "Patrones", link: '/patrones'
    },{
    text : "Crea tu Amigurumi", link: '/creatuamigurumi'
    }]
  }),
  components: {
    Navbar,
    Carrousel,
    Cards,
    Footer,
     Form,
     CharacterCard,
  },
};
</script>
