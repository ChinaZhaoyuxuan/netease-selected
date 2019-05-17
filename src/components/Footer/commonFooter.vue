<template>
    <ul id="swiper">
      <li :class="{active:$route.path==='/home'}" @click="goto('/home')">
        <div class="footericon" ><img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png" alt=""></div>
        <span>首页</span>
      </li>
      <li :class="{active:$route.path==='/category'}" @click="goto('/category')">
        <div class="footericon"><img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png" alt=""></div>
        <span>分类</span>
      </li>
      <li :class="{active:$route.path==='/konwthings'}" @click="goto('/konwthings')">
        <div class="footericon"><img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png" alt=""></div>        <span>识物</span>
      </li>
      <li :class="{active:$route.path==='/goshop'}" @click="goto('/goshop')">
        <div class="footericon"><img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png" alt=""></div>        <span>购物车</span>
      </li>
      <li :class="{active:$route.path==='/personal'}" @click="goto('/personal')">
        <div class="footericon"><img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png" alt=""></div>        <span>个人</span>
      </li>
    </ul>

</template>

<script>
  export default {
    name: 'commonFooter',
    methods:{
      goto(path){
        this.$router.push(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  #swiper
    position fixed
    bottom 0
    left 0
    width 100%
    display flex
    justify-content space-around
    font-size 12px
    z-index 99
    background-color #fff
    padding-bottom 10px
    li
      display flex
      flex-direction column
      justify-content space-around
      align-items center
      font-size 24px
      .footericon
        position relative
        width 40px
        height 40px
        overflow hidden
        img
          position absolute
          left 0
          top 0
          width 40px
          height 490px
      &:nth-of-type(1)
        img
          top -245px
      &:nth-of-type(2)
        img
          top -147px
      &:nth-of-type(3)
        img
          top -349px
      &:nth-of-type(4)
        img
          top -49px
          left -2px
      &:nth-of-type(5)
        img
          top -441px
      &.active
        color $red
        img
          transform translateY(49px)
          
 
        

</style>
