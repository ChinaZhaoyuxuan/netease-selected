<template>
	<div id="TimeTobuyWrap">
    <div class="TimeHeader">
      <p class="headerleft">限时购</p>
      <div class="headerTime">
        <span>00</span>
        <b>:</b>
        <span>00</span>
        <b>:</b>
        <span>00</span>
      </div>
      <p class="headerMore">更多<i class="iconfont icon-you"></i></p>
    </div>
    <ul class="shopList">
      <li v-for="(item,index) in flashSale" :key="index">
        <img :src="item.picUrl">
        <div class="priceWrap">
          <span class="newprice">¥{{item.activityPrice}}</span>
          <span class="oldprice">¥{{item.originPrice}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: 'timetobuy',
    computed:{
      ...mapState({
        flashSale:state=>state.home.flashSale.itemList
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../common/stylus/mixins.styl"
  #TimeTobuyWrap
    width 100%
    height 650px
    background-color #fff
    margin-top 30px
    .TimeHeader
      width 100%
      height 100px
      .headerleft
        float left
        font-size 32px
        color #333333
        padding 30px 0 0 25px
      .headerTime
        float left
        padding 35px 0 0 25px
        span
          width 54px
          height 54px
          text-align center
          background-color #000
          color #fff
          padding 3px 0
          border-radius 5px
          font-size 30px
      .headerMore
        float right
        padding 30px 25px 0 0
        text-align center
        font-size 32px
        color #333333
        i
          display block
          font-size 30px
          float right
          margin 5px 5px
  
    .shopList
      display flex
      justify-content space-around
      flex-wrap wrap
      li
        width 220px
        height 260px
        margin-top 5px
      img
        width 100%
        background #F5F5F5
        border-radius 10px
      .priceWrap
        text-align center
        .newprice
          color $red
          font-size 32px
        .oldprice
          font-size 24px
          color #7f7f7f
          text-decoration line-through
</style>
