<template>
  <div class="about">
    <h1>{{ pageTitle }}</h1>
    <p>{{pageParagraphe}}</p>
    <Users/>
  </div>
</template>


<script>
import Users from '@/components/About/Users.vue';



export default {
    name: "AboutView",
    data: function () {
        return {
            pageTitle: "About us",
            pageParagraphe: "This is about page"
        };
    },
    components: { Users },
};
</script>
