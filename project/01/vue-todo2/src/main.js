import Vue from 'vue'
import App from './App.vue'
import Vue2Touch from 'vue2x-touch'
import VueRouter from 'vue-router'

Vue.use(Vue2Touch)
Vue.use(VueRouter)

// 라우트 컴포넌트 정의
const TodoList = App.components.TodoList
const TodoView = App.components.TodoView

// 라우트 정의
const routes = [
  { path: '/', component: TodoList},
  { path: '/TodoView', component: TodoView}
]


// 라우터 인스턴스 생성
const router = new VueRouter({
  mode: 'history', // history 모드를 사용하면 주소창에 hash가 없어집니다.
  routes // routes: routes 의 약어
})

new Vue({
  el: '#app',
  router,
  components: { App },
  render: h => h(App)
}).$mount('#app') // 이 부분도요

router.replace('/')
