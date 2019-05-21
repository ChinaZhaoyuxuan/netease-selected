<template>
  <div class="register_content">
    <div id="logoWrap">
      <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" data-reactid=".0.1.0.1.0.0">
    </div>
    <div class="phone_wrap" >
      <div class="phone">
        <input type="text" placeholder="邮箱账号" >
      </div>
      <div class="codewrap">
        <input class="msg-code" type="text" placeholder="密码">
        <button class="get_code">获取验证码</button>
      </div>
      <div class="forget">
        <p class="registerUser">注册账号</p>
        <p class="forgetPwd">忘记密码</p>
      </div>
      <button class="register" >注册</button>
      <mt-button size="normal" class="btnEmail" @click="$router.push('/personal/login')">其他方式登录</mt-button>
    </div>
  </div>
</template>
<script>
  export default {
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../common/stylus/mixins.styl"
  .register_content
    height 100%
    background-color #fff
    padding 0 40px
    #logoWrap
      width 100%
      height 210px
      text-align center
      display flex
      justify-content center
      margin-top 1px
      img
        width 168px
        height 60px
        margin-top 20px
    .regis-title
      margin-top 28px
      display flex
      justify-content center
      span
        font-size 36px
        color #333
    .phone_wrap
      .btnEmail
        width 670px
        height 94px
        border 1px solid $red
        margin 30px auto
        font-size 28px
        text-align center
        display flex
        justify-content center
        background-color #fff
        align-items center
        color $red
      .phone, .codewrap, .pwd, .email, .confirm_pwd
        width 670px
        height 90px
        border-bottom 1px solid #ddd
        margin-top 20px
        clearFix()
        .get_code
          color #333333
          background-color #fff
        input
          float left
          margin 28px 0
          font-size 28px
          color #666
          border 1px solid rgba(0,0,0,0)
          outline none
        button
          float right
          width 168px
          height 58px
          font-size 28px
          color #333
          outline none
          margin 15px 10px 0 0
          background-color $red
          border-radius 10px
          border 1px solid #333
      .register
        width 670px
        height 100px
        font-size 28px
        color #fff
        outline none
        background-color $red
        border 1px solid $red
        margin-top 90px
      .forget
        font-size 28px
        color #7f7f7f
        .registerUser
          position absolute
          left 50px
        .forgetPwd
          position absolute
          right 50px
  
</style>
