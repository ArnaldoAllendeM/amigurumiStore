<template>
<div>
  <v-app id="footer">
    <v-footer height="auto">
      <v-card flat tile class="flex">
        <v-card-title class="purple white--text">
          <strong class="subheading">Contactate con nosotros</strong>
          <v-spacer></v-spacer>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            icon
            dark
            class="mx-3"
          >
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text class="purple  darken-2 white--text pt-4 pb-4">
          <v-layout>
            <v-flex
              v-for="(col, i) in rows"
              :key="i"
              xs3
            >
              <span class="title" v-text="col.title.toUpperCase()"></span>
              <hr width="90%">
              <div
                v-for="(child, i) in col.children"
                :key="i"
                v-text="child"
              ></div>
            </v-flex>
            <v-flex xs3 layout column pr-1>
              <span class="title ">Contacto</span>
              <hr width="90%">
              <div>
                <v-icon size="18px" class="mr-3 white--text">fas fa-map-marker-alt</v-icon>
               Definir
              </div>
              <div>
                <v-icon size="18px" class="mr-3 white--text">fas fa-map-marker-alt</v-icon>
                Definir
              </div>
              <div>
                <v-icon size="18px" class="mr-3 white--text">fas fa-building</v-icon>
                Definir
              </div>
              <div>
                <v-icon size="18px" class="mr-3 white--text">fas fa-envelope</v-icon>
                info@email
              </div>
              <div>
                <v-icon size="18px" class="mr-3 white--text">fas fa-phone</v-icon>
               fono
              </div>
              <div>
                <v-icon size="18px" class="mr-3 white--text">fas fa-print</v-icon>
                 fono
              </div>
            </v-flex>
          </v-layout>
        </v-card-text>
        <v-card-actions class="grey lighten-2 justify-center">
          &copy;2021 — <strong>Todos los derechos reservados</strong>
        </v-card-actions>
      </v-card>
    </v-footer>
  </v-app>
</div>
</template>
<script>
 export default {
  data: () => ({
    name: 'Footer',
    icons: ['fab fa-facebook', 'fab fa-twitter', 'fab fa-google-plus', 'fab fa-linkedin', 'fab fa-instagram'],
    rows: [
      {
        title: 'Participa con nosotros(definir)',
        children: ['Definir', 'Definir', 'Definir']
      },
      {
        title: 'Unete(definir)',
        children: ['Definir', 'Definir', 'Definir']
      },
      {
        title: 'Acerca de Nosotros (definir)',
        children: ['Definir', 'Definir', 'Definir']
      }
    ]
  })
}


</script>
