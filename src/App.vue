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
    background-color: rgb(237, 247, 255) ; 
  }
</style>