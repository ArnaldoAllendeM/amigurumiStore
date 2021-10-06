import Vue from "vue";
import Vuex from "vuex";
// este firebase se puede mover
import Firebase from 'firebase'
import { firebaseConfig } from '../../firebase-config'
export const firebaseApp = Firebase.initializeApp(firebaseConfig);
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    carrito: [],
    productos: [
      {
        id: 1,
        nombre: "Morty",
        //Se agrega Link Externo (cambiar)
        imagen:
          "https://m.media-amazon.com/images/I/7101fA5PhYL._AC_UL320_.jpg",
        price: {
          sm: 10000,
          md: 15000,
          lg: 20000
        }
      },
      {
        id: 2,
        nombre: "Rick",
        imagen:
          "https://m.media-amazon.com/images/I/7101fA5PhYL._AC_UL320_.jpg",
        price: {
          sm: 10000,
          md: 15000,
          lg: 20000
        }
      },
      {
        id: 3,
        nombre: "Summer",
        imagen:
          "https://m.media-amazon.com/images/I/7101fA5PhYL._AC_UL320_.jpg",
        price: {
          sm: 10000,
          md: 15000,
          lg: 20000
        }
      },
      {
        id: 4,
        nombre: "Beth",
        imagen:
          "https://m.media-amazon.com/images/I/7101fA5PhYL._AC_UL320_.jpg",
        price: {
          sm: 10000,
          md: 15000,
          lg: 20000
        }
      },
      {
        id: 5,
        nombre: "Jerry",
        imagen:
          "https://m.media-amazon.com/images/I/7101fA5PhYL._AC_UL320_.jpg",
        price: {
          sm: 10000,
          md: 15000,
          lg: 20000
        }
      }
    ]
  },
  getters: {
    getProductDetail: (state) => (payload) => {
      const data = state.productos;
      const rst = data.find((p) => p.id === payload);
      return rst;
    },
    getProductos: (state) => (payload) => {
      const data = state.productos;
      let rst = "";
      if (payload) {
        rst = data.filter((pr) => pr.type.includes(payload));
      } else {
        rst = data;
      }
      const result = rst.map((p) => {
        const { nombre, imagen, id } = p;
        return {
          nombre,
          imagen,
          id
        };
      });

      return result;
    }
  },

  mutations: {
    SET_FORM(state){

    },
    AUMENTARCANTIDAD(state, producto) {
      // agregar logica que busque al producto en el carrito por id y cantidad ++
//  state.carrito.push(producto)
 console.log(producto)
    },
    DISMINUIRCANTIDAD(state, id) {

        // cantidad mayor a 1
        // confirmación a través de un alert, usar action / revisar la vista del carro**
        
    },
    ELIMINARDELCARRO(state, producto) {

      // si cantidad es 1, crear un botón de eliminar
      const index = state.carrito.findIndex((item) => item.id === producto.id);
      state.carrito.splice(index, 1);
    },
    AGREGARALCARRO(state, producto) {

      console.log("hola");
      state.carrito.push(producto);
      console.log(state.carrito);
    },
  },
  actions: {
    agregarACarrito({ commit, state }, producto) {
      let nuevoProducto = { ...producto };
      // console.log(nuevoProducto)
      // const productoCarro = state.productos.filter((productoCarro)=> productoCarro.id === nuevoProducto.id)
      // // console.log(productoCarro)
      // productoCarro.cantidad = 1;
      // commit('AGREGARALCARRO', productoCarro);
      let verifica = null;
      verifica = state.carrito.filter(({ id }) => id == nuevoProducto.id);
      console.log(verifica);
      if (verifica.length != 0) {
        console.log("aumentarcantidad");
        nuevoProducto.cantidad++
        console.log(nuevoProducto);
        commit("AUMENTARCANTIDAD", nuevoProducto);
      } else {
        console.log("agregaralcarro");
        commit("AGREGARALCARRO", nuevoProducto);
      }
    },
    borrarDelCarrito({ commit, state }, id) {
      commit('ELIMINARDELCARRO', id);
    },
    subirLaCantidad({commit, state},id){
      state.carrito.map(producto => {
        if(producto.id == id){
          producto.cantidad++
          commit("AUMENTARCANTIDAD", id)
      }})},
    bajarLaCantidad({commit, state},id){
      
      state.carrito.map(producto => {
        if(producto.id == id && producto.cantidad>1){
          producto.cantidad--
          commit("DISMINUIRCANTIDAD", id)
        }else if(producto.id == id && producto.cantidad==1){
          producto.cantidad
          commit("ELIMINARDELCARRO", id)
        }       
      })
    },
    traerFormDataFromHome(context, dataForm){ 
      const firebaseApp = context.rootState.firebase
      return new Promise((resolve, reject) => {
        Firebase.firestore(firebaseApp).collection('formulario').add(dataForm).then(resolve, reject)
      })
    }
  },
  modules: {}
});
