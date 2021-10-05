<template>
  <div class="smear big">
    <span
      class="overlay"
      :style="{
        'background-color': this.$attrs.color,
      }"
    ></span>
    <h3>{{ color }}</h3>
  </div>
</template>

<script>
export default {
  props: {},
  computed: {
    color() {
      console.log(this.$attrs);
      return this.$root.color;
    },
  },
  methods: {},
};
</script>

<style></style>
