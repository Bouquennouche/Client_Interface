<template>
  <div id="app">
    <nav-bar/>
    <router-view/>
    <footer-vue/>
  </div>
</template>

<script>
import NavBar from './components/Header & Footer/NavBar.vue';
import FooterVue from './components/Header & Footer/FooterVue.vue';

export default {
  name: 'App',
  components:{
    NavBar,
    FooterVue,
  },
}
</script>

<style scoped>
  #app{
    background: #076585;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #fff, #87bcce);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #fff, #99d2e5); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  }
</style>