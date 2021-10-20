<template>
<div>
  <v-data-table dense :items="this.$store.state.productos" :headers="headers">
    <template v-slot:[`item.nombre`]="{ item }">
      {{ item.nombre.toLocaleString() }}
    </template>
    <template v-slot:[`item.id`]="{ item }">
      {{ item.id.toLocaleString() }}
    </template>
    <template v-slot:[`item.imagen`]="{ item }">
      {{ item.imagen.toLocaleString() }}
    </template>
    <template v-slot:[`item.descripcion`]="{ item }">
      {{ item.descripcion.toLocaleString() }}
    </template>
     <template v-slot:[`item.actions`]="{ item }">
          <v-btn icon @click="editarItemAmigurumis(item)">
            <EditarProducto />
          <v-icon>mdi-pencil-outline</v-icon>
        </v-btn> 
      <v-btn icon @click="borrarItemAmigurumis(item)">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
    </template>
  </v-data-table>

  <v-data-table dense :items="this.$store.state.patrones" :headers="headers">
    <template v-slot:[`item.nombre`]="{ item }">
      {{ item.nombre.toLocaleString() }}
    </template>
    <template v-slot:[`item.id`]="{ item }">
      {{ item.id.toLocaleString() }}
    </template>
    <template v-slot:[`item.imagen`]="{ item }">
      {{ item.imagen.toLocaleString() }}
    </template>
    <template v-slot:[`item.descripcion`]="{ item }">
      {{ item.descripcion.toLocaleString() }}
    </template>
    <template v-slot:[`item.actions`]="{ item }">    
      <v-btn icon @click="editarItemPatrones(item)">
          <v-icon >mdi-pencil-outline</v-icon>
        </v-btn>  
      <v-btn icon @click="borrarItemPatrones(item)">        
          <v-icon>mdi-delete</v-icon>
        </v-btn>
    </template>
  </v-data-table>
</div>
</template>

<script>
import EditarProducto from "../components/EditarProducto.vue"
export default {
data: () => ({
    headers: [
      { text: 'Nombre', value: 'nombre' },
      {
        text: 'Id',
        value: 'id'
      },
      {
        text: 'Imagen',
        value: 'imagen'
      },
      {
        text: 'Descripción',
        value: 'descripcion'
      },
      {
        text: 'Acciones',
        value: 'actions'
      },
    ]
  }),
  components:{
EditarProducto,
  },
  methods: {
    editarItemPatrones(item) {
      console.log(item)
    },
    editarItemAmigurumis(item) {
      console.log(item)
    },
    
    borrarItemPatrones(item) {
    //  prompt('Desea borrar el elemento?')
     console.log(item);
      this.$store.dispatch('borrarPatrones', item)
    },
     borrarItemAmigurumis(item) {
    //  prompt('Desea borrar el elemento?')
     console.log(item);
      this.$store.dispatch('borrarAmigurumis', item)
    }
  }
}
</script>

<style>

</style>