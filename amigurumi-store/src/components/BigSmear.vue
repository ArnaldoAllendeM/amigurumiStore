<template>

  <div
    class="smear big"
    :style="{
      'background-image': 'url(' + this.$attrs.producto['imagen-gris'] + ')',
    }"
  >
    <span
      class="overlay"
      :style="{
        'background-color': this.$attrs.color,
      }"
    ></span>
    <h3>{{ productoEnVista2 }}</h3>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  props: {},
  computed: {
    ...mapGetters(["getProduct"]),
    productoEnVista2() {
      console.log(this.getProduct);
      return this.getProduct.imagen;
    },
  },
  methods: {
    ...mapState(["productoEnVista"]),
  },
};
</script>

<style lang="scss">
.smear {
  // background-image: url("https://m.media-amazon.com/images/I/7101fA5PhYL._AC_UL320_.jpg");
  // filter: grayscale(100%);
}

.overlay {
  /**
   * this is the magic; overlay blend mode!!
   */
  mix-blend-mode: overlay;
  transition: all 2s ease;
}

.smear {
  position: relative;
  display: inline-block;
  width: 42px;
  height: 42px;
  background-size: cover;
  background-color: white;
  background-repeat: no-repeat;
  margin: 5px 2px;
  transition: all 0.3s ease;
  animation: fadeIn 1s ease;
  box-shadow: 0 0 0 1px #ccc;
  cursor: pointer;

  &.small {
    width: 28px;
    height: 28px;
  }

  &.big {
    cursor: default;
    box-shadow: none;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 300px;
  background-size: contain;
  background-position:center;
    h3 {
      margin-top: -10px;
      text-shadow: 0px 2px 0 white;
    }
  }

  &.circle {
    border-radius: 100px;
    box-shadow: 0 0 0 1px #ccc, 0 0 0 2px white inset;
    background-position: 2px 0px;
    overflow: hidden;

    &:hover {
      box-shadow: 0 0 0 2px black, 0 0 0 3px white inset;
    }

    &.small {
      background-position: 1px;
    }
  }

  &:focus {
    box-shadow: 0 0 0 2px black, 0 0 0 3px white inset;
    outline: none;
  }
}

.overlay {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>

