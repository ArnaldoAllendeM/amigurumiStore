<template>
  <v-container>
    <v-form @submit.prevent="handleOnSubmit" ref="form">
      <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="Name"
        required
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>
      <v-textarea
          outlined
          auto-grow
          v-model="message"
          label="Outlined textarea"
        ></v-textarea>

      <v-select
        v-model="subject"
        :items="items"
        :rules="[(v) => !!v || 'Item is required']"
        label="Item"
        required
      ></v-select>     

      <v-btn type="submit" color="success" class="mr-4">
        Enviar
      </v-btn>

    </v-form>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    select: null,
    items: ["Contacto", "Problema con tu compra", "Sugerencias", "Otros"],    
    message:"",
    subject: "",
  }),

  methods: { 
    handleOnSubmit() {
      if (this.$refs.form.validate()) {
        this.$emit('submit', { email: this.email, name: this.name, message: this.message, subject: this.subject })
      }
    }
  },
};
</script>

<style lang="scss">
.button {
  background: #e74f8a !important;
  color: #ffff !important;
  text-decoration: none;
  text-transform: uppercase;
  &:hover {
    background: #fb96bf !important;
    color: #fff;
  }
}
</style>
