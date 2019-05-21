<template>
  <div class="register_content">
    <div id="logoWrap">
      手机号注册
    </div>
    <div class="phone_wrap" >
      <div class="phone">
        <input type="text" placeholder="请输入手机号" >
      </div>
      <div class="codewrap">
        <input class="msg-code" type="text" placeholder="请输入短信验证码">
        <button class="get_code">获取验证码</button>
      </div>
      <div class="pwd">
        <input type="password" placeholder="请输入密码" >
      </div>
      <!--<div class="confirm_pwd">-->
        <!--<input type="password" placeholder="请确认密码" >-->
      <!--</div>-->
      <button class="register" >注册</button>
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
      font-size 42px
      margin-top 1px
    .regis-title
      margin-top 28px
      display flex
      justify-content center
      span
        font-size 36px
        color #333
    .phone_wrap
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
        margin-top 30px
   

</style>
