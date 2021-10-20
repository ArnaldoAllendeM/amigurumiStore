<template>
  <v-carousel cycle hide-delimiters :show-arrows-on-hover="true" height="600">
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  data() {
    return {
      name: "Carrousel",
      items: [
        {
          src: "https://i.imgur.com/XG8klYN.jpg",
        },
        {
          src: "https://i.imgur.com/8QXbrEP.jpg",
        },
        {
          src: "https://i.imgur.com/7w2Lb5o.jpg",
        },
      ],
    };
  },
};
</script>
<style>
/* .v-icon{
  visibility: hidden !important;
} */
</style>
