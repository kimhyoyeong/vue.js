<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodo="addTodo"></TodoInput>
    <TodoList v-bind:propsdate="todoItems" v-on:removeTodo="removeTodo"></TodoList>
    <TodoFooter v-on:removeAll="removeAll"></TodoFooter>

  </div>
</template>

<script>
  import TodoHeader from './components/TodoHeader.vue';
  import TodoInput from './components/TodoInput.vue';
  import TodoList from './components/TodoList.vue';
  import TodoFooter from './components/TodoFooter.vue';


  export default{
    data(){
      return{
        todoItems:[]
      }
    },
    created(){
      if(localStorage.length>0){
        for(var i=0;i<localStorage.length;i++){
          this.todoItems.push(localStorage.key(i));
        }
      }
    },
    methods:{
      addTodo(todoItem){
        localStorage.setItem(todoItem,todoItem);
        this.todoItems.push(todoItem);
      },
      removeTodo(todoItem,index){
        localStorage.removeItem(todoItem,todoItem);
        this.todoItems.splice(index,1);
      },
      removeAll(){
        localStorage.clear();
        this.todoItems=[];
      }
    },
    components:{
      'TodoHeader':TodoHeader,
      'TodoInput':TodoInput,
      'TodoList':TodoList,
      'TodoFooter':TodoFooter
    }
  }
</script>

<style>
  body{
   background-color: #f6f6f8;
   text-align: center;
  }
  input{
    width:200px;
    border-style:groove;
  }
  button{
    border-style:none;
    background:none;
  }
  .shadow{box-shadow:5px 10px 10px rgba(0,0,0,0.03)}
</style>
