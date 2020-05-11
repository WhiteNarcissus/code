const greeter = require('./Greeter.js');
document.querySelector("#app").appendChild(greeter());

import Vue from "vue/dist/vue.js"

var vm = new Vue({
    el: "#app",
    //模型层 数据
    data: {
        msg: "test",
        change:"00000"
    },
    //所有页面 要使用的方法
    methods: {
        modify: function(){
            this.msg = "after test"
        }
    }


})