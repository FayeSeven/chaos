<template>
    <div class="page-home">
        <head-module>
            <template slot="nav-title">股票期权宝</template>
            <div slot="nav-left">
                <router-link to="/ask">客服</router-link>
            </div>
            <div slot="nav-right">
                <router-link to="/guide">新手？</router-link>
            </div>
        </head-module>
        <swipe class="my-swipe">
            <swipe-item class="slide1">Slide1</swipe-item>
            <swipe-item class="slide2">Slide2</swipe-item>
            <swipe-item class="slide3">Slide3</swipe-item>
        </swipe>
        <button v-on:click="warn('Form cannot be submitted yet.', $event)">
            Submit
        </button>
        <!-- 阻止单击事件继续传播 -->
        <a v-on:click.stop="doThis"></a>

        <!-- 提交事件不再重载页面 -->
        <form v-on:submit.prevent="onSubmit"></form>

        <!-- 修饰符可以串联 -->
        <a v-on:click.stop.prevent="doThat"></a>

        <!-- 只有修饰符 -->
        <form v-on:submit.prevent></form>

        <!-- 添加事件监听器时使用事件捕获模式 -->
        <!-- 即元素自身触发的事件先在此处处理，然后才交由内部元素进行处理 -->
        <div v-on:click.capture="doThis">...</div>

        <!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
        <!-- 即事件不是从内部元素触发的 -->
        <div v-on:click.self="doThat">...</div>
        <a v-on:click.once="doThis">444</a>

        <foot-module></foot-module>
    </div>
</template>

<script>
    import { Swipe, SwipeItem } from 'vue-swipe';
    import FootModule from "../components/Footer";
    import HeadModule from "../components/Header";
    export default {
        name: "index",
        methods: {
            warn: function (message, event) {
                // 现在我们可以访问原生事件对象
                if (event) event.preventDefault()
                alert(message);
            },doThis: function () {
                alert("aaa");
            }
        },
        components: {
            swipe: Swipe,
            swipeItem: SwipeItem,
            HeadModule,
            FootModule
        }
    }
</script>

<style scoped>
    .my-swipe {
        width: 300px;
        height: 200px;
        color: #fff;
        font-size: 30px;
        text-align: center;
    }
    .slide1 {
        background-color: #0089dc;
        color: #fff;
    }
    .slide2 {
        background-color: #ffd705;
        color: #000;
    }
    .slide3 {
        background-color: #ff2d4b;
        color: #fff;
    }
</style>
