<template>
	<header v-bind:class="{ active: isActive }">
		<button class="nav-open" v-on:click="isActive = !isActive"><i></i><i></i><i></i></button>
		<nav>
			<ul>
				<li><router-link v-on:click.native="isActive = !isActive" to="/">STUDIO.</router-link></li>
				<li><router-link v-on:click.native="isActive = !isActive" to="content">PUSH.</router-link></li>
				<li><a href="#">MAPS.</a></li>
			</ul>
		</nav>
	</header>
</template>

<style lang="scss" scoped>
	header{
		position:fixed;z-index:30;
		
		&:before{
			content:'';
			display:block;
			position:fixed;top:0;left:0;
			width:500vw;height:auto;padding-top:500vw;
			transform:scale(0, 0) translate(-50%, -50%);
			transform-origin:-100% 0;
			background:#D6372E;border-radius:50%;
			transition:all 1s cubic-bezier(0.77, 0, 0.175, 1);
		}
		
		&.active{
			nav{
				display:block;
			}
			&:before{
				transform:scale(1, 1) translate(-50%, -50%);
				transition:all 1s cubic-bezier(0.77, 0, 0.175, 1);
			}
		}
		&.active .nav-open i:nth-child(1){
			-webkit-animation:inT 0.8s forwards;
			animation:inT 0.8s forwards;
		}
		&.active .nav-open i:nth-child(2){
			-webkit-animation:inM 0.8s forwards;
			animation:inM 0.8s forwards;
		}
		&.active .nav-open i:nth-child(3){
			-webkit-animation:inBtm 0.8s forwards;
			animation:inBtm 0.8s forwards;
		}
	}
	nav{
		display:none;
		position:fixed;top:50%;left:0;z-index:10;
		width:100%;
		transform:translateY(-50%);
		li{
			text-align:center;
			display:block;
			padding:2% 0;
			color:#FFF;font-size:4rem;font-weight:800;
			animation-name:rotate-txt;animation-duration:1s;animation-fill-mode:both;
			&:nth-child(1){
				animation-delay:.4s;
			}
			&:nth-child(2){
				animation-delay:.6s;
			}
			&:nth-child(3){
				animation-delay:.8s;
			}
			
			a{
				color:#fff;opacity:.5;
				transition:opacity .5s ease-in;
				&:hover{
					opacity:1;
					transition:opacity .5s  ease-out;
				}
			}
		}
	}
	.nav-open{
		position:fixed;left:20px;top:20px;z-index:10;
		width:30px;height:25px;
		color:#FFF;font-size:20px;font-weight:700;
		
		i{
			position:relative;z-index:1;
			content:'';
			display:block;
			width:100%;
			height:4px;
			background-color:#fff;
			border-radius:2px;
			&:nth-child(1){
				-webkit-animation:outT 0.8s backwards;
				animation:outT 0.8s backwards;
				-webkit-animation-direction:reverse;
				animation-direction:reverse;
			}
			&:nth-child(2){
				margin:5px 0;
				-webkit-animation:outM 0.8s backwards;
				animation:outM 0.8s backwards;
				-webkit-animation-direction:reverse;
				animation-direction:reverse;
			}
			&:nth-child(3){
				-webkit-animation:outBtm 0.8s backwards;
				animation:outBtm 0.8s backwards;
				-webkit-animation-direction:reverse;
				animation-direction:reverse;
			}
		}
		
		
	}
	
</style>

<script>
export default {
	data() {
		return {
			isActive: false
		}
	}
}
</script>