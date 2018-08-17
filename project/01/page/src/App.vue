<template>
  <div id="app">
    <Header></Header>
    <transition name="fade" mode="out-in">
     <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<script>
import Header from './components/header.vue'
import Home from './components/home.vue'
import About from './components/about.vue'
import Project from './components/project.vue'
import Footer from './components/footer.vue'

export default {
	components: {
		'Header': Header,
		'Home': Home,
		'About': About,
		'Project': Project,
		'Footer': Footer,
	},
	beforeRouteUpdate (to, from, next) {
		const toDepth = to.path.split('/').length
		const fromDepth = from.path.split('/').length
		this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
		next()
	},
}
</script>

<style lang="scss" src="./styles/common.scss"></style>

