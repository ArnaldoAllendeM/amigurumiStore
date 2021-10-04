import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productos: [
      {
        id: 1,
        nombre: "Morty",
        precio: "$500",
        //Se agrega Link Externo (cambiar)
        imagen: "https://m.media-amazon.com/images/I/7101fA5PhYL._AC_UL320_.jpg"
      },
      {
        id: 2,
        nombre: "Rick",
        precio: "$500",
        imagen: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
      },
      {
        id: 3,
        nombre: "Summer",
        precio: "$500",
        imagen: "https://rickandmortyapi.com/api/character/avatar/3.jpeg"
      },
      {
        id: 4,
        nombre: "Beth",
        precio: "$500",
        imagen: "https://rickandmortyapi.com/api/character/avatar/4.jpeg"
      },
      {
        id: 5,
        nombre: "Jerry",
        precio: "$500",
        imagen: "https://rickandmortyapi.com/api/character/avatar/5.jpeg"
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

  mutations: {},
  actions: {},
  modules: {}
});
