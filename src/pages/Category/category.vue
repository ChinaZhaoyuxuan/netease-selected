<template>
  <div>
    <div id="headeWrap">
      <div class="search">
        <i class="iconfont icon-iconfontzhizuobiaozhun22"></i>
        <span >搜索商品, 共22494款好物</span>
      </div>
    </div>
    <div class="container">
      <div class="left_nav">
        <ul >
          <li v-for="(item,index) in categoryList" :key="index" @click="handle(index)" :class="{active:categoryList[itemindex]===item}">{{item.name}}</li>
        </ul>
      </div>
      <div class="content">
          <div>
            <div v-if="categoryList.length">
              <img :src="categoryList[itemindex].wapBannerUrl"  alt="">
              <ul>
                <li v-for="(itempic,index1) in categoryList[itemindex].subCateList" :key="index1">
                  <img class="" :src="itempic.wapBannerUrl" alt="">
                  <div>{{itempic.name}}</div>
                </li>
              </ul>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    name: "category",
    data(){
      return{
        itemindex:0
      }
    },
     mounted(){
      this.$store.dispatch('getCategoryList')
       new BScroll(".left_nav", {click: true,scrollY: true})
       new BScroll(".content", {click: true,scrollY: true})
    },
    computed:{
      ...mapState({
        categoryList: state => state.category.categoryList
      })
    },
    methods:{
      handle(index){
        this.itemindex = index
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .container
    overflow hidden
    display flex
    .left_nav
      width 162px
      height 1144px
      ul
        width 100%
        li
          width 100%
          height 50px
          margin-top 40px
          line-height 50px
          text-align center
          font-size 28px
          color #7e8c8d
          &:first-child
            margin-top 20px
          &.active
            color red
            border-left 6px solid red
    .content
      width 588px
      font-size 28px
      height 1144px
      div
        >img
          width 100%
        >ul
          width 528px
          margin-top 20px
          display flex
          flex-wrap wrap
          margin-left 25px
          color #333333
          >li
            width 144px
            height 216px
            margin-right 32px
            >img
              width 144px
              height 144px
              border-radius 50%
            >div
              width 144px
              height 72px
              text-align center
  #headeWrap
    width 100%
    text-align center
    padding 20px
    background-color #ffff
    z-index 199
    .search
      width 680px
      height 56px
      border-radius 5px
      border none
      background-color rgba(0,0,0,.1)
      padding-right 25px
      i
        font-size 40px
      span
        color #666
        font-size 30px
    



</style>
