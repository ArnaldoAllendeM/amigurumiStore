<template>
  <div>
    <v-container>
      <h2 class="my-10">Carrito de compras</h2>
      <h2 class="my-10" v-if="this.carrito[0] ==undefined">Tu carrito está vacío, revisa nuestro catálogo y agrega tu amigurumi favorito!</h2>
      <v-card class="mx-auto mb-5" tile v-if="this.carrito[0] !=undefined">
        <v-data-table
          calculate-widths
          dense
          :items="this.carrito"
          :headers="headers"
          hide-default-footer
        >
          <template v-slot:[`item.imagen`]="{ item }">
            <v-img :src="item.imagen" max-width="100"> </v-img>
          </template>
          <template v-slot:[`item.nombre`]="{ item }">
            {{ item.nombre.toLocaleString() }}
          </template>
           <template v-slot:[`item.color`]="{ item }">
             <div class="colorDiv"
      :style="{
        'background-color': item.color,
      }"
    ></div>
          </template>
          <template v-slot:[`item.cantidad`]="{ item }">
            <!-- btn de añadir -->
            <v-btn
              class="mx-2 text-white font-weight-bold"
              color="#fe70aa"
              depressed
              :disabled="cargando"
              @click="subirCantidad(item.id)"
              >+</v-btn
            >

            <!-- cantidad -->
            {{ item.cantidad.toLocaleString() }}

            <!-- btn de restar -->
            <v-btn
              class="mx-2 text-white font-weight-bold"
              color="#fe70aa"
              depressed
              :disabled="cargando"
              @click="bajarCantidad(item.id)"
              >-</v-btn
            >
          </template>
          <template v-slot:[`item.precio`]="{ item }">
            {{ item.precio.toLocaleString() }}
          </template>

          <template v-slot:[`item.precioTotal`]="{ item }">
            <td
              v-bind:style="{
                'font-weight': '700 !important',
                color: '#fe70aa',
              }"
            >
              {{ parseInt(item.precio) * parseInt(item.cantidad) }}
            </td>
          </template>
          <template v-slot:[`item.action`]="{ item }">
            <v-btn
              class="mx-2 text-white"
              color="#fe70aa"
              depressed
              :disabled="cargando"
              @click="borrarCarrito(item.id)"
            >
              <v-icon>mdi-delete</v-icon></v-btn
            >
          </template>
        </v-data-table>
        <h6 class="total" v-bind:style="{
                'font-weight': '700 !important',
                color: '#fe70aa',
              }">

         Total: $ {{ total.toLocaleString() }}
        </h6>
      </v-card>

      <!-- form -->
      <v-form @submit.prevent="handleOnSubmit" ref="form" v-if="this.carrito[0] !=undefined">
      <v-card class="mx-auto p-5" tile>
        <v-card-title class="p-1" >Ingresa tus datos para ponernos en contacto!</v-card-title>
        <v-text-field class="inputNombre" v-model="nombre" label="Nombre" required></v-text-field>

        <v-text-field class="inputCorreo" v-model="correo" label="Correo" required></v-text-field>

        <v-text-field v-on:keyup.enter="enviarCarrito()" class="inputTelefono" v-model="telefono" label="Teléfono" required></v-text-field>
      </v-card>
      </v-form>
      <!-- botón de enviar -->
      <div v-if="verForm()" class="mb-10">
        <v-btn
          class="mt-5 text-white"
          height="2.5rem"
          width="10rem"
          color="#fe70aa"
          :loading="cargando"
          @click="enviarCarrito()"
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
    nombre:"",
    correo:"",
    telefono:"",
    element:0,
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
        text: "Color",
        value: "color",
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
      "limpiarCarrito"
    ]),
    handleOnSubmit() {
      if (this.$refs.form.validate()) {
        this.$emit("submit", {
          email: this.email,
          name: this.name,
          message: this.message,
          subject: this.subject,
        });
      }
    },
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
          nombre: this.nombre,
          correo: this.correo,
          telefono: this.telefono,
        },
      };
      Firebase.firestore()
        .collection("pedidos")
        .add(pedido)
        .then(() => {
          this.enviarDataCarrito(this.carrito)
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
    getTotal(){
      console.log(this.carrito)
      
      for (let i = 0; i < this.carrito.length; i++) {
         this.element =+ this.carrito[i].cantidad;
      }
        return this.element
    },
    
  },
  computed: {
    ...mapState(["carrito"]),
    // this.enviarDataCarrito(this.carrito);
    
  total() {
    const { carrito } = this;
      return carrito.reduce((acc, value) => {
        // const realPrice =
        //   value.discount > 0
        //     ? value.price - (value.discount / 100) * value.price
        //     : value.price;
        console.log(acc + value.precio * value.cantidad)
        return acc + value.precio * value.cantidad;
      }, 0);
    },
  },
};
</script>

<style lang="scss" scoped>
/* turn off min-width for all buttons */
.colorDiv{
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.v-btn {
  min-width: 0 !important;
}
.total{
  text-align: right;
  padding-right: 3rem;
  padding-bottom: 1rem;
}
</style>
