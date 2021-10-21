<template>
  <div>
    <section class="seo_features_one sec_pad">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-6">
            <div class="seo_features_img seo_features_img_two">
              <img
                class="img-fluid"
                src="https://i.imgur.com/A5DQh59.jpg"
                alt=""
              />
            </div>
          </div>
          <div class="col-12 col-lg-6 d-flex align-items-center">
            <div class="seo_features_content">
              <h2>Amigurumis hechos con amor</h2>
              <h6>
                What a plonker bamboozled so I said say what a load of rubbish
                owt to do with me haggle.
              </h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                ultricies sem et consectetur ultricies. Nunc viverra erat purus,
                vel tempor lacus posuere quis. Curabitur mattis risus vitae est
                tristique, nec commodo nunc faucibus. Curabitur fringilla
                lobortis mauris eu commodo. Nulla elementum accumsan lacus, a
                tincidunt diam sollicitudin in.
              </p>
              <v-btn
                @click="$router.push({ path: `/productos/` })"
                class="button mt-5"
                >Ver productos</v-btn
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="seo_features_one sec_pad pt-0">
      <div class="container">
        <div class="row flex-row-reverse">
          <div class="col-12 col-lg-6">
            <div class="seo_features_img seo_features_img_two">
              <img
                class="img-fluid"
                src="https://i.imgur.com/UNrUrt0.jpg"
                alt=""
              />
            </div>
          </div>
          <div class="col-12 col-lg-6 d-flex align-items-center">
            <div class="seo_features_content">
              <h2>Diseños de patrones</h2>
              <h6>
                What a plonker bamboozled so I said say what a load of rubbish
                owt to do with me haggle.
              </h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                ultricies sem et consectetur ultricies. Nunc viverra erat purus,
                vel tempor lacus posuere quis. Curabitur mattis risus vitae est
                tristique, nec commodo nunc faucibus. Curabitur fringilla
                lobortis mauris eu commodo. Nulla elementum accumsan lacus, a
                tincidunt diam sollicitudin in.
              </p>
              <v-btn
                @click="$router.push({ path: `/patrones/` })"
                class="button mt-5"
                >Ver patrones</v-btn
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "SectionCallToAction",
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1140px;
}

.sec_pad {
  padding: 5rem 0rem;
}

.containerSection {
  width: 100% !important;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.seo_features_content h2 {
  font-size: 30px;
  line-height: 40px;
  font-weight: 600;
  margin-bottom: 25px;
}

.seo_features_content h6 {
  font-size: 18px;
  font-weight: 400;
  color: #263b5e;
  line-height: 30px;
  margin-bottom: 35px;
}

.seo_features_content p {
  font-size: 16px;
  color: #6a7695;
  font-weight: 300;
}

.seo_features_content .seo_btn {
  margin-top: 40px;
}
</style>

