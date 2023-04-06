<template>
  <div>
    <section id="hero" class="d-flex align-items-center">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h1>Ameliorer l'experience de reservation</h1>
            <h2>Prenez un rendez-vous d'une facon facile, simple et rapide</h2>
            <div class="d-flex justify-content-center justify-content-lg-start">
              <router-link to="/reservation">
                <button
                  class="btn btn-primary rounded-pill me-3 px-3 py-2"
                  type="submit"
                  to="/reservation"
                >
                  <i class="bi bi-calendar4-week me-2" />
                  Reserver maintenant
                </button>
              </router-link>
            </div>
          </div>
          <div
            class="col-lg-6 order-1 order-lg-2 hero-img"
            data-aos="zoom-in"
            data-aos-delay="200"
          ></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import "@/assets/sass/views/_landing.scss";
import ContactVue from "./Contact.vue";

export default {
  name: "LandingVue",
  components: { ContactVue },
};
</script>

<style lang="scss" scoped>
h1,
h2 {
  color: white !important;
}
#hero {
  background-image: url("@/assets/imgs/bg.jpeg") !important;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: -100px;
  min-height: 90vh !important;
}
</style>
