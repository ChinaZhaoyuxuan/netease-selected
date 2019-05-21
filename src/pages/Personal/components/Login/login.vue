<template>
  <div id="LoginContent">
    <div id="logoWrap">
      <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" data-reactid=".0.1.0.1.0.0">
    </div>
    <div id="btnWrap">
     <div @click="$router.push('/personal/phonelogin')"><mt-button type="danger" class="btnPhone"><i class="iconfont icon-shouji"></i>手机号码登录</mt-button></div>
   <div @click="$router.push('/personal/emaillogin')"><mt-button size="normal" class="btnEmail"><i class="iconfont icon-email"></i>邮箱帐号登录</mt-button></div>
      <a href=""  class="btnRegister" @click.prevent="gotoRegister('/personal/register')">手机号快捷注册<i class="iconfont icon-you"></i></a>
    </div>
    <div class="contactInformation ">
      <ul >
        <li>
          <i class="iconfont icon-weixin"></i>
          微信
        </li>
        <li>
          <i class="iconfont icon-qq"></i>
          QQ
        </li>
        <li>
          <i class="iconfont icon-xinlang"></i>
          微博
        </li>
      </ul>
    </div>
  </div>
  
</template>

<script>

  export default {
    name: 'login',
    methods:{
      gotoRegister(path){
        this.$router.push(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../common/stylus/mixins.styl"
  #LoginContent
    position fixed
    width 100%
    height 100%
    background #F2F5F4
    overflow hidden
    #logoWrap
      width 100%
      height 410px
      text-align center
      display flex
      justify-content center
      align-items center
      img
        width 268px
        height 90px
    #btnWrap
      width 100%
      height 400px
      position relative
      .btnPhone
        width 670px
        height 94px
        background-color $red
        margin 0px auto
        font-size 28px
        text-align center
        display flex
        justify-content center
        align-items center
        i
          font-size 40px
          color #fff
          display inline-block
          vertical-align middle
          padding-right 10px
      .btnEmail
        width 670px
        height 94px
        border solid $red
        margin 30px auto
        font-size 28px
        text-align center
        display flex
        justify-content center
        align-items center
        color $red
        i
          font-size 40px
          color $red
          display inline-block
          vertical-align middle
          padding-right 10px
     
    
      .btnRegister
        width 670px
        height 40px
        margin 0 auto
        font-size 28px
        text-align center
        display flex
        justify-content center
        align-items center
        color #333333
        i
          font-size 30px
          display inline-block
          vertical-align middle
          padding-right 10px
  
          
    .contactInformation
      position fixed
      bottom 0
      left 0
      width 100%
      height 100px
      background #F2F5F4
      float left
      ul
        display flex
        justify-content center
        li
          width 180px
          height 35px
          text-align center
          font-size 28px
          color #7f7f7f
          border-right 1px solid #000
          &:nth-of-type(3)
            border-right 0px
          i
            font-size 35px
</style>
