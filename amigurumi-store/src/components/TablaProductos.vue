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
  </v-data-table>
</div>
</template>

<script>
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
    ]
  }),
}
</script>

<style>

</style>