<template>
	  <div id="popularity">
      <div class="topTitle">
        <p class="HotTop">人气推荐</p>
        <p class="more">更多<i class="iconfont icon-you"></i></p>
      </div>
      <div class="TopContent">
        <div class="leftWrap" v-if="popularlist.length">
          <img :src="popularlist[0].scenePicUrl" alt="">
        </div>
        <div class="rightWrap" v-if="popularlist.length">
          <p class="preference">{{popularlist[0].itemTagList[0].name}}</p>
          <p class="shoptitle">{{popularlist[0].name}}</p>
          <p class="shopdesc">{{popularlist[0].simpleDesc}}</p>
          <p class="shopprice">￥{{popularlist[0].counterPrice}}</p>
        </div>
      </div>
      <div class="shopdetails" v-if="popularlist.length">
        <div class="left" >
          <img :src="popularlist[1].listPicUrl" alt="">
          <div><span>{{popularlist[1].name}}</span><i>¥{{popularlist[1].counterPrice}}</i></div>
          <div class="bottomText">每满499减80券</div>
        </div>
        <div>
          <img :src="popularlist[2].listPicUrl" alt="">
          <div><span>{{popularlist[2].name}}</span><i>¥{{popularlist[2].counterPrice}}</i></div>
          <div class="bottomText">每满299减60券</div>
        </div>
        <div>
          <img :src="popularlist[3].listPicUrl" alt="">
          <div><span>{{popularlist[3].name}}</span><i>¥{{popularlist[2].counterPrice}}</i></div>
          <div class="bottomText">加价购</div>
        </div>
      </div>
    </div>
</template>

<script>
  import {mapState}from 'vuex'
  export default {
    name: 'popularity',
    computed:{
      ...mapState({
        popularlist:state=>state.home.popularlist
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../common/stylus/mixins.styl"
  #popularity
    width 100%
    height 850px
    background-color #fff
    margin-top 25px
    .topTitle
      width 100%
      height 100px
      font-size 35px
      color #333333
      .HotTop
        float left
        padding 30px 0 0 25px
      .more
        float right
        padding 30px 25px 0 0
        text-align center
        font-size 32px
        i
          display block
          font-size 30px
          float right
          margin 5px 5px
    .TopContent
      width 700px
      height 300px
      background #FEF0DF
      margin 0 auto
      .leftWrap
        width 310px
        height 300px
        overflow hidden
        float left
        img
          width 100%
      .rightWrap
          float right
          margin  50px 0 0 -25px
          .preference
            width 100px
            height 33px
            color $red
            border-radius 5px
            border 1px solid $red
            text-align center
            margin-top 35px
          p
            margin-top 5px
          .shoptitle
            font-size 24px
            color #333333
          .shopdesc
            width 250px
            font-size 20px
            color #7f7f7f
          .shopprice
            font-size 32px
            color $red
    .shopdetails
      display flex
      justify-content space-around
      div
        width 220px
        margin-top 30px
        &:nth-of-type(1)
          float left
          margin-left 10px
        &:nth-of-type(2)
          float left
        &:nth-of-type(3)
          float right
          margin-right 10px
      img
        width 100%
        background-color #f5f5f5
        border-radius 5px
      i
        font-size 26px
        color $red
        padding-left 5px
      span
        font-size 26px
        color #333333
      .bottomText
        text-align center
        width auto
        color $red
        border 1px solid $red
        border-radius 10px
        padding 3px
        margin 0 auto


</style>
