import Vue from "vue";
import Vuex, { createLogger, Store } from "vuex";
// este firebase se puede mover
import Firebase from "firebase";
import { firebaseConfig } from "../../firebase-config";
export const firebaseApp = Firebase.initializeApp(firebaseConfig);
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null, //variable para sesión
    productoEnVista: null,
    count: 0,
    carrito: [],
    patrones: [],
    productos: [],
    mensajes: 0,
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
          id,
        };
      });

      return result;
    },
    getProduct: (state) => (id) => {
      console.log("producto");

      const producto = state.productos.filter((producto) => producto.id == id);
      console.log(producto);
      console.log(id);
      return producto;
    },
  },

  mutations: {
    //mutation de login:
    SET_USER(state, newUser) {
      state.user = newUser;
    },

    //PARA CARDS de firestore
    SET_DATA(state, newData) {
      state.productos = newData;
    },
    SET_CLEARDATA(state) {
      state.carrito = [];
      console.log(state.carrito);
    },
    SET_DATA_PATRONES(state, newData) {
      state.patrones = newData;
    },
    AUMENTARCANTIDAD(state, producto) {
      // agregar logica que busque al producto en el carrito por id y cantidad ++
      // const agregarCantidad = state.carrito.
      // state.carrito.push(producto)
      // state.count++;
      // console.log(count)
    },
    // AUMENTARCANTIDAD(state, producto) {
    //   // agregar logica que busque al producto en el carrito por id y cantidad ++
    //   //  state.carrito.push(producto)
    //   console.log(producto);
    // },
    DISMINUIRCANTIDAD(state, $index) {
      // cantidad mayor a 1
      // confirmación a través de un alert, usar action / revisar la vista del carro**
      state.carrito[$index].cantidad--;
    },
    ELIMINARDELCARRO(state, $index) {
      // // si cantidad es 1, crear un botón de eliminar
      // const index = state.carrito.findIndex((item) => item.id === producto.id);
      state.carrito.splice($index, 1);
    },
    AGREGARALCARRO(state, producto) {
      // console.log("hola");
      // state.carrito.push(producto);
      // console.log(state.carrito);
      // console.log(messages)
      // state.mensajes=messages;
      console.log(state.mensajes);
      const index = state.carrito.findIndex((p) => p.id === producto.id);
      if (index != -1) {
        // state.carrito[index].cantidad++;
        // const { ...productoActualizado } = state.carrito[index];
        // productoActualizado.cantidad++;
        // state.carrito[index] = productoActualizado;
      } else {
        state.carrito.push(producto);
      }
    },
    AUMENTARCANTIDADCARRITO(state, $index) {
      state.carrito[$index].cantidad++;
    },
    GUARDAR_PRODUCTO(state, producto) {
      state.productoEnVista = producto;
    },
  },
  actions: {
    guardarProducto(context, productoEnVista) {
      let productoenVista = { ...productoenVista };
      context.commit("GUARDAR_PRODUCTO", productoEnVista);
    },
    //actions del Login
    login(context, credentials) {
      return new Promise((resolve, reject) => {
        Firebase.auth()
          .signInWithEmailAndPassword(credentials.email, credentials.password)
          .then((data) => {
            //enviar datos a las mutaciones
            context.commit("SET_USER", data.user);
            resolve();
          }, reject);
      });
    },
    limpiarCarrito(context) {
      context.commit("SET_CLEARDATA");
    },
    //action para traer datos de firestore
    getAmigurumis(context) {
      //const firebaseApp = context.rootState.firebase;
      console.log(firebaseApp);
      Firebase.firestore(firebaseApp)
        .collection("amigurumis")
        .get()
        .then((querySnapshot) => {
          let productos = [];
          querySnapshot.forEach(
            (doc) => productos.push({ uuid: doc.id, ...doc.data() }),
            console.log(productos)
          );
          context.commit("SET_DATA", productos);
        });
    },
    getPatrones(context) {
      //const firebaseApp = context.rootState.firebase;
      console.log(firebaseApp);
      Firebase.firestore(firebaseApp)
        .collection("patrones")
        .get()
        .then((querySnapshot) => {
          let patrones = [];
          querySnapshot.forEach(
            (doc) => patrones.push({ uuid: doc.id, ...doc.data() }),
            console.log(patrones)
          );
          context.commit("SET_DATA_PATRONES", patrones);
        });
    },
    enviarDataCarrito(context, carrito) {
      context.commit("SET_CLEARDATA", carrito)
    },
    agregarACarrito({ commit, state }, producto, messages) {
      const nuevoProducto = { ...producto };
      console.log(messages);
      let verifica = null;
      verifica = state.carrito.filter(({ id }) => id == nuevoProducto.id);
      console.log(verifica);
      const index = state.carrito.findIndex((p) => p.id === nuevoProducto.id);
      if (index != -1) {
        commit("AUMENTARCANTIDADCARRITO", index);
      } else {
        commit("AGREGARALCARRO", nuevoProducto);
      }
      // }
    },
    borrarDelCarrito({ commit, state }, id) {
      state.carrito.forEach((producto, $index) => {
        if (producto.id == id) {
          commit("ELIMINARDELCARRO", $index);
        }
      });
    },

    subirLaCantidad({ commit, state }, id) {
      state.carrito.map((producto) => {
        if (producto.id == id) {
          producto.cantidad++;
          commit("AUMENTARCANTIDAD", id);
        }
      });
    },

    limpiarCarrito({ commit, state }) {
      commit("SET_CLEARDATA");
    },
    bajarLaCantidad({ commit, state }, id) {
      state.carrito.forEach((producto, $index) => {
        if (producto.id == id && producto.cantidad > 1) {
          commit("DISMINUIRCANTIDAD", $index);
        } else if (producto.id == id && producto.cantidad == 1) {
          commit("ELIMINARDELCARRO", $index);
        }
      });
    },
    traerFormDataFromHome(context, dataForm) {
      const firebaseApp = context.rootState.firebase;
      return new Promise((resolve, reject) => {
        Firebase.firestore(firebaseApp)
          .collection("formulario")
          .add(dataForm)
          .then(resolve, reject);
      });
    },
    agregarPatrones({ commit, state }, producto) {
      const nuevoProducto = { ...producto };
      console.log(nuevoProducto);
      const index = state.carrito.findIndex((p) => p.id === nuevoProducto.id);
      if (index != -1) {
        commit("AUMENTARCANTIDADCARRITO", index);
      } else {
        commit("AGREGARALCARRO", nuevoProducto);
      }
      // }
    },
    borrarPatrones(context, patron) {
      const firebaseApp = context.rootState.firebase;
      console.log(patron);
      Firebase.firestore(firebaseApp)
        .collection("patrones")
        .doc(patron.uuid)
        .delete()
        .then(() => {
          console.log(patron);
          context.dispatch("getPatrones");
        })
        .catch((error) => {
          console.log(patron);
          console.error("Error removing document: ", error);
        });
    },
    borrarAmigurumis(context, amigurumis) {
      const firebaseApp = context.rootState.firebase;
      console.log({ amigurumis });
      Firebase.firestore(firebaseApp)
        .collection("amigurumis")
        .doc(amigurumis.uuid)
        .delete()
        .then(() => {
          console.log(amigurumis);
          context.dispatch("getAmigurumis");
        })
        .catch((error) => {
          console.log(patron);
          console.error("Error removing document: ", error);
        });
    },
    crearProducto(context, nuevoProducto) {
      const firebaseApp = context.rootState.firebase;
      console.log(nuevoProducto);
      return new Promise((resolve, reject) => {
        Firebase.firestore(firebaseApp)
          .collection("amigurumis")
          .add(nuevoProducto)
          .then(resolve, reject);
      });
    },
    crearPatrones(context, nuevoProducto) {
      const firebaseApp = context.rootState.firebase;
      console.log(nuevoProducto);
      return new Promise((resolve, reject) => {
        Firebase.firestore(firebaseApp)
          .collection("patrones")
          .add(nuevoProducto)
          .then(resolve, reject);
      });
    },
  },
  modules: {},
});
