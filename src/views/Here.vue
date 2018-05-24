<template>
    <div class="page-here">
        <div class="mode-here"></div>
        <foot-module></foot-module>
    </div>
</template>

<script>
    import FootModule from "../components/Footer";

    export default {
        name: "Here",
        components: {
            FootModule,
        }
    }
</script>

<style scoped>
    .mode-here{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: .3;
        background: linear-gradient(to right, rgb(69, 104, 220), rgb(176, 106, 179));
    }
</style>
