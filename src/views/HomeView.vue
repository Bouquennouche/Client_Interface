<template>
  <div class="home">
    <landing-vue/>
    <infos-vue></infos-vue>
    <evaluer-vue></evaluer-vue>
  </div>
</template>

<script>
import LandingVue from '@/components/Home/LandingVue.vue';
import InfosVue from '../components/Home/Infos.vue';
import EvaluerVue from '../components/Home/Evaluer.vue';





export default {
    name: "HomeView",
    components: { LandingVue,InfosVue,EvaluerVue }
};
</script>



