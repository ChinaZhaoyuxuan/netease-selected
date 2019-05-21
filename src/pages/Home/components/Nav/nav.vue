<template>
  <div class="warp">
    <ul class="HomeNav">
      <li class="active">推荐</li>
      <li>居家生活</li>
      <li>服饰鞋包</li>
      <li>美食酒水</li>
      <li>个护清洁</li>
      <li>母婴亲子</li>
      <li>运动旅行</li>
      <li>数码家电</li>
      <li>全球特色</li>
      <li></li>
    </ul>
      <div  class="iconfont icon-xiala-" id="toggle" @click="toshow" :class="isShow?'icon-active':'icon-leave'"></div>
      <div  class="iconfontMask"></div>
    <span class="mask" v-if="isShow">
        <div>
          <p>全部频道</p>
          <ul>
          	<li>推荐</li>
          	<li>居家生活</li>
          	<li>美食酒水</li>
          	<li>个护情节</li>
          	<li>母婴亲子</li>
          	<li>运动旅行</li>
          	<li>数码家电</li>
            <li>服饰鞋包</li>
          	<li>全球特色</li>
          	</ul>
        </div>
    </span>
  
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  
  export default {
    name: 'v-nav',
    data(){
      return{
        isShow:false,
      }
    },
    mounted () {
      new BScroll('.warp', {
        scrollX: true
      })
    },
    methods:{
      toshow(){
        this.isShow=!this.isShow
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../common/stylus/mixins.styl"
  .warp
    background-color #fff
    .HomeNav
      display flex
      justify-content space-around
      font-size 28px
      width 220%
      overflow hidden
      margin 25px 0 0 35px
      z-index 10
      color: #333;
      background-color: #fff
      padding-bottom 15px
      li
        padding-bottom 10px
      .active
        color $red
        border-bottom 3px solid $red
    #toggle
      width 40px
      height 40px
      position absolute
      right 0
      top 105px
      text-align center
      font-size 24px
      background-color #fff
      z-index 101
    .iconfontMask
      width 100px
      height 50px
      position absolute
      right 0
      top 105px
      z-index 98
      background-color #fff
    .mask
      width 100%
      height 100%
      display block
      background-color rgba(0, 0, 0, .5)
      position fixed
      top 90px
      left 0
      z-index 100
      p
        float left
        padding-left 30px
        font-size 28px
        color #333333
      div
        width 100%
        height 30%
        background #fff
        position relative
        top 0
        left 0
        ul
          position absolute
          top 45px
          left 0px
          text-align center
          font-size 24px
        li
          width 140px
          height 50px
          float left
          border 1px solid #CCC
          margin 40px 20px 0 20px
          background #FAFAFA
          color #333333
          display flex
          justify-content center
          align-items center
  .icon-active
    transition all 1s
    transform rotate(180deg)
    transform-origin center
  .icon-leave
    transition all 1s
    transform rotate(0deg)
    transform-origin center

</style>
