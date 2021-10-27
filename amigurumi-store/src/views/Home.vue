<template>
  <div>
    <!-- comentario para un commit y pullcito (borrame) -->
    <Carrousel />
    <SectionCallToAction />
    <v-col cols="12" class="pr-md-9 d-flex align-center justify-center">
      <ApiClima />
    </v-col>
    <Testimonials mobile-breakpoint="sm"/>
  </div>
</template>

<script>
import Carrousel from "../components/Carrousel.vue";
import ApiClima from "../components/ApiClima.vue";
import SectionCallToAction from "../components/SectionCallToAction.vue";
import Testimonials from "../components/Testimonials.vue";
export default {
  data: () => ({
    name: "Home",
  }),
  components: {
    Carrousel,
    ApiClima,
    SectionCallToAction,
    Testimonials,
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
};
</script>
<style scoped>
.contenedor-titulo {
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 700px;
  max-height: 700px;
  margin: 2em auto;
  text-align: center;
  padding: 1rem;
}
.titulo-h2 {
  margin-bottom: 1rem;
}

.title-desc {
  font-size: 1.5rem;
  color: #666666;
  line-height: 1.7em;
  font-weight: 300;
  margin-bottom: 0;
}
</style>
