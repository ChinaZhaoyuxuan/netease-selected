<template>
	  <div>
        <div id="navContent">
          <i class="iconfont icon-home1 gohome" @click="$router.push('/home')"></i>
          <i class="wylogo"></i>
          <div>
            <i class="iconfont icon-iconfontzhizuobiaozhun22 goselect"></i>
            <i class="iconfont icon-gouwuche2 goshop"></i>
          </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'personalNav',
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #navContent
    width 100%
    height 100px
    position relative
    background-color #fff
    .gohome
      font-size 50px
      float left
      position absolute
      top 20px
      left 20px
    .wylogo
      width 135px
      height 40px
      float left
      position: absolute;
      top 0
      right 0
      bottom 0
      left 0
      margin: auto;
      background-repeat no-repeat
      background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png")
    div
      width 120px
      text-align center
      margin-right 15px
      position absolute
      top 20px
      right 20px
      .goshop
        font-size 50px
        float right
      .goselect
        font-size 50px
        float left

</style>
