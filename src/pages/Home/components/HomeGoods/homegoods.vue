<template>
  <div>
    <ul id="HomeGoodsUL">
      <li>
        <img class="img" src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" data-reactid=".0.4.0.0.0.0.$0/=1$0.$0.0.0">
        <span>新品首发</span>
      </li>
      <li>
        <img class="img" src="https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" data-reactid=".0.4.0.0.0.0.$0/=1$0.$1.0.0">
        <span>居家生活</span>
      </li>
      <li>
        <img class="img" src="https://yanxuan.nosdn.127.net/f90310e950469586307d8595d0ee9c81.png" data-reactid=".0.4.0.0.0.0.$0/=1$0.$2.0.0">
        <span>服饰鞋包</span>
      </li>
      <li>
        <img class="img" src="https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png" data-reactid=".0.4.0.0.0.0.$0/=1$0.$4.0.0">
        <span>美食酒水</span>
      </li>
      <li>
        <img class="img" src="https://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png" data-reactid=".0.4.0.0.0.0.$0/=1$0.$5.0.0">
        <span>个护清洁</span>
      </li>
      <li>
        <img class="img" src="https://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png" data-reactid=".0.4.0.0.0.0.$0/=1$0.$5.0.0">
        <span>母婴亲子</span>
      </li>
      <li>
        <img class="img" src="https://yanxuan.nosdn.127.net/5c088559ebcc3f0ffcda663f04dfbeb2.png" data-reactid=".0.4.0.0.0.0.$0/=1$0.$6.0.0">
        <span>运动旅行</span>
      </li>
      <li>
        <img class="img" src="https://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png" data-reactid=".0.4.0.0.0.0.$0/=1$0.$7.0.0">
        <span>数码家电</span>
      </li>
      <li>
        <img class="img" src="https://yanxuan.nosdn.127.net/f7281169d4e82d5d8d52aa1fec83fe01.png" data-reactid=".0.4.0.0.0.0.$0/=1$0.$8.0.0">
        <span>全球特色</span>
      </li>
      <li>
        <img class="img" src="https://yanxuan.nosdn.127.net/861a521a6f53e3399205f18daa23cddc.gif" data-reactid=".0.4.0.0.0.0.$0/=1$0.$9.0.0">
        <span>超级会员</span>
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
  export default {
    name: 'homegoods'
    
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
          width 342px
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
