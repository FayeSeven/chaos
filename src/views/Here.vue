<template>
    <div>
        这里
        <div class="here"></div>
    </div>
</template>

<script>
    export default {
        name: "Here"
    }
</script>

<style scoped>
    .here{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: .3;
        background: linear-gradient(to right, rgb(69, 104, 220), rgb(176, 106, 179));
    }
</style>
