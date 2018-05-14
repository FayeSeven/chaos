<style src="./assets/css/merge.css"></style>
<template>
    <div id="app">
        <img src="./assets/logo.png" class="app-img">
        <router-view :key="key"></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app',
        computed: {
            key(){
                return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date();
            }
        }
    }
</script>

<style scoped>
    #app{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .app-img{
        margin-top: .5rem;
    }
</style>
