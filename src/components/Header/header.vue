<template>
  <div id="headeWrap">
    <h1 class="logo">
      <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt=""></h1>
    <div class="search">
      <i class="iconfont icon-iconfontzhizuobiaozhun22"></i>
      <span >搜索商品, 共22494款好物</span>
    </div>
    <div class="btn">
      <button>登陆</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'v-header'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #headeWrap
    display flex
    justify-content space-around
    align-items center
    margin-top 15px
    .logo
      flex 2
      height 40px
      display flex
      margin-left 25px
      font-size 12px
    .search
      flex 5
      height 56px
      border-radius 5px
      border none
      background-color rgba(0,0,0,.1)
      padding 5px 0 0 30px
      i
        font-size 40px
      span
        color #666
        font-size 30px
    .btn
      flex 1
      height 40px
      line-height 40px
      margin 0 auto
      text-align center
      button
        width 70px
        height 40px
        line-height 40px
        font-size 24px
        color: #b4282d
        border 1px solid #b4282d
        border-radius 5px
        background-color #fff
        outline none
      


</style>
