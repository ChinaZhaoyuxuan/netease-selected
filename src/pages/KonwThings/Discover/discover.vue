<template>
  <div id="discover">
    <div class="navwrap">
      <ul class="navlist">
        <li>推荐</li>
        <li>好货内部价</li>
        <li>回购榜</li>
        <li>晒单</li>
        <li>开发者日记</li>
        <li>达人</li>
        <li>上新</li>
        <li>HOME</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'Discover',
    mounted(){
      new BScroll('.navwrap', {
        scrollX: true
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #discover
    background #f4f4f4
    width 100%
    height 100%
    overflow hidden
    .navwrap
      display flex
      background-color #fff
      margin-top 5px
      .navlist
        display flex
        height 80px
        list-style none
        text-align center
        font-size 28px
        margin-top 15px
        li
          width 150px
          height 40px
          margin-left 15px
</style>
