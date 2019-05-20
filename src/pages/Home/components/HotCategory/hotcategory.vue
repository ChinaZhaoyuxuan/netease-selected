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
    <ul id="homeLife">
      <li>
        <p>居家生活榜</p>
        <img src="https://yanxuan.nosdn.127.net/c0b3d87a8066b33c68294ce60f8e1920.png?" alt="热销榜">
      </li>
      <li>
        <p>服饰鞋包榜</p>
        <img src="http://yanxuan.nosdn.127.net/d84c728c164a77a8c5f0ca153d21fe69.png?" alt="热销榜">
      </li>
      <li>
        <p>美食酒水榜</p>
        <img src="http://yanxuan.nosdn.127.net/59eb7e52ab114c894a8179bc2991122b.png?" alt="热销榜">
      </li>
      <li>
        <p>数码家电榜</p>
        <img src="http://yanxuan.nosdn.127.net/cf86ce7b36cc90f5c9b1cbbc5eafd737.png?" alt="热销榜">
      </li>
      <li>
        <p>个护清洁榜</p>
        <img src="http://yanxuan.nosdn.127.net/ae7f88bdae80b15ac656b0c76f356179.jpg?" alt="热销榜">
      </li>
      <li>
        <p>母婴亲子榜</p>
        <img src="http://yanxuan.nosdn.127.net/873505d4b94744861ba243e321868530.png?" alt="热销榜">
      </li>
      <li>
        <p>运动旅行榜</p>
        <img src="http://yanxuan.nosdn.127.net/83e9f1b99b484885f88b5c5443f87cec.png?" alt="热销榜">
      </li>
      <li>
        <p>全球特色榜</p>
        <img src="http://yanxuan.nosdn.127.net/82de8fdea1c8bba21b26099612ff5605.png?" alt="热销榜">
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'hotcategory'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../common/stylus/mixins.styl"
  #Hotcategory
    width 100%
    height 754px
    background-color #fff
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
      width 330px
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
      width 330px
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
  #homeLife
    width 100%
    clearFix()
    display block
    li
      float left
      width 165px
      height 180px
      overflow hidden
      text-align center
      background #F5F5F5
      margin-top 20px
      margin-left 5px
      &:nth-of-type(1)
        margin-left 40px
      &:nth-of-type(5)
        margin-left 40px
      p
        font-size 26px
        color #333333
      img
        width 120px
        height 120px
        margin 15px auto
</style>
