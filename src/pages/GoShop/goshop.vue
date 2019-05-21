<template>
  <div id="goshopWrap">
    <div class="shopheader">
      <span class="shuopcar">购物车</span>
      <span class="getcoupon" @click="$router.push('/personal/login')">领券</span>
    </div>
    <ul class="shoplist">
      <li>30天无忧退款</li>
      <li>48小时快速退款</li>
      <li>满88元免邮费</li>
    </ul>
    <div class="imgWrap">
      <p class="addsome">去添加点什么吧</p>
    </div>
    <div class="tologin">
      <div @click="$router.push('/personal/login')"><mt-button type="danger" class="btnPhone">手机号码登录</mt-button></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'goshop'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  #goshopWrap
    background-color #f4f4f4
    width 100%
    height 100%
    position absolute
    .shopheader
      width 100%
      height 100px
      background-color #fff
      .shuopcar
        float left
        font-size 36px
        margin 20px 0 0 40px
      .getcoupon
        float right
        font-size 32px
        margin 20px 40px 0 0px
        color $red
    .shoplist
      display flex
      justify-content space-around
      font-size 24px
      color: #666
      text-align: center
      margin-top 20px
      li
        list-style circle
    .imgWrap
      width 240px
      height 240px
      position absolute
      top 0
      right 0
      bottom 0
      left 0
      margin auto
      background-repeat no-repeat
      background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png)
      .addsome
        position absolute
        top 200px
        left 20px
        font-size 28px
        color: #999
    .tologin
      position relative
      .btnPhone
        position absolute
        top 680px
        bottom 0
        left 0
        right 0
        margin auto
        width 450px
        height 100px
        background-color $red
        margin 0px auto
        font-size 28px
        text-align center
        display flex
        justify-content center
        align-items center
        
</style>
