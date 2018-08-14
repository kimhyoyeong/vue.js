<template>
	<main>
		<section class="color-change-2x">
			<div class="inner-content">
				<ul class="list-menu">
					<li><router-link to="/">STUDIO.</router-link></li>
					<li><router-link to="content">PUSH.</router-link></li>
					<li><a href="#">MAPS.</a></li>
				</ul>
			</div>
		</section>
	</main>
</template>

<style lang="scss" scoped>
	main{
		overflow:hidden;
	}
	.list-menu{
		perspective:1800px;
		li{
			width:100%;
			transform:rotateY(50deg);
			transform-style:preserve-3d;
			//transform-origin: 0 100% 0;
			transition:transform .5s cubic-bezier(.075, .82, .165, 1);
			font-weight:800;font-size:8rem;line-height:1;text-align:center;
			text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-font-kerning:auto;font-kerning:auto;
			
			&:hover{
				transform:rotateY(-30deg);
				transition:transform 1.5s .2s cubic-bezier(.075, .82, .165, 1);
			}
			
			a{
				display:inline-block;
				animation-name:rotate-txt;animation-duration:.5s;animation-fill-mode:both;
				&:after{
					content:'';
					position:absolute;bottom:0;left:50%;transform:translateX(-50%);
					width:2rem;height:.2rem;
					background:#000;
				}
			}
			&:nth-child(1) a{
				animation-delay:.4s;
			}
			&:nth-child(2) a{
				animation-delay:.6s;
			}
			&:nth-child(3) a{
				animation-delay:.8s;
			}
			&:nth-child(even) a{
				background-color:rgba(0, 0, 0, .8);
				color:#FFF;
			}
		}
		
	}
</style>
