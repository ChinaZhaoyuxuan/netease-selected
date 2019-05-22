<template>
	<div class="updown_container">
		<div class="name">
			<img :src="topic.avatar" alt="">
			<span>{{topic.nickname}}</span>
		</div>
		<div class="describe">{{topic.title}}</div>
		<img :src="topic.picUrl" alt="">
		<div class="foot">
			<span class="iconfont icon-z"></span>
			<span>{{topic.readCount}}人看过</span>
		</div>
	</div>
</template>

<script>
  export default {
    name: "updownShow",
    props: {
      topic: Object
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.updown_container
		width 100%
		box-sizing border-box
		background-color: #fff
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
			margin 0 30px
			margin-bottom 15px
			font-size 36px
			color #333
		>img
			width 700px
			height 388px
			margin 0 30px
			margin-bottom 15px
		.foot
			margin 5px 30px
			>span
				font-size 28px
				color #999
</style>
