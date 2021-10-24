<template>
<div>
<ul>
  <li v-for="(item, index) in items" :key="index">
    {{item.customer.nombre}}
    {{item.customer.correo}}
    {{item.customer.telefono}}
    
    <ul>
      <li v-for="(item,index) in item.productos" :key="item.id">
 {{index}}. {{item.nombre}} {{item.cantidad}} {{item.precio}} 
      </li>
    </ul>
  </li>
</ul>
  <v-data-table
    :headers="dessertHeaders"
    :items="items"
    :single-expand="singleExpand"
    :expanded.sync="expanded"
    item-key="name"
    show-expand
    class="elevation-1"
  >
<h1></h1>
     <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>Expandable Table</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-switch v-model="singleExpand" label="Single expand" class="mt-2"></v-switch>
        </v-toolbar>
      </template>
    <template v-slot:expanded-item="{ headers, item }">
      <td :colspan="headers.length" v-for="(item,index) in item.productos" :key="item.id"> 
        {{index}}. {{item.nombre}} {{item.cantidad}} {{item.precio}} 
      </td>
      <td :colspan="headers.length">{{ item.customer.nombre }}
      </td>
      <td :colspan="headers.length">{{ item.customer.telefono }}
      </td>
      <td :colspan="headers.length">{{ item.productos.cantidad }}
      </td>
<li v-for="(item, index) in item.productos" :key="item.id">
    {{index}}. {{item.nombre}} {{item.cantidad}} {{item.precio}}
</li>
    </template>
   
    </v-data-table>
</div>
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

</style>