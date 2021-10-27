<template>
  <v-dialog v-model="dialog">
    <template #activator="{ on }">
      <v-btn v-on="on" icon> <v-icon>mdi-pencil-outline</v-icon></v-btn>
    </template>
    <v-card>
      <v-card-title> Agregando Producto </v-card-title>
      <v-card-text>
        <v-form ref="form" @submit.prevent="handleFormSubmit">
          <v-layout>
            <v-text-field
              label="Nombre"
              v-model="value.nombre"
              :rules="[$rules.required]"
            ></v-text-field>
          </v-layout>
          <v-layout>
            <v-text-field
              label="URL de la Imagen"
              v-model="value.imagen"
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
              v-model="value.id"
              :rules="[$rules.required]"
            ></v-text-field>
          </v-layout>
          <v-layout>
            <v-text-field
              label="Precio SM"
              v-model="value.precio.sm"
              :rules="[$rules.required]"
            ></v-text-field>
          </v-layout>
          <v-layout>
            <v-text-field
              label="Precio MD"
              v-model="value.precio.md"
              :rules="[$rules.required]"
            ></v-text-field>
          </v-layout>
          <v-layout>
            <v-text-field
              label="Precio LG"
              v-model="value.precio.lg"
              :rules="[$rules.required]"
            ></v-text-field>
          </v-layout>
          <v-layout>
            <v-textarea
              outlined
              label="Descripción del producto"
              v-model="value.descripcion"
              :rules="[$rules.required]"
            ></v-textarea>
          </v-layout>
          <v-layout justify-space-between>
            <v-btn type="submit" :loading="loading">{{
              mode === "update" ? "Actualizar" : "Crear"
            }}</v-btn>
            <v-btn
              color="error"
              type="reset"
              @click="$refs.form.reset()"
              :loading="loading"
              >Limpiar formulario</v-btn
            >
            <v-btn color="warning" type="button" :loading="loading"
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
import Firebase from 'firebase'
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
  descripcion: null,
});

export default {
  props: {
    value:{
      type: Object,
    },
    producto: {
      type: Object,
      default: defaultProduct,
    },
    mode: {
      type: String,
      default: "update",
    },
  },
  components: {},
  data: () => ({
    dialog: false,
    formData: null,
    loading: false,
  }),
  methods: {
    handleFormSubmit() {
      console.log(this.value);
      
        Firebase.firestore().collection('amigurumis').doc(this.value.uuid)
        .update({...this.value}).then(()=>{
          this.dialog = false;
          this.$store.dispatch("getAmigurumis");
        })      
      
    },
  },
  computed: {
    ...mapState(["carrito"]),
    formData1() {
      return this.carrito.find((p) => p.id == this.$route.params.id);
    },
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
