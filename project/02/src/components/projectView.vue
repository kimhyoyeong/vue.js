<template>
	<main>
		<section>
			<div class="inner-content">
				<div class="project-view">
					<p class="sub-title">{{this.propsdata[this.selectedItem].project}}</p>
					
					<h3 class="title">ICO Platform</h3>
					
					<div class="description">
						<dl class="info-list">
							<dt>ROLE</dt>
							<dd>{{this.propsdata[this.selectedItem].role}}</dd>
							<dt>DATE</dt>
							<dd>{{this.propsdata[this.selectedItem].date}}</dd>
						</dl>
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
	.project-view{
		.title{
			font-size:3rem;
		}
		
		.description{
			margin-bottom:.8rem;
		}
	}
	.button-box{
		.button{
			margin-right:.5rem
		}
		
	}
	
	
</style>

<script>
export default {
	props: ['propsdata', 'selectedItem']
}
</script>

