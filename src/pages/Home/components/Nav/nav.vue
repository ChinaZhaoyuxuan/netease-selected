<template>
  <div class="warp">
    <ul class="HomeNav">
      <li>推荐</li>
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
    <div class="iconfont icon-xiala-" id="toggle"></div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'v-nav',
    mounted () {
      new BScroll('.warp',{
        scrollX: true
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
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
  #toggle
    width 80px
    height 40px
    position absolute
    right 0
    top 105px
    text-align center
    font-size 24px
    background-color #fff


</style>
