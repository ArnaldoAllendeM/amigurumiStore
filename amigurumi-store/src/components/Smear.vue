<template>
  <div
    class="smear"
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
  computed: {},
  methods: {
    updateColor(color) {
      this.$root.color = color;
    },
  },
};

// Filters.grayscale = function(pixels, args) {
//   var d = pixels.data;
//   for (var i=0; i<d.length; i+=4) {
//     var r = d[i];
//     var g = d[i+1];
//     var b = d[i+2];
//     // CIE luminance for the RGB
//     // The human eye is bad at seeing red and blue, so we de-emphasize them.
//     var v = 0.2126*r + 0.7152*g + 0.0722*b;
//     d[i] = d[i+1] = d[i+2] = v
//   }
//   return pixels;
// };
</script>

<style lang="scss">
.smear {
  background-image: url("https://thumbs.dreamstime.com/z/amigurumi-crochet-knit-green-pear-isolated-white-background-39929997.jpg");
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
    width: 300px;
    height: 300px;
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
