import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueAnimate from 'vue-animate-scroll'
import VueParallaxJs from 'vue-parallax-js'
import fontawesome from 'fontawesome-vue';

require('notosans-fontface');
require('typeface-montserrat');

Vue.config.productionTip = false
Vue.use(VueAnimate)
Vue.use(VueParallaxJs)
Vue.use(fontawesome)
Vue.use(VueRouter)


// 라우트 컴포넌트 정의
const home = App.components.Content3
const content = App.components.Content4

// 라우트 정의
const routes = [
	{path: '/', component: home},
	{path: '/content', component: content}
]

// 라우터 인스턴스 생성
const router = new VueRouter({
	mode: 'history', // history 모드를 사용하면 주소창에 hash가 없어집니다.
	routes // routes: routes 의 약어
})

new Vue({
	render: h => h(App),
	router
}).$mount('#app')
