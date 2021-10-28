import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import VistaProductos from "../views/VistaProductos.vue";
import Nosotros from "../views/Nosotros.vue";
import DetalleProducto from "../views/DetalleProducto.vue";
import DetallePatrones from "../views/DetallePatrones.vue";
import Patrones from "../views/Patrones.vue";
import Carrito from "../views/Carrito.vue";
import Contactanos from "../views/Contactanos.vue";
import Login from "../views/Login.vue";
import $store from "../store/index"

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/patrones",
    name: "Patrones",
    component: Patrones
  },
  {
    path: "/productos",
    name: "Productos",
    component: VistaProductos
  },
  {
    path: "/detalle/:id",
    name: "detalleProducto",
    component: DetalleProducto
  },
  {
    path: "/patrones/:id",
    name: "DetallePatrones",
    component: DetallePatrones
  },
  {
    path: "/carrito",
    name: "Carrito",
    component: Carrito
  },
  {
    path: "/contactanos",
    name: "Contactanos",
    component: Contactanos
  },
  {
    path: "/nosotros",
    name: "Nosotros",
    component: Nosotros
    // children:[
    //   {
    //     path: ":id",
    //     component:DetalleProducto,
    //   }
    // ]
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("../views/Admin.vue"),
    meta: {
      login: true
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
router.beforeEach((to, from, next) => {
  console.log('funcion que se ejecuta en cada cambio de ruta')
  if (to.meta.login) {
    const user = $store.state.user
    if (user) {
      next()
    } else {
      next('login')
    }
  } else {
    next()
  }
})
export default router;
