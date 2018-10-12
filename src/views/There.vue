<template>
    <div class="page-there">
        <main>
            <section>
                <input type="text" v-model="inputValue">
                <button @click="handleBtnClick()">提交</button>
                <ul>
                    <li v-for="(item,index) in list" @click="handleItemClick(index)">{{item}}</li>
                    <!--<todo-item v-bind:content="item" v-for="item in list"></todo-item>-->
                </ul>
                <div :style="styleObj" @click="handleDivClick()">hello</div>
                <div>
                    <component :is="type"></component>
                    <button @click="handleBtnComponentClick()">change</button>
                </div>
            </section>

            <section>
                <div>
                    <transition name="fade">
                        <div v-if="show">hello word</div>
                    </transition>
                    <button @click="handleClick()">切换</button>
                </div>
                <!--<div>
                    &lt;!&ndash;animate.css&ndash;&gt;
                    <transition name="fade" enter-active-class="animated swing"
                                               leave-active-class="animated shake">
                        <div v-if="show">hello word</div>
                    </transition>
                    <button @click="handleClick()">切换</button>
                </div>-->
                <div>
                    <transition mode="out-in">
                        <div v-if="show" key="hello">hello word</div>
                        <div v-else key="bye">Bye word</div>
                    </transition>
                    <button @click="handleClick()">切换</button>
                </div>
                <div>
                    <transition-group>
                        <div v-for="item of list" :key="item.id">{{item.title}}</div>
                    </transition-group>
                    <button @click="handleBtnAddClick">add</button>
                </div>
            </section>

            <section>
                <div>
                    高精度时间:{{time.hrTime}}
                </div>
                <div>
                    <p>Date兼容：2018-10-08'是无法被各个浏览器中，使用new Date(str)来正确生成日期对象的。 正确的用法是'2018/10/08'.</p>
                    <p>Date.parse("2018-10-08 11:11:11") : {{date.hrDate}}</p>
                    <p>Date.parse("2018/10/08 11:11:11") : {{date.tiltDate}}</p>
                </div>
            </section>

            <section class="m-email">
                <h3> :valid :invalid选择器实例演示。</h3>
                <input type="email" value="support@exampel.com"/>
                <p>请输入非法 e-mail 地址，查看样式变化。</p>
            </section>
        </main>

        <foot-module></foot-module>
    </div>
</template>

<script>
    import FootModule from "../components/Footer";

    /*var TodoItem ={
        props: ['content'],
        template:" <li>{{content}}</li>"
    }*/
    export default {
        //push pop shift unshift splice sort reverse
        name: "There",
        data() {
            return {
                list: [],
                inputValue: '',
                styleObj: {
                    color: "red"
                },
                type: 'one',
                show: true,
                count: 0,
                time: {
                    hrTime: 0
                },
                date: {
                    hrDate: 0,
                    tiltDate: 0
                }
            };
        },
        mounted() {
            this.highResolutionTime();
        },
        methods: {
            highResolutionTime() {
                const timeStamp = performance.timeOrigin + performance.now();
                this.time.hrTime = new Date(timeStamp).toLocaleString();
                this.date.hrDate = Date.parse("2018-10-08 11:11:11");
                this.date.tiltDate = Date.parse("2018/10/08 11:11:11");
            },
            handleBtnClick() {
                this.list.push(this.inputValue);
                this.inputValue = '';
            },
            handleItemClick(index) {
                this.list.splice(index, 1);
            },
            handleDivClick() {
                this.styleObj.color = this.styleObj.color === "black" ? "red" : "black"
            },
            handleBtnComponentClick() {
                this.type = (this.type === 'one' ? 'two' : 'one');
            },
            handleClick() {
                this.show = this.show === false ? true : false;
            },
            handleBtnAddClick() {
                this.list.push({
                    id: this.count++,
                    title: 'hello word'
                })
            }
        },
        components: {
            // TodoItem,
            FootModule,
            one: {
                template: '<div v-once>one</div>'
            },
            two: {
                template: '<div v-once>two</div>'
            }
        }
    }
</script>

<style scoped>
    section{
        margin-bottom: .2rem;
    }
    /* .fade-enter,.fade-leave-to{
         opacity: 0;
     }
     .fade-enter-active,.fade-leave-active{
         transition: opacity 3s;
     }*/
    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }

    }

    .fade-enter-active {
        transform-origin: left center;
        animation: bounce-in 1s;
    }

    .fade-leave-active {
        transform-origin: left center;
        animation: bounce-in 1s reverse;
    }

    .v-enter, .v-leave-to {
        opacity: 0;
    }

    .v-enter-active, .v-leave-active {
        transition: opacity 3s;
    }

    .m-email > input[type=email]:valid {
        background-color: yellow;
    }

    .m-email > input[type=email]:invalid {
        background-color: red;
    }
</style>
