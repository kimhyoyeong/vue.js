<template>
	<main>
		<section>
			<div class="inner-content">
				<div class="project-thumb">
					<img v-bind:src="this.propsdata[this.selectedItem].imgSrc" v-bind:alt="this.propsdata[this.selectedItem].alt">
				</div>
				<div class="project-view">
					<p class="sub-title">PROJECT #{{this.propsdata[this.selectedItem].id + 1}}</p>
					
					<h3 class="title">{{this.propsdata[this.selectedItem].title}}</h3>
					
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
					<div class="description">
						<dl class="info-list">
							<dt>Cross Browsing</dt>
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
						<a v-bind:href="this.propsdata[this.selectedItem].codeLink" target="_blank" class="button" v-if="this.propsdata[this.selectedItem].codeLink!=''">code view <i class="fas fa-link"></i></a>
					</div>
					
				</div>
				
				<a href="#" v-on:click.prevent="viewPagePrev()" v-if="this.propsdata[this.selectedItem].id > 0" class="btn-project-prev"><i class="fas fa-chevron-left"></i></a>
				<a href="#" v-on:click.prevent="viewPageNext()" v-if="this.propsdata[this.selectedItem].id < this.propsdata.length-1" class="btn-project-next"><i class="fas fa-chevron-right"></i></a>
				
			</div>
		</section>
	</main>
</template>

<style lang="scss" scoped>
	section{
		.inner-content{
			padding:5%;
			box-sizing:border-box;
			text-align:left;
			color:#252020;
		}
	}
	.description{
		&:after{
			content:'';clear:both;display:block;
		}
	}
	.info-list{
		float:left;
		margin-bottom:5px;
		dt,dd{
			display:inline-block;
			text-align:left;
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
			font-size:2.6rem;
		}
	}
	.project-thumb{
		float:left;
		overflow:hidden;
		width:30%;height:20rem;
		box-sizing:border-box;
		box-shadow:0 20px 40px rgba(0, 0, 0, 0.2);
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
		position:fixed;top:40%;
		padding:50px 20px;
		font-size:30px;
		color:#000;
		transition:1s;
	}
	.btn-project{
		&-next{
			right:0;
			&:hover{
				transform:translateX(10px);
				transition:.5s;
			}
		}
		&-prev{
			left:0;
			&:hover{
				transform:translateX(-10px);
				transition:.5s;
			}
		}
	}
	
	
	@media (min-width:320px) and (max-width:823px){
		section{
			.inner-content{
				padding:26% 10%;
			}
		}
		.project-view{
			width:100%;
			padding-top:0;
		}
		.project-thumb{
			display:none;
		}
		[class^='btn-project-']{
			padding:50px 5px;
		}
		.btn-project{
			&-next{
				&:hover{
					transform:translateX(0);
				}
			}
			&-prev{
				&:hover{
					transform:translateX(0);
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