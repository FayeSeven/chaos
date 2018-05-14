<template>
    <footer class="page-footer">
        <nav class="wrap">
            <ul>
                <li>
                    <router-link to="/index" class="home">
                        <span class="iconfont">&#xe600;</span>
                        <div>首页</div>
                    </router-link>
                </li>
                <li>
                    <router-link to="/here" class="here">
                        <span class="iconfont">&#xe601;</span>
                        <div>这里</div>
                    </router-link>
                </li>
                <li>
                    <router-link to="/there" class="there">
                        <span class="iconfont">&#xe602;</span>
                        <div>那里</div>
                    </router-link>
                </li>
            </ul>
        </nav>
    </footer>
</template>

<script>
    export default {
        name: 'foot-module',
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .page-footer {
        height: 0.5rem;
    }

    .page-footer .wrap {
        position: fixed;
        width: 100%;
        height: 0.5rem;
        bottom: 0;
        left: 0;
        background: #444A5A;
        z-index: 100;
    }

    .page-footer .wrap > ul {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .page-footer .wrap > ul > li {
        flex: 1;
        text-align: center;
    }

    .page-footer .wrap > ul > li > a {
        display: inline-block;
        height: 0.5rem;
        color: #7c8193;
        font-size: 0.12rem;
    }

    .page-footer .wrap > ul > li > a > span {
        display: inline-block;
        line-height: 1;
        font-size: 0.24rem;
        padding-top: 0.05rem;
    }

    .page-home .page-footer .home,
    .page-here .page-footer .here,
    .page-there .page-footer .there{
        color: #FFFFFF;
    }

</style>
