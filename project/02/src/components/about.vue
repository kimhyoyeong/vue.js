<template>
	<main>
		<section>
			<div class="inner-content">
				<strong class="sub-title">MY EXPERIENCE</strong>
				<h2 class="main-title fade-in-bottom">About me</h2>
				<div class="description fade-in-bottom">
					<p>
						안녕하세요:) 김효영입니다.
					</p>
					
					<dl class="info-list">
						<dt>Name</dt>
						<dd>김효영</dd>
					</dl>
					<dl class="info-list">
						<dt>Birth</dt>
						<dd>1989.04.05</dd>
					</dl>
					<dl class="info-list">
						<dt>Career</dt>
						<dd>[2015.09.16 ~ 현재] 해커스교육그룹</dd>
					</dl>
					<dl class="info-list">
						<dt>Education</dt>
						<dd>
							[2015] 모노라움 웹퍼블리셔 과정 수료<br>
							[2015] 숭실대학교 글로벌미디어학과 졸업<br>
						</dd>
					</dl>
					<dl class="info-list">
						<dt>Certificate</dt>
						<dd>정보처리기사<br>컴활2급<br>사무자동화산업기사<br>멀티미디어콘텐츠전문가<br>웹디자인기능사</dd>
					</dl>
				</div>
				
				<div class="link-box fade-in-bottom">
					<ul>
						<li><a href="mailto:kimhyo0089@gmail.com"><i class="fas fa-envelope"></i> kimhyo0089@gmail.com</a></li>
						<li><a href="https://github.com/kimhyoyeong/" target="_blank"><i class="fab fa-github"></i> https://github.com/kimhyoyeong</a></li>
						<li><i class="fas fa-phone"></i> 010.5632.2473</li>
					</ul>
				</div>
				
				<div class="button-box">
					<router-link to="Project" class="button">view project <i class="fas fa-arrow-right"></i></router-link>
				</div>
			</div>
		</section>
	</main>
</template>

<style lang="scss" scoped>
	.description{
		p{
			margin-bottom:1rem;
		}
		.info-list{
			margin-bottom:.3rem;
			dt{min-width:100px}
			dt,dd{vertical-align:top}
		}
	}
	.parallax-item{
		position:absolute;top:0;right:35%;
		font-size:10rem;
	}
	.link-box{
		margin-top:1rem;
		li{
			margin-top:.5rem;
			font-size:16px;
		}
	}
</style>
