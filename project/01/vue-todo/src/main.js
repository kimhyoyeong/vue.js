import Vue from 'vue'
import App from './App.vue'
import Vue2Touch from 'vue2x-touch'
Vue.use(Vue2Touch);

new Vue({
  el: '#app',
  render: h => h(App)
})
