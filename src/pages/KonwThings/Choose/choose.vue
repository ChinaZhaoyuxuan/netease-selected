<template>
  <div id="#selectWrap">
    <div class="swiperWrap">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img class="swiper-lazy" src="https://yanxuan.nosdn.127.net/5dabfaf695b65513493dc29f11727e78.jpg?imageView&amp;quality=75&amp;thumbnail=670x371">
          </div>
          <div class="swiper-slide">
            <img class="swiper-lazy" src="https://yanxuan.nosdn.127.net/fe726ef94ce6a26a666e84361dbd6f4d.jpg?imageView&amp;quality=75&amp;thumbnail=670x371">
          </div>
          <div class="swiper-slide">
            <img class="swiper-lazy" src="https://yanxuan.nosdn.127.net/5dabfaf695b65513493dc29f11727e78.jpg?imageView&amp;quality=75&amp;thumbnail=670x371">
          </div>
        </div>
      </div>
    </div>
    
    <div class="tellme">
      <p class="tell1">建议征集</p>
      <p class="tell2">告诉我们，你的好物标准</p>
      <div class="imgwrap">
        <div><img data-original="" data-src="https://yanxuan.nosdn.127.net/ec0377213374de038e810cfffce17130.jpg?imageView&amp;quality=75&amp;thumbnail=272x200" class="swiper-lazy J_lazyload_pre J_lazyload_end" data-reactid=".0.1.0.1.1.0.0.0" src="https://yanxuan.nosdn.127.net/ec0377213374de038e810cfffce17130.jpg?imageView&amp;quality=75&amp;thumbnail=272x200"></div>
        <div class="txt">
          <span>快来给主子挑选靠谱冻干~</span>
        </div>
      </div>
      <div class="txtwrap">
        铲屎官看过来，如果我们推出冻干猫粮，你会希望有哪些口味呢？比如鸡肉、羊肉、牛肉、鱼肉等；是否会希望推出小克数试吃装？理想的营养配比是怎样呢？快来说一说吧~
      </div>
      <div class="bottombtn">
        我要建议
      </div>
    </div>

  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    name: 'Choose',
    mounted () {
      new Swiper ('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
          type: 'custom',
        },
        type: 'custom',
        loop: true,
        autoplay:true,
        lazy:true,
        loadingClass:'swiper-lazy-loading',
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #selectWrap
  .swiper-container
    width 90%
    height 400px
    img
      width 100%
  .tellme
    text-align center
    .tell1
      font-size 30px
      color #333333
    .tell2
      font-size 24px
      color #7f7f7f
    .imgwrap
      width 650px
      height 250px
      background-color #f4f4f4
      margin 0 auto
      display flex
      align-items center
      img
        width 300px
        height 200px
        margin-left 20px
        

    .txt
      font-size 28px
      color #333333
      span
        padding 0 30px
  
  
    
  .txtwrap
    width 700px
    height 100px
    margin 30px auto
    color #7f7f7f
    font-size 24px
    line-height 30px
  .bottombtn
    width 600px
    height 80px
    border 1px solid #000
    margin 0 auto
    text-align center
    color #333333
    font-size 28px
    display flex
    justify-content center
    align-items center
</style>
