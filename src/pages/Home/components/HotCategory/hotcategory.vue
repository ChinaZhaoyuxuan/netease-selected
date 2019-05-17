<template>
  <div id="Hotcategory">
    <div>
      <p class="HotTitle">类目热销榜</p>
      <div class="categoryHOT">
        <div class="HotText">
          <p>热销榜</p>
          <span></span>
        </div>
        <img
          data-original="https://yanxuan.nosdn.127.net/d9376c059ce15a774199e2cedc5a8d63.png?imageView&amp;quality=65&amp;thumbnail=200x200"
          data-src="https://yanxuan.nosdn.127.net/d9376c059ce15a774199e2cedc5a8d63.png?imageView&amp;quality=65&amp;thumbnail=200x200"
          class="swiper-lazy" data-reactid=".0.4.4.1.0.$0.1.0.0"
          src="https://yanxuan.nosdn.127.net/d9376c059ce15a774199e2cedc5a8d63.png?imageView&amp;quality=65&amp;thumbnail=200x200"
          style="display: inline;">
      </div>
      <div class="categoryGOOD">
        <div class="HotText">
          <p>好评榜</p>
          <span></span>
        </div>
        <img
          data-original="https://yanxuan.nosdn.127.net/92b15a92bca821428174429e23621201.png?imageView&amp;quality=65&amp;thumbnail=200x200"
          data-src="https://yanxuan.nosdn.127.net/92b15a92bca821428174429e23621201.png?imageView&amp;quality=65&amp;thumbnail=200x200"
          class="swiper-lazy" data-reactid=".0.4.4.1.0.$1.1.0.0"
          src="https://yanxuan.nosdn.127.net/92b15a92bca821428174429e23621201.png?imageView&amp;quality=65&amp;thumbnail=200x200"
          style="display: inline;">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'hotcategory'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #Hotcategory
    width 100%
    height 800px
    background red
    margin-top 30px
    .HotTitle
      font-size 32px
      color #333333
      width 100%
      height 100px
      display flex
      align-items center
      padding-left 30px
    p
      font-size 28px
      color #333333
    .categoryHOT
      width 340px
      height 200px
      float left
      background #F9F3E4
      display flex
      justify-content space-between
      border-radius 5px
      margin-left 30px
      span
        width 35px
        height 2px
        display inline-block
        background-color #000
      .HotText
          margin auto 15px
    .categoryGOOD
      width 340px
      height 200px
      float right
      background #EBEFF6
      display flex
      justify-content space-between
      border-radius 5px
      margin-right 30px
      span
        width 35px
        height 2px
        display inline-block
        background-color #000
      .HotText
        margin auto 15px
</style>
