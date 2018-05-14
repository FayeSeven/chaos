<template>
    <div class="page-there">
        <input type="text" v-model="inputValue">
        <button @click="handleBtnClick()">提交</button>
        <ul>
            <li v-for="(item,index) in list" @click="handleItemClick(index)">{{item}}</li>
            <!--<todo-item v-bind:content="item" v-for="item in list"></todo-item>-->
        </ul>
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
        name: "There",
        data(){
            return {
                list:[],
                inputValue:''
            };
        },
        methods: {
            handleBtnClick() {
                this.list.push(this.inputValue);
                this.inputValue = '';
            },
            handleItemClick(index) {
                this.list.splice(index,1);
            }
        },
        components: {
            // TodoItem,
            FootModule
        }
    }
</script>

<style scoped>

</style>
