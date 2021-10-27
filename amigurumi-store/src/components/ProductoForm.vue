<template>
  <v-form ref="form" @submit.prevent="handleFormSubmit">
    <v-layout>
      <v-text-field label="Nombre" v-model="formData.nombre" :rules="[$rules.required]"></v-text-field>
    </v-layout>
    <v-layout>
      <v-text-field label="URL de la Imagen" v-model="formData.imagen" :rules="[$rules.required]"></v-text-field>
    </v-layout>
     <v-layout>
      <v-text-field label="URL de la Imagen (blanco y negro)" v-model="formData['imagen-gris']" :rules="[$rules.required]"></v-text-field>
    </v-layout>
    <v-layout>
      <v-text-field label="ID" v-model="formData.id" :rules="[$rules.required]"></v-text-field>
    </v-layout>
    <v-layout>
      <v-text-field label="Precio SM" v-model="formData.precio.sm" :rules="[$rules.required]"></v-text-field>
    </v-layout>
     <v-layout>
      <v-text-field label="Precio MD" v-model="formData.precio.md" :rules="[$rules.required]"></v-text-field>
    </v-layout>
     <v-layout>
      <v-text-field label="Precio LG" v-model="formData.precio.lg" :rules="[$rules.required]"></v-text-field>
    </v-layout>
    <v-layout>
      <v-textarea outlined label="Descripción del producto" v-model="formData.descripcion" :rules="[$rules.required]"></v-textarea>
    </v-layout>
    <v-layout justify-space-between>
      <v-btn color="success" type="submit" :loading="loading">{{ mode === 'update' ? 'Actualizar' : 'Crear' }}</v-btn>
      <v-btn color="error" type="reset" @click="$refs.form.reset()" :loading="loading">Limpiar formulario</v-btn>
      <v-btn color="warning" type="button" @click="$refs.form.resetValidation()" :loading="loading"
        >Limpiar validacion</v-btn
      >
      <v-btn color="info" type="button" @click="$router.back()" :loading="loading" v-if="mode === 'update'"
        >Regresar</v-btn
      >
    </v-layout>
  </v-form>
</template>

<script>
const defaultProduct = () => ({
  nombre: null,
  imagen: null,
  ['imagen-gris']: null,
  id: null,
  precio:{
    sm: null,
    md: null,
    lg: null,
  },
  descripcion: null
})

export default {
  props: {
    producto: {
      type: Object,
      default: defaultProduct
    },
    mode: {
      type: String,
      default: 'update'
    }
  },
  data: () => ({
    formData: null,
    loading: false
  }),
  created() {
    this.formData = { ...this.producto }
  },
  mounted() {
    this.$refs.form.resetValidation()
  },
  methods: {
    handleFormSubmit() {
      if (this.$refs.form.validate()) {
        
        this.$emit('submit', { ...this.formData })
      }
    }
  }
}
</script>

<style></style>