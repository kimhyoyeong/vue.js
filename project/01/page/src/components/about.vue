<template>
	<main>
		<section class="section-a">
			<div class="inner-content">
				<h2 v-animate.repeat.fade="'animation'">des<br>ign</h2>
				<p>
				We created seven main color tones and seven custom patterns, as well as custom iconography that aligns with the brand. Each section of the site has its own identifying color and pattern, bringing a sense of fun into browsing the pages. Using a fluid Flexbox grid, we were able to position the content in many different ways on the page, which keeps users engaged visually.
				
				</p>
			</div>
		</section>
		
		<div class="effect-img" v-parallax="0.3"><img src="http://buzzworthystudio.com/img/projects/cornerstone/design-font-img-float-1.png" alt=""></div>
		<div class="effect-img v2" v-parallax="0.2"><img src="http://buzzworthystudio.com/img/projects/cornerstone/design-font-img-float-2.png" alt=""></div>
		
		<section class="section-b">
			<div class="inner-content">
				<h2 v-animate.repeat.fade="'animation'">des<br>ign</h2>
				<p>
				We created seven main color tones and seven custom patterns, as well as custom iconography that aligns with the brand. Each section of the site has its own identifying color and pattern, bringing a sense of fun into browsing the pages. Using a fluid Flexbox grid, we were able to position the content in many different ways on the page, which keeps users engaged visually.
				
				</p>
			</div>
		</section>
		<canvas class="bubble b-blobs__b1" data-stroke-width="40vw" data-stroke-color="#ff5300" data-fill="#ff5300" id="bubble-0" width="737" height="737" style="-webkit-user-drag: none; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></canvas>
		
	</main>
</template>

<style lang="scss" scoped>
	.b-blobs__b1{
		position:absolute;
		left:-11%;
		top:2%;
		width:40vw;
		height:40vw;
	}
	section{
		padding:10% 0;
		background:#fff;
		
		h2{
			position:absolute;top:5%;left:5%;
			font-size:6rem;
			line-height:1;
			color:#0666D1;
			&:after{
				content:'.';
				color:#FFA726;
			}
		}
		
		p{
			padding-left:15rem;
			margin-top:1rem;
			color:#000;font-size:.9rem;
		}
		.inner-content{
			position:relative;z-index:2;
			padding:5%;
			color:#FFF;text-align:left;
		}
	}
	
	.section-b{
		background:#84CC3B;
		h2{
			position:absolute;bottom:5%;top:auto;left:auto;right:5%;
			color:#fff;
			&:after{
				content:'.';
				color:#FFA726;
			}
		}
		p{
			padding-left:0;padding-right:15rem;
			text-align:left;color:#fff;
		}
	}
	
	.effect-img{
		position:absolute;top:70%;left:50%;z-index:5;
		
		&.v2{
			top:90%;left:40%;
		}
	}
	
</style>
<style lang="scss">
	
	header{
		.nav-open{
			i{
				background-color:#000;
			}
		}
		
		&.active{
			.nav-open{
				i{
					background-color:#fff;
				}
			}
		}
	}
	
</style>
