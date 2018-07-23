<template>
  <section>
    <div class="inputBox shadow">
      <input type="text" v-model="newTodoItem" placeholder="Type what you have to do" v-on:keyup.enter="addTodo">
      <button class="addContainer" v-on:click="addTodo">
        <i class="addBtn fa fa-plus" aria-hidden="true"></i>
      </button>
    </div>
    <router-link to="/" class="title-button">리스트보기</router-link>
  </section>
</template>

<script>
  export default{
    data(){
      return{
        newTodoItem:''
      }
    },
    methods:{
      addTodo(){
        if(this.newTodoItem!=""){
          var value=this.newTodoItem && this.newTodoItem.trim();
          this.$emit('addTodo',value);
          this.clearInput();
          this.$router.push('/')
        }else{
          alert('입력해주세요.');
        }
      },
      clearInput(){
        this.newTodoItem='';
      }
    }
  }
</script>

<style scoped>
input:focus{
  outline:none
}
.inputBox{
  background: #fff;
  height: 50px;
  margin-bottom:10px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input{
  border-style: none;
  font-size: .9rem;
}
.addContainer{
    float: right;
    background: linear-gradient(90deg,#6478fb,#8763fb);
    display: inline-block;
    width: 3rem;
    height:100%;
    border-radius: 0 5px 5px 0;
  }
.addBtn{
    color: #fff;
    vertical-align: middle;
}
</style>
