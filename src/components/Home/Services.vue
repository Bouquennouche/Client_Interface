<template>
<section id="services" class="services py-3">

<div class="container" data-aos="fade-up">

  <header class="section-header mb-5">
    <h2>Nos services</h2>
    <p>Decouvrir les differents service de notre cabinet</p>
  </header>

  <div class="row gy-4">

    <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
      <div class="service-box blue">
        <i class="bi bi-calendar-date icon"></i>
        <h3>Nesciunt Mete</h3>
        <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
      </div>
    </div>

    <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
      <div class="service-box orange">
        <i class="bi bi-heart-pulse icon"></i>
        <h3>Eosle Commodi</h3>
        <p>Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.</p>
      </div>
    </div>

    <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
      <div class="service-box green">
        <i class="bi bi-clipboard2-pulse icon"></i>
        <h3>Ledo Markt</h3>
        <p>Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.</p>
      </div>
    </div>

    <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
      <div class="service-box red">
        <i class="bi bi-capsule icon"></i>
        <h3>Asperiores Commodi</h3>
        <p>Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.</p>
      </div>
    </div>

    <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
      <div class="service-box purple">
        <i class="bi bi-lungs icon"></i>
        <h3>Velit Doloremque.</h3>
        <p>Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.</p>
      </div>
    </div>

    <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="700">
      <div class="service-box pink">
        <i class="bi bi-hospital icon"></i>
        <h3>Dolori Architecto</h3>
        <p>Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.</p>
      </div>
    </div>
  </div>

</div>
</section>


</template>

<script>
export default {
    name: 'Services',
}
</script>


<style scoped>
.section-header{
    text-align: center;
    color: #000000;
}

section{
    color: #000000;
}
.services .service-box {
  box-shadow: 0px 0 30px rgba(240, 246, 255, 0.08);
  height: 100%;
  padding: 20px 10px;
  text-align: center;
  transition: 0.3s;
  border-radius: 5px;
}

.services .service-box .icon {
  font-size: 36px;
  padding: 20px 20px;
  border-radius: 4px;
  position: relative;
  margin-bottom: 25px;
  display: inline-block;
  line-height: 0;
  transition: 0.3s;
}

.services .service-box h3 {
  color: #000000;
  font-weight: 700;
}

.services .service-box .read-more {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 16px;
  padding: 8px 20px;
}

.services .service-box .read-more i {
  line-height: 0;
  margin-left: 5px;
  font-size: 18px;
}

.services .service-box.blue {
  border-bottom: 3px solid #2db6fa;
}

.services .service-box.blue .icon {
  color: #2db6fa;
  background: #dbf3fe;
}

.services .service-box.blue .read-more {
  color: #2db6fa;
}

.services .service-box.blue:hover {
  background: #2db6fa;
}

.services .service-box.orange {
  border-bottom: 3px solid #f68c09;
}

.services .service-box.orange .icon {
  color: #f68c09;
  background: #fde3c4;
}

.services .service-box.orange .read-more {
  color: #f68c09;
}

.services .service-box.orange:hover {
  background: #f68c09;
}

.services .service-box.green {
  border-bottom: 3px solid #08da4e;
}

.services .service-box.green .icon {
  color: #08da4e;
  background: #cffddf;
}

.services .service-box.green .read-more {
  color: #08da4e;
}

.services .service-box.green:hover {
  background: #08da4e;
}

.services .service-box.red {
  border-bottom: 3px solid #e9222c;
}

.services .service-box.red .icon {
  color: #e9222c;
  background: #fde8e8;
}

.services .service-box.red .read-more {
  color: #e9222c;
}

.services .service-box.red:hover {
  background: #e9222c;
}

.services .service-box.purple {
  border-bottom: 3px solid #b50edf;
}

.services .service-box.purple .icon {
  color: #b50edf;
  background: #f8e4fd;
}

.services .service-box.purple .read-more {
  color: #b50edf;
}

.services .service-box.purple:hover {
  background: #b50edf;
}

.services .service-box.pink {
  border-bottom: 3px solid #f51f9c;
}

.services .service-box.pink .icon {
  color: #f51f9c;
  background: #feecf7;
}

.services .service-box.pink .read-more {
  color: #f51f9c;
}

.services .service-box.pink:hover {
  background: #f51f9c;
}

.services .service-box:hover h3,
.services .service-box:hover p,
.services .service-box:hover .read-more {
  color: #fff;
}

.services .service-box:hover .icon {
  background: #fff;
}
</style>

