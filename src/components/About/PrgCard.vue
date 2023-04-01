<template>
    <div class="container">
        <h1 @click="count++">My title {{ count }}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Animi voluptate rem consequuntur accusantium 
            expedita ut assumenda dolorem temporibus omnis atque 
            ratione vero consectetur cumque, odit repudiandae enim, asperiores aspernatur nam!</p>
    </div>
</template>

<script>
export default {
    name:'prgCard',
    data(){
        return{
            count: 0,
        }
    }
}
</script>

<style scoped lang="scss">
    .container{
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        width: 40vw;
        margin: auto;
    }
    h1{
        font-size: 50px;
        color: red;
    }
    p{
            font-size: 14px;
        }
</style>