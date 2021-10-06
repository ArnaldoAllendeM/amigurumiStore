import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home.vue";
import VistaProductos from "../views/VistaProductos.vue";
import CreaTuProducto from "../views/CreaTuProducto.vue";
import DetalleProducto from "../views/DetalleProducto.vue";
import DetallePatrones from "../views/DetallePatrones.vue";
import Patrones from "../views/Patrones.vue";
import Carrito from "../views/Carrito.vue";
import Contactanos from "../views/Contactanos.vue";


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
    path: '/detalle/:id',
    name: 'detalleProducto',
    component: DetalleProducto,
  },
  {
    path: '/patrones/:id',
    name: 'DetallePatrones',
    component: DetallePatrones,
  },
  
  
  {
    path: '/carrito',
    name: 'Carrito',
    component: Carrito,
  },
  {
    path: '/contactanos',
    name: 'Contactanos',
    component: Contactanos,
  },
  {
    path: '/producto',
    name: 'CreaTuProducto',
    component: CreaTuProducto,
    // children:[
    //   {
    //     path: ":id",
    //     component:DetalleProducto,
    //   }
    // ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router