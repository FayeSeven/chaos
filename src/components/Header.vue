<template>
    <header class="page-header">
        <section class="wrap">
            <h3><slot name="nav-title"></slot></h3>
            <div class="nav-left"><slot name="nav-left"></slot></div>
            <div class="nav-right"><slot name="nav-right"></slot></div>
        </section>
    </header>
</template>

<script>
    export default {
        name: 'head-module'
    }
</script>
