<template>
  <v-dialog v-model="dialog">
    <template #activator="{ on }">
      <v-btn v-on="on" color="info">Agregar Producto</v-btn>
    </template>
    <v-card>
      <v-card-title> Agregando Producto </v-card-title>
      <v-card-text>
        <v-form ref="form" @submit.prevent="handleFormSubmit">
          <v-layout>
            <v-text-field
              label="Nombre"
              v-model="formData.nombre"
              :rules="[$rules.required]"
            ></v-text-field>
          </v-layout>
          <v-layout>
            <v-text-field
              label="URL de la Imagen"
              v-model="formData.imagen"
              :rules="[$rules.required]"
            ></v-text-field>
          </v-layout>
          <v-layout>
            <v-text-field
              label="URL de la Imagen (blanco y negro)"
              v-model="formData['imagen-gris']"
              :rules="[$rules.required]"
            ></v-text-field>
          </v-layout>
          <v-layout>
            <v-text-field
              label="ID"
              v-model="formData.id"
              :rules="[$rules.required]"
            ></v-text-field>
          </v-layout>
          <v-layout>
            <v-text-field
              label="Precio SM"
              v-model="formData.precio.sm"
              :rules="[$rules.required]"
            ></v-text-field>
          </v-layout>
          <v-layout>
            <v-text-field
              label="Precio MD"
              v-model="formData.precio.md"
              :rules="[$rules.required]"
            ></v-text-field>
          </v-layout>
          <v-layout>
            <v-text-field
              label="Precio LG"
              v-model="formData.precio.lg"
              :rules="[$rules.required]"
            ></v-text-field>
          </v-layout>
          <v-layout>
            <v-text-field
              label="Tipo de producto"
              v-model="formData.tipo"
            ></v-text-field>
          </v-layout>
          <v-layout>
            <v-textarea
              outlined
              label="Descripción del producto"
              v-model="formData.descripcion"
              :rules="[$rules.required]"
            ></v-textarea>
          </v-layout>
          <v-layout justify-space-between>
            <v-btn color="success" type="submit" :loading="loading">{{
              mode === "update" ? "Actualizar" : "Crear"
            }}</v-btn>
            <v-btn
              color="error"
              type="reset"
              @click="$refs.form.reset()"
              :loading="loading"
              >Limpiar formulario</v-btn
            > 
            <v-btn
              color="warning"
              type="button"
              :loading="loading"
              >Limpiar validacion</v-btn
            >
            <v-btn
              color="info"
              type="button"
              @click="$router.back()"
              :loading="loading"
              v-if="mode === 'update'"
              >Regresar</v-btn
            >
          </v-layout>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import Store from "../store";
import { mapActions, mapState } from "vuex";
const defaultProduct = () => ({
  nombre: null,
  imagen: null,
  ["imagen-gris"]: null,
  id: null,
  precio: {
    sm: null,
    md: null,
    lg: null,
  },
  tipo: null,
  descripcion: null,
});


export default {
    props: {
    producto: {
      type: Object,
      default: defaultProduct,
    },
    mode: {
      type: String,
      default: "update",
    },
  },
  components: {
  },
  data: () => ({
    dialog: false,
    formData: null,
    loading: false,
  }),
  methods: {
    async handleFormSubmit(nuevoProducto) {
      try {
        const response = await this.$store.dispatch(
          "crearProducto",
          nuevoProducto
        );
        console.log({ response, nuevoProducto });
        this.dialog = false;
        this.$store.dispatch("getAmigurumis");
      } catch (e) {
        console.error(e);
      }
    },
    handleFormSubmit() {
      if (this.$refs.form.validate()) {
        this.$emit("submit", { ...this.formData });
      }
    },
  },
  computed:{
      ...mapState(["carrito"]),
      formData1(){
          return this.carrito.find(p => p.id == this.$route.params.id)
      }
  },

  created() {
    this.formData = { ...this.producto };
  },
//   mounted() {
//     this.$refs.form.resetValidation();
//   },
};
</script>

<style></style>
