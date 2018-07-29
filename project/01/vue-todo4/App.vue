<template>
    <div id="app">
        <TodoView></TodoView>
        <TodoHeader></TodoHeader>
        <div class="buttons">
            <span>sort</span>
            <button type="button" v-on:click="toggleList(1)">우선순위로 정렬</button>
            <button type="button" v-on:click="toggleList(2)">날짜로 정렬</button>
        </div>
        <!-- 라우터 -->
        <router-view  v-bind:propsdata="todoItems" @removeTodo="removeTodo" v-on:removeAll="clearAll" v-on:addTodo="addTodo" @selTodo="selTodo"></router-view>
        <!--// 라우터 -->
        <TodoFooter></TodoFooter>
    </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'
import TodoView from './components/TodoView.vue'



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
            selItems : 0
        }
    },
    methods: {
        addTodo(todoItem,itemDate,itemPriority,itemPrivate) {
            /*console.log(todoItem);
            console.log(itemDate);
            console.log(itemPriority);
            console.log(itemPrivate);
            return;*/
            var todoItemLength = this.todoItems.length;
            this.todoItems[todoItemLength]['id'] = todoItemLength;
            this.todoItems[todoItemLength]['title'] = todoItem;
            this.todoItems[todoItemLength]['date'] = itemDate;
            this.todoItems[todoItemLength]['priority'] = itemPriority;
            this.todoItems[todoItemLength]['private'] = itemPrivate;
            console.log(this.todoItems);
        },
        removeTodo(todoItem, index) {
            localStorage.removeItem(todoItem);
            this.todoItems.splice(index, 1);
        },
        clearAll() {
            localStorage.clear();
            this.todoItems = [];
        },
        toggleList(type) {
            //console.log(this.todoItems);
            switch (type) {
                case 1 :
                    this.todoItems.sort(function(a,b){return a.priority > b.priority});
                    break;
                case 2 :
                    this.todoItems.sort(function(a,b){return a.date > b.date});
                    break;
            }


        },
        selTodo(key){
            alerT(0);
            console.log(key);
        }
    },
    created() {
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
