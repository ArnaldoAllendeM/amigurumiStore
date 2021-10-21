<template>
  <v-container>
    <div class="text-center contacto">
      <h2 class="mt-10">Contactanos</h2>
      <h6 class="mb-0">
        Para tus consultas de sobre el servicio, amigurumis, patrones y otras
        consultas.
      </h6>
    </div>

    <!-- Formulario -->
    <v-card class="mx-auto my-10 p-5" tile>
      <v-form @submit.prevent="handleOnSubmit" ref="form">
        <v-text-field
          v-model="name"
          :counter="10"
          :rules="nameRules"
          label="Nombre"
          required
        ></v-text-field>

        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="Correo"
          required
        ></v-text-field>
        <v-textarea
          outlined
          auto-grow
          v-model="message"
          label="Ingrese su mensaje"
        ></v-textarea>

        <v-select
          v-model="subject"
          :items="items"
          :rules="[(v) => !!v || 'Item is required']"
          label="Seleccione opciones"
          required
        ></v-select>

        <v-btn
          type="submit"
          class="mt-5 text-white"
          height="2.5rem"
          width="10rem"
          color="#fe70aa"
        >
          Enviar
        </v-btn>
      </v-form>
    </v-card>

    <v-row class="mt-3 mb-6 px-2 d-flex justify-center">
      <v-col
        cols="12"
        md="3"
        class="pl-3 px-md-0 d-flex align-center justify-center"
      >
        <v-icon large color="#fe70aa">mdi-map-marker</v-icon>
        <span>Seminario #34, Colina.</span>
      </v-col>

      <v-col
        cols="12"
        md="3"
        class="pl-3 px-md-0 d-flex align-center justify-center"
      >
        <v-icon large color="#fe70aa">mdi-whatsapp</v-icon>
        <span>+569 3289515</span>
      </v-col>

      <v-col
        cols="12"
        md="3"
        class="pl-3 px-md-0 d-flex align-center justify-center"
      >
        <v-icon large color="#fe70aa"> mdi-email-outline</v-icon>
        <span>tiaximena@gmail.com</span>
      </v-col>

      <v-col
        cols="12"
        md="3"
        class="pl-3 px-md-0 d-flex align-center justify-center"
      >
        <v-icon large color="#fe70aa">mdi-instagram</v-icon>
        <span>amigurumi_chile</span>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "FormInput",
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
    message: "",
    subject: "",
  }),

  methods: {
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

.contacto h2 {
  font-size: 30px;
  line-height: 40px;
  font-weight: 600;
  margin-bottom: 25px;
}

.contacto h6 {
  font-size: 18px;
  font-weight: 400;
  color: #263b5e;
  line-height: 30px;
  margin-bottom: 35px;
}
</style>
