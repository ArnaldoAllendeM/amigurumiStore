<template>
  <div>
    <v-container>
      <h2 class="my-10">Carrito de compras</h2>
      <v-card class="mx-auto" tile>
        <v-data-table
          dense
          :items="this.carrito"
          :headers="headers"
          hide-default-footer
        >
          <template v-slot:[`item.imagen`]="{ item }">
            <v-img :src="item.imagen" max-width="50"> </v-img>
          </template>
          <template v-slot:[`item.nombre`]="{ item }">
            {{ item.nombre.toLocaleString() }}
          </template>
          <template v-slot:[`item.cantidad`]="{ item }">
            {{ item.cantidad.toLocaleString() }}
          </template>
          <template v-slot:[`item.precio`]="{ item }">
            {{ item.precio.toLocaleString() }}
          </template>

          <template v-slot:[`item.precioTotal`]="{ item }">
            {{ parseInt(item.precio) * parseInt(item.cantidad) }}
          </template>
          <template v-slot:[`item.action`]="{ item }">
            <v-btn
              class="mx-2 text-white font-weight-bold"
              color="#fe70aa"
              depressed
              :disabled="cargando"
              @click="subirCantidad(item.id)"
              >+</v-btn
            >
            <v-btn
              class="mx-2 text-white"
              color="#fe70aa"
              depressed
              :disabled="cargando"
              @click="borrarCarrito(item.id)"
              >Borrar</v-btn
            >
            <v-btn
              class="mx-2 text-white font-weight-bold"
              color="#fe70aa"
              depressed
              :disabled="cargando"
              @click="bajarCantidad(item.id)"
              >-</v-btn
            >
          </template>
        </v-data-table>
      </v-card>
      <!-- botón de enviar -->
      <div v-if="verForm()">
        <v-btn class="mt-5" :loading="cargando" @click="enviarCarrito()"
          >Comprar</v-btn
        >
      </div>
    </v-container>
  </div>
</template>

<script>
import Firebase from "firebase";
import { mapActions, mapState } from "vuex";
// import FormInput from "../components/FormInput.vue"
export default {
  data: () => ({
    stringArray: [],
    cargando: false,
    headers: [
      {
        text: "Imagen",
        value: "imagen",
      },
      { text: "Nombre", value: "nombre" },
      {
        text: "Precio",
        value: "precio",
      },
      {
        text: "Cantidad",
        value: "cantidad",
      },

      {
        text: "Precio Total",
        value: "precioTotal",
      },
      {
        text: "Acciones",
        value: "action",
      },
    ],
  }),
  props: ["arregloCarrito"],
  name: "carrito",
  // components: FormInput,
  methods: {
    ...mapActions([
      "bajarLaCantidad",
      "borrarDelCarrito",
      "subirLaCantidad",
      "enviarDataCarrito",
    ]),
    bajarCantidad(id) {
      console.log(...this.carrito);
      this.bajarLaCantidad(id);
    },
    subirCantidad(id) {
      this.subirLaCantidad(id);
    },
    borrarCarrito(id) {
      this.borrarDelCarrito(id);
    },
    enviarCarrito() {
      this.cargando = true;
      const pedido = {
        productos: this.carrito,
        customer: {
          nombre: "Arnaldo",
          correo: "arnado.allendem@gmail.com",
        },
      };
      Firebase.firestore()
        .collection("pedidos")
        .add(pedido)
        .then(() => {
          this.$router.push("/home");
        })
        .finally(() => {
          this.cargando = false;
        });
    },
    verForm() {
      console.log(this.carrito);
      console.log(this.carrito[0]);
      if (this.carrito[0] == undefined) {
        return false;
      } else {
        return true;
      }
    },
  },
  computed: {
    ...mapState(["carrito"]),
    // this.enviarDataCarrito(this.carrito);
  },
};
</script>

<style></style>
