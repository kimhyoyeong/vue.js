<template>
  <div id="app">
    <Header2></Header2>
    <router-view></router-view>
  </div>
</template>

<script>
import Header2 from './components/header2.vue'
import Content3 from './components/content3.vue'
import Content4 from './components/content4.vue'
import Footer from './components/footer.vue'

export default {
	components: {
		'Header2': Header2,
		'Content3': Content3,
		'Content4': Content4,
		'Footer': Footer,
	}
}
</script>



<style lang="scss" src="./styles/common.scss"></style>

