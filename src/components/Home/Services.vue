<template>
<section id="services" class="services pt-4">

<div class="container" data-aos="fade-up">

  <header class="section-header mb-5 ">
    <h2>Nos services</h2>
    <p>Decouvrir les differents service de notre cabinet</p>
  </header>

  <div class="row gy-4 pb-5">

    <div class="col-lg-4 col-md-6 " data-aos="fade-up" data-aos-delay="200">
      <div class="service-box blue">
        <i class="bi bi-calendar-date icon"></i>
        <h3 class="mb-2">Implants dentaires</h3>
        <p>Les implants dentaires sont des dispositifs chirurgicaux qui remplacent les racines 
          des dents manquantes et permettent de fixer des dents de remplacement (prothèses dentaires).</p>
      </div>
    </div>
    <div class="col-lg-4 col-md-6 " data-aos="fade-up" data-aos-delay="200">
      <div class="service-box blue">
        <i class="bi bi-eraser icon"></i>
        <h3 class="mb-2">Extraction de dents</h3>
        <p>Extraire les dents endommagées ou infectées qui ne peuvent pas être sauvées avec d'autres traitements.</p>
      </div>
    </div>
    <div class="col-lg-4 col-md-6 " data-aos="fade-up" data-aos-delay="200">
      <div class="service-box blue">
        <i class="bi bi-calendar-date icon"></i>
        <h3 class="mb-2">Blanchiment des dents</h3>
        <p>blanchir les dents en utilisant des techniques de blanchiment professionnels pour éliminer les taches et rendre les dents plus blanches.</p>
      </div>
    </div>
    <div class="col-lg-4 col-md-6 " data-aos="fade-up" data-aos-delay="200">
      <div class="service-box blue">
        <i class="bi bi-calendar-date icon"></i>
        <h3 class="mb-2">Nettoyages dentaires</h3>
        <p>Les nettoyages dentaires professionnels éliminent la plaque et le tartre qui s'accumulent sur les dents, </p>
      </div>
    </div>
    <div class="col-lg-4 col-md-6 " data-aos="fade-up" data-aos-delay="200">
      <div class="service-box blue">
        <i class="bi bi-calendar-date icon"></i>
        <h3 class="mb-2">Traitement de la douleur</h3>
        <p>traiter la douleur causée par les infections dentaires, les dents cassées ou les dents de sagesse qui poussent de travers.</p>
      </div>
    </div>
    <div class="col-lg-4 col-md-6 " data-aos="fade-up" data-aos-delay="200">
      <div class="service-box blue">
        <i class="bi bi-calendar-date icon"></i>
        <h3>Orthodontie</h3>
        <p>Les traitements orthodontiques, tels que les appareils 
          dentaires, peuvent être utilisés pour corriger les problèmes de mauvaise occlusion, 
          d'espacement dentaire et d'alignement des dents.</p>
      </div>
    </div>

    
  </div>

</div>
</section>


</template>

<script>
export default {
    name: 'Services',
    data:function(){
      return{
      }
    },
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
  border-bottom: 3px solid #3c85d8;
}

.services .service-box.blue .icon {
  color: #3c85d8;
  background: #dbf3fe;
}

.services .service-box.blue .read-more {
  color: #3c85d8;
}

.services .service-box.blue:hover {
  background: #3c85d8;
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

