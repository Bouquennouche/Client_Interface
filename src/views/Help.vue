<template>
  <div class="containner">
    <Services/>
    </div> 
</template>

<script>
import Services from '@/components/Home/Services.vue';

export default {
    name: "Help",
    data: function () {
        return {
            pageTitle: "Help",
            pageParagraphe: "This is Help page",
        };
    },
    components: { Services }
};
</script>
