<template>
    <div id="app">
        <TodoHeader></TodoHeader>
        <!-- <TodoInput v-on:addTodo="addTodo"></TodoInput> -->
        <!--div class="buttons">
            <span>sort</span>
            <button type="button">우선순위로 정렬</button>
            <button type="button">날짜로 정렬</button>
        </div-->
        <!-- <TodoList v-bind:propsdata="todoItems" @removeTodo="removeTodo" ></TodoList> -->


        <!-- 라우터 -->
        <router-view v-on:addTodo="addTodo" v-bind:propsdata="todoItems, selDataId"  @removeTodo="removeTodo" @selTodo="selTodo"  @toggleList="toggleList"></router-view>
        <!--// 라우터 -->

        <TodoFooter v-on:removeAll="clearAll"></TodoFooter>
    </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'
import TodoView from './components/TodoView.vue'

//import VueRouter from 'vue-router'
//import routes from './routes'
import json from './data/todo.json'

/*const router = new VueRouter({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes
});*/

export default {
    /*router,*/
    data() {
        return {
            todoItems: [],
            selDataId : 0  //선택한 Data Id값 - ToDoView에서 쓰는 것 
        }
    },
    methods: {
        addTodo(todoItem,itemDate,itemPriority,itemPrivate) {
            var todoItemLength = this.todoItems.length;
            var jsonObject = {
                "id": todoItemLength,
                "title": todoItem,
                "date": itemDate,
                "priority": itemPriority,
                "private": itemPrivate
            };
            this.todoItems.push(jsonObject);
        },
        removeTodo(todoItem, index) {
            this.todoItems.splice(index, 1);
        },
        clearAll() {
            this.todoItems = [];
        },
        toggleList(type) {
            switch (type) {
                case 1 :
                    this.todoItems.sort(function(a,b){return a.priority > b.priority});
                    break;
                case 2 :
                    this.todoItems.sort(function(a,b){return a.date > b.date});
                    break;
            }
        },
        selTodo(todoItem, index){
            //alert(0);
            this.selDataId = todoItem.id;
            console.log(this.selDataId);
        }
    },
    created() {
      console.log(1);
        if (json.todos.length > 0) {
            for (var i = 0; i < json.todos.length; i++) {
                this.todoItems.push(json.todos[i]);
            }
        }
    },
    components: {
        'TodoHeader': TodoHeader,
        'TodoInput': TodoInput,
        'TodoList': TodoList,
        'TodoFooter': TodoFooter,
        'TodoView': TodoView
    }
}
</script>

<style>
    body {
      text-align: center;
      background-color: #F6F6F8;
    }
    input {
      border-style: groove;
      width: 200px;
    }
    button {
      border-style: groove;
    }
    .shadow {
      box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03)
    }
</style>
