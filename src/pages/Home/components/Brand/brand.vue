<template>
	<div id="BrandWrap">
    <div class="topText">
      <p class="bulid">品牌制造商直供</p>
      <p class="more">更多<i class="iconfont icon-you"></i></p>
    </div>
    <ul class="bulidWrap">
      <li>
        <p>海外制造商</p>
        <span>9.9元起</span>
      </li>
      <li>
        <p>CK制造商</p>
        <span>29.9元起</span>
      </li>
      <li>
        <p>新秀丽制造商</p>
        <span>34.9元起</span>
      </li>
      <li>
        <p>Nine West制造商</p>
        <span>219元起</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Brand'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #BrandWrap
    width 100%
    height 680px
    background-color #fff
    margin-top 20px
    .topText
      font-size 32px
      text-align center
      position relative
      i
        font-size 25px
      p
        margin-top 30px
        margin-bottom 20px
      .bulid
        float left
        margin-left 20px
      .more
        float right
        margin-right 20px
    .bulidWrap
      width 750px
      height 550px
      overflow hidden
      text-align center
      p
        font-size 28px
        color #333333
        margin-top 30px
      span
        font-size 24px
        color: #7f7f7f
      li
        float left
        width 343px
        height 260px
        background-repeat no-repeat
        background-size 100% 100%
        &:nth-of-type(1)
          margin 20px 5px 5px 20px
          background-image url("http://yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png")
        &:nth-of-type(2)
          margin 20px 0 5px 0
          background-image url("http://yanxuan.nosdn.127.net/c097be14110f769d58245cdad73e15c3.png")
        &:nth-of-type(3)
          margin 0 5px 5px 20px
          background-image url("http://yanxuan.nosdn.127.net/66a23d776f41cba70d00803a5231124b.png")
        &:nth-of-type(4)
          margin-bottom 5px
          background-image url("http://yanxuan.nosdn.127.net/3bf5a8a2f6eef284ecb40806ae9ce043.png")

   
      
</style>
