<template>
  <div>
    <ul id="HomeGoodsUL">
      <li v-for="(item,index) in navList" :key="index">
        <img class="img" :src="item.picUrl">
        <span>{{item.text}}</span>
      </li>
    </ul>
    <div id="NewPeople">
      <div class="textwrap">
        <hr>
          <span>新人专享</span>
        <hr>
      </div>
      <div class="gitwrap">
        <div class="newgift">
          <p>新人专享礼包</p>
          <img data-original="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" data-src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" class="swiper-lazy" data-reactid=".0.4.2.1.0.1.0.0" src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" style="display: inline;">
        </div>
        <div class="goupwrap">
          <div class="welfare">
            <p>福利社</p>
            <span>今日特价</span>
            <img data-original="https://yanxuan.nosdn.127.net/d10b03bdc9015a5300e0922c81a63f4f.png?imageView&amp;thumbnail=200x200&amp;quality=75" data-src="https://yanxuan.nosdn.127.net/d10b03bdc9015a5300e0922c81a63f4f.png?imageView&amp;thumbnail=200x200&amp;quality=75" class="swiper-lazy" data-reactid=".0.4.2.1.1.0.0.0.0.0" src="https://yanxuan.nosdn.127.net/d10b03bdc9015a5300e0922c81a63f4f.png?imageView&amp;thumbnail=200x200&amp;quality=75" style="display: inline;">
          </div>
          <div class="group">
            <p>新人拼团</p>
            <span>1元起包邮</span>
            <img data-original="https://yanxuan.nosdn.127.net/099ebb7e766ae8a55233846556cb6480.png?imageView&amp;thumbnail=200x200&amp;quality=75" data-src="https://yanxuan.nosdn.127.net/099ebb7e766ae8a55233846556cb6480.png?imageView&amp;thumbnail=200x200&amp;quality=75" class="swiper-lazy" data-reactid=".0.4.2.1.1.1.0.0.0.0" src="https://yanxuan.nosdn.127.net/099ebb7e766ae8a55233846556cb6480.png?imageView&amp;thumbnail=200x200&amp;quality=75" style="display: inline;">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: 'homegoods',
    computed: {
      ...mapState({
        navList: state => state.home.navList
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

    #HomeGoodsUL
      display flex
      justify-content space-around
      flex-wrap wrap
      text-align center
      font-size 24px
      background-color #fff
      padding-bottom 25px
      li
        img
          width 126px
    #NewPeople
      margin-top 25px
      width 100%
      height 640px
      background-color #fff
      .textwrap
        width 100%
        height 90px
        line-height 90px
        text-align: center
        display flex
        justify-content center
        color #333333
        span
          font-size 30px
        hr
          width 20px
          height 1px
          margin auto 15px
          background-color #000
      .gitwrap
        width 100%
        height 558px
        .newgift
          border-radius 5px
          float left
          width 310px
          height 434px
          margin-left 45px
          background #F9E9CF
          p
            font-size 28px
            position relative
            top 20px
            left 15px
          img
            position relative
            top 25px
            left 30px
        .goupwrap
          float right
          margin-right 45px
          .welfare
            width 314px
            height 214px
            border-radius 5px
            background #FBE2D3
            position relative
            p
              font-size 32px
              color #333333
              position absolute
              top 20px
              left 15px
            span
              font-size 24px
              color #7f7f7f
              position absolute
              top 70px
              left 15px
            img
              position absolute
              right 0
              bottom 0
          .group
            width 314px
            height  214px
            background #FFECC2
            border-radius 5px
            position relative
            margin-top 5px
            p
              font-size 32px
              color #333333
              position absolute
              top 20px
              left 15px
            span
              width 120px
              height 32px
              font-size 24px
              position absolute
              top 70px
              left 15px
              background #CBB693
              color #fff
              border-radius 5px
              text-align center
            img
              position absolute
              right 0
              bottom 0
    
</style>
