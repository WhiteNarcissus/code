const greeter = require('./Greeter.js');
document.querySelector("#app").appendChild(greeter());

import Vue from "vue/dist/vue.js"

import App from "./App.vue"

import VueRouter from "vue-router"
// 安装路由 
Vue.use(VueRouter)

var vm = new Vue({
    el: "#app",
    //模型层 数据
    data: {
       
    },
    //所有页面 要使用的方法
    methods: {
        modify: function(){
            this.msg = "after test"
        }
    },
    render:c=>c(App)

})