<template>
  <div
    class="smear"
    :style="(backgroundColor = {})"
    :class="{
      circle: circle,
      small: small,
    }"
    @focus="updateColor(color)"
    tabindex="1"
  >
    <span
      class="overlay"
      :style="{
        'background-color': color,
      }"
    ></span>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "black",
    },
    circle: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    getBackgroundCard() {
      return $store.state.productos;
    },
  },
  methods: {
    updateColor(color) {
      this.$root.color = color;
    },
  },
};
</script>

<style lang="scss" scoped>
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
  margin: auto;
  transition: all 0.3s ease;
  animation: fadeIn 1s ease;
  box-shadow: 0 0 0 1px #ccc;
  cursor: pointer;

  &.small {
    width: 28px;
    height: 28px;
  }

  &.big {
    width: 100vh;
    height: 50vh;
    cursor: default;
    box-shadow: none;

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
