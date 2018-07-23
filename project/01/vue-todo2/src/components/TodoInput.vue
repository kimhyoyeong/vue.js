<template>
    <router-link to="/TodoView" class="addContainer">
      <i class="addBtn fa fa-plus" aria-hidden="true"></i> 일정 등록하기
    </router-link>


</template>

<script>
  export default{

  }
</script>

<style scoped>

.addContainer{
    display: block;
    width: 100%;
    height:100%;
    border-radius: 5px;
    background: linear-gradient(90deg,#6478fb,#8763fb);
    line-height:50px;
    color: #fff;
  }
</style>
