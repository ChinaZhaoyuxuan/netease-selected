<template>
	<div class="leftRight_container">
		<div>
			<div class="left">
				<div class="name">
					<img :src="topic.avatar" alt="">
					<span>{{topic.nickname}}</span>
				</div>
				<div class="describe">{{topic.title}}</div>
				<div class="subtiltle">{{topic.subTitle}}</div>
				<div class="foot">
					<span class="iconfont icon-z"></span>
					<span>{{topic.readCount}}人看过</span>
				</div>
			</div>
			<img :src="topic.picUrl" alt="">
		</div>
	</div>
</template>

<script>
  export default {
    name: "leftrightShow",
    props: {
      topic: Object
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.leftRight_container
		width 100%
		box-sizing border-box
		background-color #fff
		>div
			display flex
			.left
				width 445px
				height 278px
				.name
					width 100%
					margin 0 30px
					margin-bottom 20px
					font-size 28px
					>img
						display inline-block
						width 40px
						height 40px
						margin-right 20px
						border-radius 50%
						vertical-align middle
					>span
						fonr-size 28px
				.describe
					margin-left 30px
					margin-bottom 15px
					font-size 36px
					color #333
				.subtiltle
					margin-left 22px
					font-size 28px
					margin-bottom 30px
					color #7f7f7f
				.foot
					margin 0 30px
					>span
						font-size 24px
						color #999
			>img
				width 278px
				height 278px
</style>
