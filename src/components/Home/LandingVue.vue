<template>
  <div>
    <section id="hero" class="d-flex align-items-center pb-5 mb-5">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h1>Ameliorer l'experience de reservation</h1>
            <h2>
              Prenez un rendez-vous avec une facon facile, simple et rapide
            </h2>
            <div class="d-flex justify-content-center justify-content-lg-start">
              <button class="btn btn-outline-success rounded-pill me-3" type="submit">
                <i class="bi bi-calendar4-week me-2"/>
                Reserver maintenant
                </button>
            </div>
          </div>
          <div
            class="col-lg-6 order-1 order-lg-2 hero-img"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <img
              src="@/assets/doctor_consultation_02-ai (1).png"
              class="img-fluid animated"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import "@/assets/sass/views/_landing.scss";
import ContactVue from './Contact.vue';

export default {
  name: "LandingVue",
  components: {ContactVue}
};
</script>
