<template>
  <div class="home">
    <landing-vue/>
    <infos-vue></infos-vue>
  </div>
</template>

<script>
import LandingVue from '@/components/Home/LandingVue.vue';
import InfosVue from '../components/Home/Infos.vue';





export default {
    name: "HomeView",
    components: { LandingVue,InfosVue }
};
</script>
