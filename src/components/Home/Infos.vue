<template>
  <section id="featured-services" class="featured-services py-5 my-5">
    <div class="container" data-aos="fade-up">
      <div class="row">
        <div v-for="(item, index) in items" :key="index" :class="item.classes">
          <div
            class="icon-box col-md-12"
            data-aos="fade-up"
            :data-aos-delay="item.delay"
          >
            <div class="icon"><i :class="item.icon"></i></div>
            <h4 class="title">{{ item.title }}</h4>
            <p
              v-for="(description, idx) in item.descriptions"
              :key="idx"
              class="description"
            >
              {{ description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => {
    return {
      items: [
        {
          classes: "col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0",
          icon: "bi bi-clock",
          title: "Heures de travails",
          descriptions: ["Lundi - Vendredi", "9:00AM - 05:00PM"],
          delay: 100,
        },
        {
          classes: "col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0",
          icon: "bi bi-telephone",
          title: "Appelez nous",
          descriptions: ["+212 567684812", "+212 556768481"],
          delay: 200,
        },
        {
          classes: "col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0",
          icon: "bi bi-geo-alt",
          title: "Localisation",
          descriptions: ["Apt 19 Avenue Al Amal,", "Sale, Tabrikt"],
          delay: 300,
        },
        {
          classes: "col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0",
          icon: "bi bi-envelope-at",
          title: "E-mail",
          descriptions: ["info@example.com", "contact@example.com"],
          delay: 400,
        },
      ],
    };
  },
};
</script>

<style scoped>
.featured-services .icon-box {
  padding: 30px;
  position: relative;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 0 29px 0 rgba(68, 88, 144, 0.12);
  transition: all 0.3s ease-in-out;
  border-radius: 8px;
  z-index: 1;
}

.featured-services .icon-box::before {
  content: "";
  position: absolute;
  background: #d9f1f2;
  right: 0;
  left: 0;
  bottom: 0;
  top: 100%;
  transition: all 0.3s;
  z-index: -1;
}

.featured-services .icon-box:hover::before {
  background: #3fbbc0;
  top: 0;
  border-radius: 0px;
}

.featured-services .icon {
  margin-bottom: 15px;
}

.featured-services .icon i {
  font-size: 48px;
  line-height: 1;
  color: #3fbbc0;
  transition: all 0.3s ease-in-out;
}

.featured-services .title {
  font-weight: 700;
  margin-bottom: 15px;
  font-size: 18px;
}

.featured-services .title a {
  color: #111;
}

.featured-services .description {
  font-size: 15px;
  line-height: 28px;
  margin-bottom: 0;
}

.featured-services .icon-box:hover .title,
.featured-services .icon-box:hover .description {
  color: #fff;
}

.featured-services .icon-box:hover .icon i {
  color: #fff;
}
</style>
