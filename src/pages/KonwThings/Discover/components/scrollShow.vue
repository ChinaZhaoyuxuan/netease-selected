<template>
	<div class="scroll_container">
		<div class="name">{{topic.title}}</div>
		
		<div :class="'scroll_box_'+index" class="scroll_box">
			<ul>
				<li v-for="(item, index) in topic.lookList" :key="index" :class="{active: ((ul.hideCount+(sScroll.directionX===1?2:1))===index)}">
					<a href="javascript:">
						<img :src="item.picUrl" alt="topic">
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
  export default {
    name: "scrollShow",
    props: {
      topic: Object
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.scroll_container
		width 100%
		box-sizing border-box
		background-color: #fff
		.name
			margin 0 0 20px 30px
			font-size 36px
			color #333
		.scroll_box
			width 100%
			height 250px
			ul
				height 100%
				float left
				display flex
				>li
					width 250px
					height 250px
					transition 500ms transform
					transform scale(0.7)
					&.active
						transform scale(1)
					>a
						width 100%
						height 100%
						>img
							width 100%
							height 100%
</style>
