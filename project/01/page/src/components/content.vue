<template>
	<main>
		<section class="section-home">
			<div class="inner-content">
				<div class="box"></div>
				<span class="sub2">WorkPlace</span>
				<strong class="title" v-animate.repeat.fade="'slide-up'">k-h-y</strong>
				<strong class="title" v-animate.repeat.fade="'slide-up'">Portfoilo</strong>
				<p class="sub" v-animate.repeat.fade="'slide-up'">
					사용자에게 최적의 환경을 제공하기 위해 노력하는 웹퍼블리셔 김효영입니다.
				</p>
			</div>
		</section>

		<section class="section-about">
			<div class="inner-content">
				<h2 class="main-title">About</h2>
				
				<div class="">
					<strong>skill</strong>
					<div>
						<strong>html</strong>
						<p>sass/webpack/jqery/vue/css3/html5/</p>
					</div>
					
				</div>
			</div>
		</section>
		
		<section class="section-portfolio">
			<div class="inner-content">
				<h2 class="main-title">Project List</h2>
				<div>제이슨활용 클릭시 라우팅작업</div>
				<ul class="list-project" v-animate.repeat.fade="'slide-up'">
					<li>
						<a href="#">
							<img src="http://images.cj.net/THECJCUP_STRG/bbs/0000005870880005813617162.jpg" alt="썸네일">
							<div class="detail-project">
								<dl>
									<dt>Hackers HRD</dt>
									<dd>강의 제공 사이트 강의 제공 사이트 강의 제공 사이트 강의 제공 사이트</dd>
								</dl>
							</div>
						</a>
					</li>
					<li>
						<a href="#">
							<img src="http://images.cj.net/THECJCUP_STRG/bbs/0000005870880005813617162.jpg" alt="썸네일">
							<div class="detail-project">
								<dl>
									<dt>Hackers HRD</dt>
									<dd>강의 제공 사이트 강의 제공 사이트 강의 제공 사이트 강의 제공 사이트</dd>
								</dl>
							</div>
						</a>
					</li>
					<li>
						<a href="#">
							<img src="http://images.cj.net/THECJCUP_STRG/bbs/0000005870880005813617162.jpg" alt="썸네일">
							<div class="detail-project">
								<dl>
									<dt>Hackers HRD</dt>
									<dd>강의 제공 사이트 강의 제공 사이트 강의 제공 사이트 강의 제공 사이트</dd>
								</dl>
							</div>
						</a>
					</li>
					<li>
						<a href="#">
							<img src="http://images.cj.net/THECJCUP_STRG/bbs/0000005870880005813617162.jpg" alt="썸네일">
							<div class="detail-project">
								<dl>
									<dt>Hackers HRD</dt>
									<dd>강의 제공 사이트 강의 제공 사이트 강의 제공 사이트 강의 제공 사이트</dd>
								</dl>
							</div>
						</a>
					</li>
				</ul>
			</div>
		</section>
		
		<section class="section-contact">
			<div class="inner-content">
				<h2 class="main-title">contact</h2>
				
				<div>이메일보내는 폼하고 인적사항</div>
				
			</div>
		</section>
	</main>
</template>


<style lang="scss" scoped>

section{
	display:table;
	position:relative;
	width:100%;
	min-height:100%;
	padding:5% 0;
	background-size:cover;
	background-position:50% 50%;
	.inner-content{
		display:table-cell;
		vertical-align:middle;
		text-align:center;
	}
}
.main-title{
	font-size:3rem;
	color:#FFF;
}
.sub-text{
	font-size:.8rem;
}
.section-home{
	overflow:hidden;
	background-image:url(../assets/img_bg.jpg);
	background-attachment:fixed;
	
	.inner-content{
		padding-left:8%;
		text-align:left;
	}
	
	.title{
		position:relative;z-index:2;
		display:block;
		border-bottom:1px solid #000;
		font-size:4rem;
		color:#000;
		line-height:1;
	}
	
	.sub{
		position:relative;z-index:2;
		margin-top:2%;
		font-size:.75rem;
		color:#000;
		letter-spacing:-1px;
	}
	
	.sub2{
		padding-left:10px;
		color:#000;
		font-weight:300;
		font-size:.6rem;
		letter-spacing:8px;
		opacity:.8;
	}
	
}
.section-about{
	background:#90B778;
}
.section-portfolio{
	background:#E7E7E7;
	.main-title{
		color:#444;
	}
}
.section-contact{
	background:#333439;
}
.list-project{
	overflow:hidden;
	margin-top:5%;
	
	li{
		float:left;
		width:25%;
		padding:1%;
		box-sizing:border-box;
		& > a{
			display:block;
			background-color:rgba(255, 255, 255, 0.5);
			transition:all 0.3s;
			&:hover{
				box-shadow:0 20px 40px rgba(0, 0, 0, 0.1);
				transform:translateY(-5px)
			}
			img{width:100%}
		}
	}
	
	.detail-project{
		padding:5%;
		text-align:left;
		color:#444;
		dt{
			font-weight:600;
			font-size:.8rem;
		}
		dd{
			margin-top:2%;
			font-size:.6rem;
			letter-spacing:-1px;
		}
	}
}



</style>
