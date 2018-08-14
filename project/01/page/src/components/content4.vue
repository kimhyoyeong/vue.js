<template>
	<main>
		<section class="section-about">
			<div class="inner-content">
				<span>chapter - 4</span>
				<h2 v-animate.repeat="'animation'">STU<br>DIO</h2>
				<p v-animate.repeat.fade="'animation'">
					GTS commissioned us to freshen up all brand materials and redesign their website to better communicate the services available to agencies and job seekers. We designed and developed a website that is not only user-friendly but also visually appealing, with a user experience far beyond what the competition offers.
				</p>
			</div>
		</section>
		<section class="section-about">
			<div class="inner-content">
				<span>chapter - 4</span>
				<h2 v-animate.repeat.fade="'animation'">STU<br>DIO</h2>
				<p v-animate.repeat.fade="'animation'">
					GTS commissioned us to freshen up all brand materials and redesign their website to better communicate the services available to agencies and job seekers. We designed and developed a website that is not only user-friendly but also visually appealing, with a user experience far beyond what the competition offers.
				</p>
			</div>
		</section>
	</main>
</template>

<style lang="scss" scoped>
	section{
		background:#eee;
		.inner-content{
			padding:20px;
			box-sizing:border-box;
			text-align:left;
		}
	}
	h2{
		font-size:6rem;font-weight:800;line-height:1;
		&:after{
			content:'.';color:#86C635;
		}
	}
	p{
		margin-top:10px;
		font-size:1rem;
	}
	.parallax-item{
		position:absolute;top:20%;right:5%;z-index:20;
		color:#FFF;font-size:6rem;
	}
	
</style>
