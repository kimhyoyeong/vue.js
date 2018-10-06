<template>
	<main>
		<section>
			<div class="back-text">Kimhyo</div>
			<div class="inner-content">
				<strong class="sub-title fade-in-bottom">MY EXPERIENCE</strong>
				<h2 class="main-title tracking-in-contract-bck-top">Portfolio</h2>
				<div class="description fade-in-bottom">
					<p>
						안녕하세요:)<br>
						웹퍼블리셔 김효영입니다.<br>
						포트폴리오 사이트에 방문해주셔서 감사합니다.
					</p>
				</div>
				<div class="button-box">
					<router-link to="Project" class="button">view project <i class="fas fa-arrow-right"></i></router-link>
					<router-link to="About" class="button">About me <i class="fas fa-arrow-right"></i></router-link>
				</div>
			</div>
		</section>
	</main>
</template>

<style lang="scss" scoped>
	section{
		.inner-content{
			width:100%;
			text-align:center;
		}
	}
	.main-title{
		font-size:4.5rem;
	}
	.button-box{
		.button{
			margin:0 .3rem;
		}
	}
</style>