import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home.vue";
import VistaProductos from "../views/VistaProductos.vue";
import CreaTuProducto from "../views/CreaTuProducto.vue";
import CharacterCard from "../components/CharacterCard.vue";
import Patrones from "../views/Patrones.vue";


Vue.use(VueRouter)

const routes = [

  {
    path: "",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/patrones",
    name: "Patrones",
    component: Patrones,
  },
  {
    path: '/productos',
    name: 'Productos',
    component: VistaProductos,
  },
  {
    path: '/creatuamigurumi',
    name: 'CreaTuProducto',
    component: CreaTuProducto,
  },
  {
    path: '/producto',
    name: 'CreaTuProducto',
    component: CreaTuProducto,
    children:[
      {
        path: "/:id",
        component:CharacterCard,
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router