<template>
	<main>
		<section>
			<div class="inner-content">
				<div class="project-thumb fade-in-bottom">
					<img v-bind:src="this.propsdata[this.selectedItem].imgSrc" v-bind:alt="this.propsdata[this.selectedItem].title">
				</div>
				<div class="project-view">
					<p class="sub-title">PROJECT #{{this.propsdata[this.selectedItem].id + 1}}</p>
					
					<h3 class="title">{{this.propsdata[this.selectedItem].title}}</h3>
					
					<ul class="list-skills">
						<li v-if="this.propsdata[this.selectedItem].htmlSkill!=''"><i class="icon-html">HTML</i></li>
						<li v-if="this.propsdata[this.selectedItem].cssSkill!=''"><i class="icon-css">CSS</i></li>
						<li v-if="this.propsdata[this.selectedItem].sassSkill!=''"><i class="icon-sass">Sass</i></li>
						<li v-if="this.propsdata[this.selectedItem].jquerySkill!=''"><i class="icon-jquery">jquery</i></li>
						<li v-if="this.propsdata[this.selectedItem].vueSkill!=''"><i class="icon-jquery">Vue.js</i></li>
					</ul>
					
					<div class="description">
						<dl class="info-list">
							<dt>Position</dt>
							<dd>{{this.propsdata[this.selectedItem].role}}</dd>
						</dl>
						<dl class="info-list">
							<dt>DATE</dt>
							<dd>{{this.propsdata[this.selectedItem].date}}</dd>
						</dl>
					</div>
					<div class="description" v-if="this.propsdata[this.selectedItem].ie!=''">
						<dl class="info-list">
							<dt>IE support</dt>
							<dd>{{this.propsdata[this.selectedItem].ie}}</dd>
						</dl>
					</div>
					<div class="description">
						<dl>
							<dt>Description</dt>
							<dd v-html="this.propsdata[this.selectedItem].des"></dd>
						</dl>
					</div>
					
					<div class="button-box">
						<a v-bind:href="this.propsdata[this.selectedItem].pc" target="_blank" class="button" v-if="this.propsdata[this.selectedItem].pc!=''">PC <i class="fas fa-link"></i></a>
						<a v-bind:href="this.propsdata[this.selectedItem].mobile" target="_blank" class="button" v-if="this.propsdata[this.selectedItem].mobile!=''">Moblie <i class="fas fa-link"></i></a>
						<a v-bind:href="this.propsdata[this.selectedItem].responsiveWeb" target="_blank" class="button" v-if="this.propsdata[this.selectedItem].responsiveWeb!=''">반응형 <i class="fas fa-link"></i></a>
						<a v-bind:href="this.propsdata[this.selectedItem].codeLink" target="_blank" class="button" v-if="this.propsdata[this.selectedItem].codeLink!=''">code view <i class="fas fa-link"></i></a>
					</div>
					
				</div>
				
				<a href="#" v-on:click="viewPagePrev()" v-if="this.propsdata[this.selectedItem].id > 0" class="btn-project-prev"><i class="fas fa-chevron-left"></i></a>
				<a href="#" v-on:click="viewPageNext()" v-if="this.propsdata[this.selectedItem].id < this.propsdata.length-1" class="btn-project-next"><i class="fas fa-chevron-right"></i></a>
				
			</div>
		</section>
	</main>
</template>

<style lang="scss" scoped>

	.description{
		&:after{
			content:'';clear:both;display:block;
		}
		dt,dd{
			margin-top:5px;
		}
	}
	.info-list{
		float:left;
		margin-bottom:5px;
		dt,dd{
			display:inline-block;
			text-align:left;
			vertical-align: middle;
		}
		dt{
			padding-right:.3rem;
		}
		dd{
			padding-right:1rem;
		}
	}
	
	.project-view{
		float:left;
		width:70%;
		padding-top:45px;
		padding-left:4%;
		box-sizing:border-box;
		.title{
			padding:.5rem 0;
			font-size:2.3rem;
			letter-spacing:-1px;
		}
	}
	.project-thumb{
		float:left;
		overflow:hidden;
		width:30%;height:20rem;
		box-sizing:border-box;
		box-shadow:0 20px 40px rgba(0, 0, 0, 0.4);
		img{
			width:100%;
		}
	}
	.button-box{
		.button{
			margin-right:.5rem
		}
	}
	
	[class^='btn-project-']{
		position:fixed;top:0;
		height:100%;width:20px;
		padding:0 20px;
		font-size:30px;
		color:#000;
		text-align:center;
		svg{
			height:100%;
			transition:1s;
		}
	}
	.btn-project{
		&-next{
			right:0;
			&:hover{
				svg{
					transform:translateX(10px);
					transition:.5s;
				}
			}
		}
		&-prev{
			left:0;
			&:hover{
				svg{
					transform:translateX(-10px);
					transition:.5s;
				}
				
			}
		}
	}
	
	.list-skills{
		margin-bottom:10px;
		li{
			display:inline-block;
			margin-right:5px;
			vertical-align:middle;
		}
		[class^='icon-']{
			display:block;
			height:20px;
			padding:0 5px;
			background:#ee5522;
			border-radius:4px;
			font:{
				size:12px;
				style:normal;
			}
			color:#fff;
			line-height:20px;
		}
		.icon-css{
			background-color:#0077dd;
		}
		.icon-sass{
			background-color:#cc6699;
		}
		.icon-jquery{
			background-color:#108040;
		}
		.icon-vue{
			background-color:#44bb88;
		}
	}
	
	@media (min-width:320px) and (max-width:823px){
		
		.project-view{
			width:100%;
			padding-top:0;
		}
		.project-thumb{
			display:none;
		}
		[class^='btn-project-']{
			padding:0;
		}
		.btn-project{
			&-next{
				&:hover{
					svg{
						transform:translateX(0);
					}
				}
			}
			&-prev{
				&:hover{
					svg{
						transform:translateX(0);
					}
				}
			}
		}
	}
</style>

<script>
export default {
	props: ['propsdata', 'selectedItem'],
	methods: {
		viewPageNext(){
			this.$emit('viewPageNext');
		},
		viewPagePrev(){
			this.$emit('viewPagePrev');
		}
	}
}
</script>