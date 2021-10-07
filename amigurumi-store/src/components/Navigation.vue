<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      dark
      src="@/assets/img/bgDrawer.jpg"
    >
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img src="@/assets/img/Logo.jpg" alt="Logo" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title">Amigurumi</v-list-item-title>
            <v-list-item-subtitle>WEB</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider />

      <v-list dense>
        <v-list-item
          v-for="([icon, text, link], i) in items"
          :key="i"
          link
          @click="$vuetify.goTo(link)"
        >
          <v-list-item-icon class="justify-center">
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="subtitile-1">{{
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
      dark
      class="px-15"
      :class="{ expand: flat }"
    >
      <v-toolbar-title>
        <v-img src="@/assets/img/logo.png" max-width="50px" />
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
          <span class="mr-2">Productos</span>
        </v-btn>
        <v-btn to="/patrones" text>
          <span class="mr-2">Patrones</span>
        </v-btn>
        <v-btn to="/creatuamigurumi" text>
          <span class="mr-2">Crea tu Amigurumi</span>
        </v-btn>
        <v-btn to="/contactanos" text>
          <span class="mr-2">Contactanos</span>
        </v-btn>
        <v-btn to="/carrito" text>
          <v-icon>mdi-cart</v-icon>
        </v-btn>
        <v-btn to="/login" text>
          <v-icon>mdi-login</v-icon>
        </v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<style scoped>
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

<script>
export default {
  data: () => ({
    name: "Navigation",
    drawer: null,
    isXs: false,
    items: [
      ["mdi-home-outline", "Inicio", "#inicio"],
      ["mdi-check-all", "Productos", "#productos"],
      ["mdi-xbox", "Patrones", "#patrones"],
      ["mdi-white-balance-incandescent", "Crea tu Amigurumi", "#amigotumi"],
      ["mdi-message-processing", "Contactanos", "#contacto"],
      ["mdi-cart", "Ver Carrito", "#carrito"],
      ["mdi-login", "Login", "#login"],
    ],
  }),
  props: {
    color: String,
    flat: Boolean,
  },
  methods: {
    onResize() {
      this.isXs = window.innerWidth < 850;
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
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
};
</script>
