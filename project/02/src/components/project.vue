<template>
	<main>
		<section>
			<div class="inner-content">
				<strong class="sub-title">MY EXPERIENCE</strong>
				<h2 class="main-title fade-in-bottom">Project</h2>
				<div class="description fade-in-bottom">
					<p>
						신규프로젝트 진행시 메인/서브 역할로 진행하였습니다. <br>
						클릭시 자세한 내용을 확인할 수 있습니다.
					</p>
				</div>
				<div class="button-box">
					<router-link to="About" class="button">About me <i class="fas fa-arrow-right"></i></router-link>
				</div>
				<div class="project-list">
					<ul>
						<li v-for="(project) in propsdata" v-bind:key="project.id">
							<a href="#" @click.prevent="viewPage(project)">
								<i class="icon-new" v-if="project.id <= 2">NEW</i>
								<div class="txt-box">
									{{project.date}} <strong>{{ project.title }}</strong>
									<span class="more">자세히보기</span>
								</div>
								<div class="img-box">
									<img v-bind:src="project.imgSrc" v-bind:alt="project.alt">
								</div>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</section>
	</main>
</template>

<style lang="scss" scoped>
	.main-title{
		margin-bottom:.2rem;
	}
	.project-list{
		margin-top:1rem;
		animation:fade-in-bottom 1s;
		li{
			float:left;
			position:relative;
			width:23%;
			margin-bottom:2%;
			margin-right:2%;
			
			&:nth-child(4n){
				margin-right:0;
			}
			a{
				display:block;
				transition:transform .5s;
				&:hover .img-box img{
					transform:scale(1);
					transition:transform .5s;
				}
				&:hover{
					transform:translateY(-20px);
					transition:transform .5s;
				}
			}
		}
		
		.img-box{
			overflow:hidden;
			position:relative;
			box-shadow:0 20px 40px rgba(0, 0, 0, 0.3);
			height:10rem;
			img{
				display:block;
				width:100%;
				transform:scale(1.2);
				transition:transform .5s;
			}
			
			&:after{
				content:'';
				position:absolute;top:0;left:0;right:0;bottom:0;z-index:2;
				background:#000;opacity:0.6;
			}
			
		}
		
		.txt-box{
			position:absolute;top:50%;left:0;right:0;z-index:5;
			transform:translateY(-50%);
			padding:.2rem;
			color:#fff;
			text-align:center;
			font-size:.6rem;
			letter-spacing:-1px;
			strong{
				display:block;
				font-size:.75rem;
				font-weight:600;
			}
			.more{
				display:inline-block;
				margin-top:5px;
				padding:.1rem .2rem;
				border:1px solid #fff;
				font-size:.5rem;
			}
		}
	}

	.icon-new{
		position:absolute;top:0;left:0;z-index:10;
		display:block;
		height:20px;
		padding:0 5px;
		background:#c12535;
		font:{
			size:12px;
			style:normal;
		}
		color:#fff;
		line-height:20px;
	}
	@media (min-width:320px) and (max-width:1023px){
		.project-list{
			li{
				width:48%;
				a:hover{
					transform:translateY(0);
				}
			}
			.txt-box{
				font-size:12px;
				strong{
					font-size:16px;
				}
				.more{
					font-size:12px;
				}
			}
		}
		
	}
</style>

<script>
export default {
	props: ['propsdata', 'selectedItem'],
	
	methods: {
		viewPage(project){
			this.$emit('viewPage',  project);
		}
	}
}
</script>