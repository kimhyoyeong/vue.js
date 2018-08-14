<template>
	<main>
		<section class="section-effect color-change-2x">
			<div class="effect-text">Music / Fashion</div>
			
			<div class="inner-content">
				<strong class="txt"><span>stu</span><br>dio.</strong>
				<p class="sub2">WorkPlace</p>
			</div>
		</section>
		
		<section class="section-effect2">
			<div class="inner-content">
				<strong class="txt2" v-animate.repeat.fade="'outT'">about us</strong>
				
				<p class="txt3" v-animate.repeat.fade="'outT'">
					We're a Brooklyn-based creative studio that specializes in Digitally Native Brands (DNBs).
					From the beginning, we wanted to create digital experiences for brands that stood out and made an impact?regardless of the industry.
					So we built an experienced and accomplished team with backgrounds in tech, design, digital marketing,
					brand strategy, production, and social media. When our powers combine we're like the Captain Planet for DNBs.
				</p>
			</div>
		</section>

		
	</main>
</template>

<style lang="scss" scoped>
	::selection{
		background:#000;
		color:#FFF;
	}
	.inner-content{
		position:relative;
		z-index:20;
		padding-left:5%;
		text-align:left;
	}
	.section-effect{
		position:relative;
		padding:0;
		
		&:after{
			content:'';
			position:absolute;bottom:-102%;left:0;right:0;
			height:50rem;
			background:#000;
			transform:skewY(10deg)
		}
	}

	.effect-text{
		position:fixed;
		top:50%;
		left:80%;
		z-index:2;
		white-space:nowrap;
		font-size:10rem;
		color:transparent;
		-webkit-text-stroke-color:#FFF;
		-webkit-text-stroke-width:.1rem;
		transform-origin:center center;
		transform:translate(-50%, -20%) rotate(-90deg);
		opacity:1;
		transition:transform 1s cubic-bezier(.165, .84, .44, 1), opacity 1s cubic-bezier(.165, .84, .44, 1);
		text-transform:uppercase;
		font-style:italic;
		font-weight:800;
	}
	.txt{
		color:#FFF;
		font-size:9rem;
		line-height:1;
		span{
			color:#000
		}
	}
	.txt2{
		color:#FFF;
		font-size:3rem;
	}
	.txt3{
		width:50%;
		color:#FFF;
		font-size:.7rem;
		line-height:1.7;
	}
	.sub2{
		margin-top:10px;
		padding-left:10px;
		color:#FFF;
		font-weight:300;
		font-size:.6rem;
		letter-spacing:12px;
		opacity:.8;
	}
	.img-box{
		position:relative;
		width:10rem;height:10rem;
		border-radius:50%;
		background:#FFF;
		&:after, &:before{
			content:'';
			position:absolute;
			width:10rem;height:10rem;
			border-radius:50%;
			background:#FFF;
			opacity:.5;
		}
		&:after{
			top:2%;left:2%
		}
	}
	
	

</style>