<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      pink accent-3
      class="ml-auto"
      style="#FFF8FB"
    >
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img src="@/assets/logo-navdrawer.png" alt="Logo" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title style="color: #FE70AA" class="title font-weight-bold">Amigurumis</v-list-item-title>
            <v-list-item-subtitle style="color: #FE70AA" class="font-weight-bold">Tia Xime</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider />

      <v-list dense >
        <v-list-item style="color: #FE70AA" class="font-weight-bold"
          v-for="([icon, text, link], i) in items"
          :key="i"
          @click="$router.push({ path: link })"
        >
          <v-list-item-icon link :to="{ link }" class="justify-center">
            <v-icon class="grey--text font-weight-bold" link :to="{ link }">{{ icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="subtitile-1 font-weight-bold">{{
              text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      :color="color"
      :flat="flat"
      :height="90"
      dark
      mobile-breakpoint="2024"
      class="px-15"
      :class="{ expand: flat }"
    >
      <v-toolbar-title>
        <v-img src="@/assets/logo-menu.png" max-width="190px" />
      </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="mr-4"
        v-if="isXs"
      />
      <div v-else>
        <v-btn to="/home" text>
          <span class="mr-2">Inicio</span>
        </v-btn>
        <v-btn to="/productos" text>
          <span class="mr-2 productos">Productos</span>
        </v-btn>
        <v-btn to="/patrones" text>
          <span class="mr-2">Patrones</span>
        </v-btn>
        <v-btn to="/nosotros" text>
          <span class="mr-2">Nosotros</span>
        </v-btn>
        <v-btn to="/contactanos" text>
          <span class="mr-2">Contactanos</span>
        </v-btn>
        <!-- <v-btn to="/carrito" text>
          <v-icon>mdi-cart</v-icon>
        </v-btn> -->
        <v-badge
          :content="totalBadge"
          :value="showBadge()"
          color="secondary"
          overlap
        >
          <v-btn to="/carrito" class="carritoNavClick" text>
            <v-icon> mdi-cart </v-icon>
          </v-btn>
        </v-badge>
        <v-btn to="/login" text>
          <v-icon>mdi-login</v-icon>
        </v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    name: "Navigation",
    drawer: null,
    isXs: false,
    element:0,
    items: [
      ["mdi-home-outline", "Inicio", "/home"],
      ["mdi-check-all", "Productos", "/productos"],
      ["mdi-xbox", "Patrones", "/patrones"],
      ["mdi-white-balance-incandescent", "Nosotros", "/nosotros"],
      ["mdi-message-processing", "Contactanos", "/contactanos"],
      ["mdi-cart", "Ver Carrito", "/carrito"],
      ["mdi-login", "Login", "/login"],
    ],
  }),
  props: {
    color: String,
    flat: Boolean,
  },
  methods: {
    onResize() {
      this.isXs = window.innerWidth < 1072;
    },
    showBadge(){
      if(this.totalBadge==0){
        return false
      }
    },
    valor(){
      const carrito = this.$store.state.carrito
      console.log(carrito)
      console.log(carrito.length)
      for (let i = 0; i < carrito.length; i++) {
       this.element = this.element + carrito[i].cantidad;        
      }
      console.log(this.element)
      return this.element;
      // console.log(this.$store.state.carrito[0].cantidad)
// return this.$store.state.carrito.forEach(v=> v += v.cantidad)
    },
    
  },

  watch: {
    isXs(value) {
      if (!value) {
        if (this.drawer) {
          this.drawer = false;
        }
      }
    },
  },
  computed:{
    totalBadge() {
      const { carrito } = this.$store.state;
      return carrito.reduce((acc, value) => {
        return acc + value.cantidad;
      }, 0);      
    },
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
    console.log(this.$store.state.mensajes);
  },
};
</script>

<style scoped>
.v-navigation-drawer img{
  background-size: 300px 100px !important;
}
.v-toolbar {
  transition: 0.6s;
}

.expand {
  height: 80px !important;
  padding-top: 10px;
}

.mdi-menu:before {
  content: "\F35C";
  left: 180% !important;
  position: absolute !important;
}

.v-app-bar {
  background-color: #e74f8a !important;
}
</style>


