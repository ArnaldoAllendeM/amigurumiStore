import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    carrito: [],
    productoCarro: [],
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
        imagen: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        price: {
          sm: 10000,
          md: 15000,
          lg: 20000
        }
      },
      {
        id: 3,
        nombre: "Summer",
        imagen: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
        price: {
          sm: 10000,
          md: 15000,
          lg: 20000
        }
      },
      {
        id: 4,
        nombre: "Beth",
        imagen: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
        price: {
          sm: 10000,
          md: 15000,
          lg: 20000
        }
      },
      {
        id: 5,
        nombre: "Jerry",
        imagen: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
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
    AUMENTARCANTIDAD(state, id) {
      // agregar logica que busque al producto en el carrito por id y cantidad ++
    },
    DISMINUIRCANTIDAD(state, id) {
      // cantidad mayor a 1
      // confirmación a través de un alert, usar action / revisar la vista del carro**
    },
    ELIMINARDELCARRO(state, id) {
      // si cantidad es 1, crear un botón de eliminar
    },
    AGREGARALCARRO(state, producto) {
      state.productoCarro.push(producto);
    }
  },
  actions: {
    agregarACarrito({ commit, state }, nuevoProducto) {
      const productoCarro = state.productos.filter(
        (productoCarro) => productoCarro.id === nuevoProducto.id
      );
      console.log(productoCarro);
      productoCarro.cantidad = 1;
      commit("AGREGARALCARRO", productoCarro);
      // state.carrito.filter(p => {
      //   if(productoCarro.id == producto.id){
      //     commit('AUMENTARCANTIDAD', productoCarro.id)
      //   }
      //   else{
      //     commit('AGREGARALCARRO', producto);
      //   }
      // })
    }
  },
  modules: {}
});
