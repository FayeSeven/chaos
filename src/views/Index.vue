<template>
    <div class="page-home">
        <head-module>
            <!--
            1.to 相当于a标签中的"herf"属性，后面跟跳转链接所用
            2.replace 在routre-link标签中添加后，页面切换时不会留下历史记录
            3.tag 具有tag属性的router-link会被渲染成相应的标签
            4.active-class 这个属性是设置激活链接时class属性，也就是当前页面所有与当前地址所匹配的的链接都会被添加class属性
            5.exact 开启router-link的严格模式
            eg:<router-link :to="/home" tag="li" active-class="u-link--Active" replace>Home</router-link>
            <router-link :to="/" exact>home</router-link>
            -->
            <template slot="nav-title">杂七杂八</template>
            <div slot="nav-left">
                <router-link to="/left">左边</router-link>
            </div>
            <div slot="nav-right">
                <router-link to="/right">右边</router-link>
            </div>
        </head-module>

        <main>
            <section>
                <swipe class="my-swipe">
                    <swipe-item class="slide1">Slide1</swipe-item>
                    <swipe-item class="slide2">Slide2</swipe-item>
                    <swipe-item class="slide3">Slide3</swipe-item>
                </swipe>
                <button v-on:click="warn('Form cannot be submitted yet.', $event)" class="box">
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
            </section>
        </main>

        <foot-module></foot-module>
    </div>
</template>

<script>
    import {Swipe, SwipeItem} from 'vue-swipe';
    import FootModule from "../components/Footer";
    import HeadModule from "../components/Header";

    export default {
        name: "index",
        methods: {
            warn: function (message, event) {
                // 现在我们可以访问原生事件对象
                if (event) event.preventDefault()
                alert(message);
            }, doThis: function () {
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
        width: 3rem;
        height: 2rem;
        color: #fff;
        font-size: .3rem;
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

    .box {
        height: .4rem;
        width: 1rem;
        border-radius: 5%;
        background: linear-gradient(45deg, rgb(31, 89, 146), rgb(35, 175, 230), rgb(29, 136, 203));
    }
</style>
