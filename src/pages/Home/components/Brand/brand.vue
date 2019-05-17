<template>
	<div id="BrandWrap">
    <div class="topText">
      <p>品牌制造商直供</p>
      <p>更多<i class="iconfont icon-you"></i></p>
    </div>
    <div>
      <div>
        <p></p>
        <p></p>
      </div>
      <div>
        <p></p>
        <p></p>
      </div>
      <div>
        <p></p>
        <p></p>
      </div>
      <div>
        <p></p>
        <p></p>
      </div>
    </div>
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
    height 800px
    background-color #fff
    margin-top 20px
    .topText
      display flex
      justify-content space-around
      font-size 32px
      text-align center
      i
        font-size 25px
      p
        margin-top 15px
      

</style>
