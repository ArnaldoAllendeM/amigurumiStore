<template>
  <div class="slide d-none d-none d-lg-flex">
    <div class="ancestor" id="box-1">
      <div class="slide_text">
        <p id="tanya_text" v-if="!isHidden">        
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente mollitia, quisquam, vitae voluptate odio recusandae magnam ullam numquam nulla quos accusantium itaque ea eaque dolor ipsam, architecto ipsum rem dolorum!
        Eaque est ipsam facilis aliquam nemo incidunt officiis qui nostrum reiciendis quo tempore dicta quasi suscipit corporis, facere dolorum temporibus quia officia hic aut quaerat placeat similique sequi! Necessitatibus, obcaecati."

        </p>
        <p id="john_text" v-else>
         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa incidunt laborum autem voluptates sapiente neque exercitationem voluptatibus quidem sit modi, commodi possimus fuga a doloribus voluptate tempore harum magnam et!
         Nemo doloribus quae voluptatum, rerum sunt, laborum ea accusantium sequi, modi molestias quo earum. Et repellendus quia numquam aspernatur dolores. Repellendus quidem quisquam dolorum, officiis sint quaerat sed exercitationem explicabo."
        </p>
        <p class="name" v-if="!isHidden">
          Tanya Sinclair <span class="profession">UX Engineer</span>
        </p>
        <p class="name" v-else>
          John Tarkpor
          <span class="profession">Junior Front-end Developer</span>
        </p>
      </div>
      <div class="portrait">
        <img
          class="portrait_img"
          :src="images[Math.abs(currentNumber) % images.length]"
          alt="portrait_img"
        />
      </div>
      <div class="testimonialNav">
        <span @click="prev(), (isHidden = !isHidden)"
          ><img
            src="../../public/img/testimonial/icon-prev.svg"
            class="nav-left"
            alt="prev-img"
        /></span>
        <span @click="next(), (isHidden = !isHidden)"
          ><img
            src="../../public/img/testimonial/icon-next.svg"
            class="nav-right"
            alt="next-img"
        /></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    name: "Testimonials",
    isHidden: false,
    images: [
      "https://i.imgur.com/To338hS.jpg ",
      "https://i.imgur.com/uW4W6vO.jpg",
    ],
    currentNumber: 0,
  }),
  methods: {
    next: function () {
      this.currentNumber += 1;
    },
    prev: function () {
      this.currentNumber -= 1;
    },
  },
};
</script>

<style lang="scss" scoped>
.ancestor {
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
  grid-template-rows: auto;
  place-items: center;
  position: relative;
  padding: 80px;
}

.slide {
  background-image: url("../../public/img/testimonial/pattern-bg.svg"),
    url("../../public/img/testimonial/pattern-curve.svg");
  background-position: center right, left bottom, left top;
  background-repeat: no-repeat;
}

.slide_text {
  background-image: url("../../public/img/testimonial/pattern-quotes.svg");
  background-position: left top;
  background-repeat: no-repeat;
  grid-column: 1 / 3;
  position: relative;
  left: 100px;
}

#john_text,
#tanya_text {
  font-size: 2rem;
  margin-bottom: 20px;
}

.name,
.profession {
  font-weight: 700;
}

.profession {
  color: hsl(240, 18%, 77%);
}

.portrait_img {
  -webkit-box-shadow: 9px 10px 32px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 9px 10px 32px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 9px 10px 32px 0px rgba(0, 0, 0, 0.75);
}

.images {
  grid-column: 2 /4;
}

.testimonialNav {
  grid-column: 3 / 4;
  background-color: rgb(255, 255, 255);
  color: blue;
  padding: 1em;
  position: absolute;
  top: 86%;
  left: 11%;
  border-radius: 2rem;
  border: none;
  z-index: 30;
  cursor: pointer;
  padding: 1rem;
}

.nav-left,
.nav-right {
  padding: 0 20px 0 20px;
}

.slider-prev {
  padding-right: 1.5em;
}

.slider-next {
  padding-left: 1.5em;
}

.attribution {
  font-size: 11px;
  text-align: center;
}

.attribution a {
  color: hsl(228, 45%, 44%);
}

@media only screen and (max-width: 600px) {
  body {
    width: 100%;
  }

  .ancestor {
    display: grid;
    grid-template-columns: 2fr 1fr 2fr;
    grid-template-rows: auto auto;
    place-items: center;
  }

  .slide {
    background-image: url("../../public/img/testimonial/pattern-bg.svg"),
      url("../../public/img/testimonial/pattern-curve.svg");
    background-position: center top, left bottom, center;
    background-repeat: no-repeat;
  }

  .slide_text {
    background-image: url("../../public/img/testimonial/pattern-quotes.svg");
    background-position: left top;
    background-repeat: no-repeat;
    grid-column: 1 / 2;
    grid-row: 3/4;
  }

  #john_text,
  #tanya_text {
    font-size: 2rem;
    margin-bottom: 20px;
  }

  .name,
  .profession {
    font-weight: 700;
  }

  .profession {
    color: hsl(240, 18%, 77%);
  }

  .images {
    grid-column: 1 /2;
    grid-row: 1/2;
  }

  .portrait_photo {
    box-shadow: 18px 10px 36px 1px rgba(0, 0, 0, 0.75);
    box-shadow: -18px 10px 36px 1px rgba(0, 0, 0, 0.75);
    box-shadow: 18px 10px 36px 1px rgba(0, 0, 0, 0.75);
  }

  .testimonialNav {
    grid-column: 1 / 2;
    grid-row: 2/3;
    background-color: rgb(255, 255, 255);
    color: blue;
    padding: 1em;
    border-radius: 2rem;
    border: none;
    z-index: 30;
    cursor: pointer;
    padding: 1rem;
  }

  .nav-left,
  .nav-right {
    padding: 0 20px 0 20px;
  }

  .slider-prev {
    padding-right: 1.5em;
  }

  .slider-next {
    padding-left: 1.5em;
  }

  .attribution {
    font-size: 11px;
    text-align: center;
  }

  .attribution a {
    color: hsl(228, 45%, 44%);
  }
}

/* Small devices (tablets, 600px and up) */
@media only screen and (max-width: 900px) {
  .ancestor {
    display: grid;
    grid-template-columns: 2fr;
    grid-template-rows: auto auto;
    place-items: center;
    padding: 0;
  }

  .portrait_img {
    width: 200px;
    margin-top: 10px;
  }

  .slide {
    background-image: url("../../public/img/testimonial/pattern-bg.svg"),
      url("../../public/img/testimonial/pattern-curve.svg");
    background-position: top, left bottom;
    background-repeat: no-repeat;
    background-size: 300px, 100px;
  }

  .slide_text {
    background-image: url("../../public/img/testimonial/pattern-quotes.svg");
    background-position: center;
    background-repeat: no-repeat;
    grid-column: 1 / 2;
    grid-row: 3/4;
    position: relative;
    left: 0;
    text-align: center;
  }

  #john_text,
  #tanya_text {
    font-size: 2rem;
    margin-bottom: 0;
  }

  .name,
  .profession {
    font-weight: 700;
  }

  .profession {
    color: hsl(240, 18%, 77%);
  }

  .images {
    grid-column: 1 /2;
    grid-row: 1/2;
  }

  .portrait_photo {
    box-shadow: 18px 10px 36px 1px rgba(0, 0, 0, 0.75);
  }

  .testimonialNav {
    grid-column: 1 / 2;
    grid-row: 2/3;
    background-color: rgb(255, 255, 255);
    color: var(--dark-blue);
    padding: 1em;
    border-radius: 2rem;
    border: none;
    z-index: 30;
    cursor: pointer;
    padding: 1rem;
    position: relative;
    top: -26px;
    left: 0;
  }

  .nav-left,
  .nav-right {
    padding: 0 20px 0 20px;
  }

  .slider-prev {
    padding-right: 1.5em;
  }

  .slider-next {
    padding-left: 1.5em;
  }

  .attribution {
    font-size: 11px;
    text-align: center;
  }

  .attribution a {
    color: hsl(228, 45%, 44%);
  }
}
</style>