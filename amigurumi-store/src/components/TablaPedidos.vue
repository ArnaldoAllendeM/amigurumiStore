<template>
  <v-data-table
    :headers="dessertHeaders"
    :items="this.items"
    :single-expand="singleExpand"
    :expanded.sync="expanded"
    item-key="name"
    show-expand
    class="elevation-1"
  >
<h1></h1>
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Expandable Table{{items}}</v-toolbar-title>
        
        <v-spacer></v-spacer>
        <v-switch
          v-model="singleExpand"
          label="Single expand"
          class="mt-2"
        ></v-switch>
      </v-toolbar>
    </template>
    <template v-slot:expanded-item="{ headers, item }">
      <td :colspan="headers.length">{{ item.customer.correo }}
      </td>
      <td :colspan="headers.length">{{ item.customer.nombre }}
      </td>
      <td :colspan="headers.length">{{ item.customer.telefono }}
      </td>
      <td :colspan="headers.length">{{ item.productos.cantidad }}
      </td>
    </template>
  </v-data-table>
</template>

<script>
import Firebase from 'firebase'
 export default {
    data () {
      return {
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