<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12"> <AdminForm @submit="loginHandler" /></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import AdminForm from "../components/AdminForm.vue";
export default {
  components: { AdminForm },
  methods: {
    async loginHandler(credentials) {
      try {
        await this.$store.dispatch("login", credentials);
        this.$router.push("/admin");
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>

<style></style>
