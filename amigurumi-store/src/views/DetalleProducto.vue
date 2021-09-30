<template>
 <div>
   <!-- <span>
   {{getProductDetail(this.$route.params.id)}}
   </span> -->
    <h1>Hola {{this.$route.params.id}}</h1>
  <!-- <CharacterCard  :producto="producto" /> -->
  <h1>{{producto.nombre}}</h1>
  <img :src="producto.imagen"/>
  <h1>{{producto.id}}</h1>
   </div> 
</template>

<script>
import CharacterCard from '../components/CharacterCard.vue';
// import {mapGetters} from "vuex";
export default {
  component: { CharacterCard },
  data: () => ({
    producto: null,    
      data:{
        detail:{},
      },    
  }),
  mounted() {
    const producto = this.$store.state.productos.find(
      (producto) => producto.id === Number.parseInt(this.$route.params.id)
    )
    this.producto = producto
  },
  // computed:{
  //   ...mapGetters(["getProductDetail"]),
  // }
}
</script>

<style></style>
