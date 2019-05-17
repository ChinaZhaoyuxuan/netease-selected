<template>
  <div id="swiperWrap">
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="https://yanxuan.nosdn.127.net/2bbc93483e59a3f83279ef04be0ae4bf.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">
      </div>
      <div class="swiper-slide">
        <img src="https://yanxuan.nosdn.127.net/be19ff539948b1a9a07b4003b742bde1.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">
      </div>
      <div class="swiper-slide">
        <img src="https://yanxuan.nosdn.127.net/383af1b21d93999da433afd7507cd380.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">
      </div>
      <div class="swiper-slide">
        <img src="https://yanxuan.nosdn.127.net/c1a535de9ea67a5d34d5c08fbc79de60.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
    <ul class="recommend">
      <li><i class="iconfont icon-airudiantubiaohuizhi-zhuanqu_yiwutong"></i>网易自营品牌</li>
      <li><i class="iconfont icon-dunpai1"></i>30天无忧退货</li>
      <li><i class="iconfont icon-50"></i>48小时快速退款</li>
    </ul>
</div>

</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    name: 'homeswiper',
    mounted () {
      new Swiper ('.swiper-container', {
          pagination: {
            el: '.swiper-pagination',
            type: 'custom',
            renderCustom: function (swiper, current, total) {
              let customPaginationHtml = '';
              for (let i = 0; i < total; i++) {
                // 判断哪个分页器此刻应该被激活
                if (i === current - 1) {
                  customPaginationHtml +=
                    '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>';
                } else {
                  customPaginationHtml +=
                    '<span class="swiper-pagination-customs"></span>';
                }
              }
              return customPaginationHtml;
            }
          },
        type: 'custom',
        loop: true,
        autoplay:true,
        lazy:true,
        loadingClass:'swiper-lazy-loading'
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../common/stylus/mixins.styl";
  #swiperWrap
    background-color #fff
    .swiper-container
      width 750px
      height 400px
      img
        width 100%
        height 100%
    .recommend
      display flex
      justify-content space-around
      color $red
      text-align center
      margin-top 15px
      i
        font-size 30px
        margin-right 5px
        display inline-block
        vertical-align middle
    
      li
        font-size 24px
        

</style>
