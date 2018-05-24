<template>
    <div class="page-here">
        <div class="mode-here"></div>
        <div>
            <!--在使用了 vue-router 的应用中，路由对象会被注入每个组件中，赋值为 this.$route ，并且当路由切换时，路由对象会被更新。

            路由对象暴露了以下属性：

            $route.path
            字符串，等于当前路由对象的路径，会被解析为绝对路径，如 "/home/news" 。
            $route.params
            对象，包含路由中的动态片段和全匹配片段的键值对
            $route.query
            对象，包含路由中查询参数的键值对。例如，对于 /home/news/detail/01?favorite=yes ，会得到 $route.query.favorite == 'yes' 。
            $route.router
            路由规则所属的路由器（以及其所属的组件）。
            $route.matched
            数组，包含当前匹配的路径中所包含的所有片段所对应的配置参数对象。
            $route.name
            当前路径的名字，如果没有使用具名路径，则名字为空。-->
            <p>当前路径：{{$route.path}}</p>
            <p>当前参数：{{$route.params | json}}</p>
            <p>路由名称：{{$route.name}}</p>
            <p>路由查询参数：{{$route.query | json}}</p>
            <!--<p>路由匹配项：{{$route.matched | json}}</p>-->
        </div>
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
