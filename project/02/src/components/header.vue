<template>
	<header v-bind:class="{ active: isActive }">
		
		<button class="menu-btn" v-on:click="isActive = !isActive"><i></i><i></i><i></i></button>
		
		<span class="home-btn"><router-link to="/" v-on:click.native="[isActive ? isActive = !isActive : isActive]"><i class="fas fa-home"></i></router-link></span>
		
		<nav>
			<ul>
				<li><router-link v-on:click.native="isActive = !isActive" to="/">HOME.</router-link></li>
				<li><router-link v-on:click.native="isActive = !isActive" to="/Project">Project.</router-link></li>
				<li><router-link v-on:click.native="isActive = !isActive" to="/About">About.</router-link></li>
			</ul>
		</nav>
		
		<!--<router-link to="/Project" class="back-btn" v-if="$route.path !== '/' && $route.path !== '/Project' && $route.path !== '/About'"><i class="fas fa-arrow-left"></i></router-link>-->
		
		<!--<span @click="$router.go(-1)" class="back-btn" v-if="$route.path !== '/' && $route.path !== '/Project' && $route.path !== '/About'"><i class="fas fa-arrow-left"></i></span>-->
		
	</header>
</template>

<script>
export default {
	data() {
		return {
			isActive: false
		}
	}
	
}
</script>

