<template>
  <div>
    <Carrousel />
    <div class="contenedor-titulo">
      <h2 class="titulo-h2">Productos</h2>
      <p class="title-desc">
        Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris
        sit amet orci.
      </p>
    </div>

    <v-row class="p-5">
      <v-col
        v-for="producto in $store.state.productos"
        :key="producto.id"
        class="col-12 col-sm-12 col-md-6 col-lg-3"
      >
        <CharacterCard
          :producto="producto"
          @click="$router.push({ path: `/detalle/${$event.id}` })"
        />
      </v-col>
    </v-row>
    <ApiClima />
    <Form />
  </div>
</template>

<script>
import Carrousel from "../components/Carrousel.vue";
import CharacterCard from "../components/CharacterCard.vue";
import ApiClima from "../components/ApiClima.vue";
import Form from "../components/Form.vue";
export default {
  data: () => ({
    name: "Home",
  }),
  components: {
    Carrousel,
    Form,
    ApiClima,
    CharacterCard,
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
