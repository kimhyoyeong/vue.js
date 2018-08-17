<template>
	<main>
		<section class="">
			<div class="inner-content">
				<h2 v-animate.repeat.fade="'animation'">STUDIO</h2>
				<p v-animate.repeat.fade="'animation'">H&A needed their website to speak to a corporate audience?their desired client base.<br>We utilized white space, bold messaging, and subtle animations to show that H&A are sophisticated,<br> yet young and energetic. </p>
				
				<ul class="list-project">
					<li v-animate.repeat.fade="'animation-fade'">
						<a href="#">
							<div class="img-box"><img src="https://ruya.ae/wp-content/uploads/2017/11/L1Aston-1.jpg" alt=""></div>
							<div class="hover-info">
								<span>chapter 1</span>
								<dl>
									<dt>title</dt>
									<dd>text</dd>
								</dl>
							</div>
						</a>
					</li>
					<li v-animate.repeat.fade="'animation-fade'">
						<a href="#">
							<div class="img-box"><img src="https://ruya.ae/wp-content/uploads/2017/11/L1Aston-1.jpg" alt=""></div>
							<div class="hover-info">
								<span>chapter 1</span>
								<dl>
									<dt>title</dt>
									<dd>text</dd>
								</dl>
							</div>
						</a>
					</li>
					<li v-animate.repeat.fade="'animation-fade'">
						<a href="#">
							<div class="img-box"><img src="https://ruya.ae/wp-content/uploads/2017/11/L1Aston-1.jpg" alt=""></div>
							<div class="hover-info">
								<span>chapter 1</span>
								<dl>
									<dt>title</dt>
									<dd>text</dd>
								</dl>
							</div>
						</a>
					</li>
					<li v-animate.repeat.fade="'animation-fade'">
						<a href="#">
							<div class="img-box"><img src="https://ruya.ae/wp-content/uploads/2017/11/L1Aston-1.jpg" alt=""></div>
							<div class="hover-info">
								<span>chapter 1</span>
								<dl>
									<dt>title</dt>
									<dd>text</dd>
								</dl>
							</div>
						</a>
					</li>
				</ul>
			</div>
			
		</section>

		<div class="effect-text" v-parallax="0.5">Music</div>
		
	</main>
</template>

<style lang="scss" scoped>

	section{
		padding:10% 0;
		&:before{
			content:'';
			position:absolute;top:0;left:0;right:0;
			height:24rem;
			background:#74D8FF;
		}
		
		h2{
			font-size:4rem;
			color:#FFF;
			&:after{
				content:'.';
				color:#f3d453;
			}
		}
		.inner-content{
			position:relative;z-index:2;color:#FFF;
		}
	}
	
	.list-project{
		width:60%;
		margin:5rem auto 0;
		display:flex;
		flex-wrap:wrap;
		li{
			overflow:hidden;
			position:relative;
			flex:50%;
			max-width:50%;
			height:auto;
			box-shadow:0 20px 40px rgba(0, 0, 0, 0.1);
			img{
				width:100%;
			}
			&:nth-child(odd){
				transform:translateY(-3rem);
			}
			&:hover .hover-info{
				opacity:1;
				transition:all .5s;
			}
			&:hover .img-box{
				transform:scale(1.0);
				transition:all .5s;
			}
		}
		
		.img-box{
			transform:scale(1.1);
			transition:all .5s;
			font-size:0;
		}
		
		.hover-info{
			position:absolute;top:0;left:0;right:0;bottom:0;
			padding:10%;
			background-color:rgba(0, 0, 0, .5);
			opacity:0;
			color:#fff;font-size:.8rem;text-align:left;
			transform:scale(1.1);
			transition:all .5s;
			span{
				font-size:.5rem;
			}
			dt{
				margin:2rem 0 1rem;
				border-bottom:1px solid #eee;
			}
		}
	}
	
	.effect-text{
		position:absolute;
		top:-4rem;
		left:4%;
		z-index:0;
		white-space:nowrap;
		font-size:900%;
		color:transparent;
		-webkit-text-stroke-color:#FFF;
		-webkit-text-stroke-width:.1rem;
		transform-origin:center center;
		transform:translate(-50%, -20%) rotate(-90deg);
		opacity:.2;
		transition:transform 1s cubic-bezier(.165, .84, .44, 1), opacity 1s cubic-bezier(.165, .84, .44, 1);
		text-transform:uppercase;
		font-style:italic;
		font-weight:800;
	}
	
</style>
