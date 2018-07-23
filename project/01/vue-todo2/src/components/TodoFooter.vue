<template>
  <div class="clearAllContainer">
    <button class="clearAllBtn" v-on:click="removeAll">Clear All</button>
  </div>
</template>

<script>
  export default{
    methods:{
      removeAll(){
        this.$emit('removeAll');
      }
    }
  }
</script>

<style>
.clearAllContainer{
    width: 8.5rem;
    height: 50px;
    line-height: 50px;
    background-color: #fff;
    border-radius: 5px;
    margin: 0 auto;
}
.clearAllBtn {
    display: block;
    width:100%;height:100%;
    margin-top:10px;
    color: #e20303;
    font-size:16px
}
</style>
