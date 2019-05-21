<template>
  <div>
    <div id="navContent">
      <i class="iconfont icon-home1 gohome" @click="$router.push('/home')"></i>
      <div class="wylogo">
        <p :class="{active:$route.path===('/konwthings/discover')}" @click="goto('/konwthings/discover')">发现</p>
        <p :class="{active:$route.path===('/konwthings/choose')}" @click="goto('/konwthings/choose')">甄选家</p>
      </div>
      <div>
        <i class="iconfont icon-iconfontzhizuobiaozhun22 goselect"></i>
        <i class="iconfont icon-gouwuche2 goshop"></i>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'konwthigsheader',
    data(){
      return{
        active:''
      }
    },
    methods:{
      goto(path){
          this.$router.push(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
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
      display flex
      align-items center
      width 240px
      height 100px
      position: absolute;
      top 0
      right 0
      bottom 0
      left 0
      margin: auto;
      font-size 28px
      color #7F7F7F
      p
        width 150px
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

    
  .active
    color $red
    font-weight bold
    font-size 40px
</style>
