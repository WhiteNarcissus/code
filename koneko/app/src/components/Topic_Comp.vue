<template>
  <div>
  <h1 v-model="msg">{{msg}} </h1>
  <input type="button" value="modify" @click="modify"> 
  </div>
</template>
<script>
export default {
data(){
return {
    msg:"单文件组件应用"
    };
},
 methods: {
            modify: function(){
                this.msg = "after test"
            }
        }
}
</script>
<style></style>
