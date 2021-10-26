<template>
  <v-card
    class="mx-auto"
    max-width="600"
    tile
  >
    

    <v-list-item two-line v-for="(item, index) in items" :key="index">
      <v-list-item-content>
        <v-list-item-title >
          
          Pedido de: {{`${item.customer.nombre}
          `}} 
          Correo:   
    {{`
    ${item.customer.correo}
    `}}
    Teléfono: 
    {{item.customer.telefono}}
    </v-list-item-title>
        <v-list-item-subtitle  v-for="(item,index) in item.productos" :key="item.id">
          {{index+1}}. {{item.nombre}} Cantidad: {{item.cantidad}} Precio: {{item.precio}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

  </v-card>
</template>

<script>
import Firebase from 'firebase'
 export default {
    data () {
      return {
        index:null,
        items:[{
          customer:{
            correo:null,
            nombre:null,
            telefono:null,
          },
          productos:{
            cantidad:null,
            color:null,
            id:null,
            imagen:null,
            precio:null,
            size:null,
          }
        }],
        expanded: [],
        singleExpand: false,
        dessertHeaders: [
          {
            text: 'Dessert (100g serving)',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' },
          { text: '', value: 'data-table-expand' },
        ],
      }
    },
    mounted() {
       Firebase.firestore()
        .collection("pedidos")
        .get()
        .then((querySnapshot) => {
          let pedidos = [];
          querySnapshot.forEach(
            (doc) => pedidos.push({ uuid: doc.id, ...doc.data() }),
            console.log(pedidos),
            this.items=pedidos
          );
        });
  },
    methods:{
   
  }}
</script>

<style>
.v-card{
  margin-bottom: 3rem;
}
</style>