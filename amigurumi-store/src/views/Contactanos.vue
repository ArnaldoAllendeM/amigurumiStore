<template>
  <FormInput @submit="handleFormSubmit" />
</template>

<script>
import FormInput from "../components/FormInput.vue"
export default {
components:{
    FormInput,
},
methods: {
    async handleFormSubmit(dataForm) {
      try {
        const response = await this.$store.dispatch(
          "traerFormDataFromHome",
          dataForm
        );
        console.log({ response, dataForm });
        this.dialog = false;
      } catch (e) {
        console.error(e);
      }
    },
  },
}
</script>

<style>

</style>