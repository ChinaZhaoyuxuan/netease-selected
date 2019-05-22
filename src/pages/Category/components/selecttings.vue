<template>
  <div>
    <div class="mask">
      <div>
        <input type="text" :placeholder="defaultKeywords[2].keyword" v-model="searchlist" @keyup="handlechange(searchlist)" @click="handlec">
        <p @click="$router.push('/home')">取消</p>
        <ul v-if="on">
          <li v-for="(item,index) in hotKeywordVOList">{{item.keyword}}</li>
        </ul>
        <ul v-if="off">
          <li v-for="(item,index) in searchdata">{{item}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  var timer
  export default {
    name: 'selecttings',
    data () {
      return {
        searchlist: '',
        on: true,
        off: false
      }
    },
    computed: {
       ...mapState({
          searchdata: state => state.searchresult.searchdata,
          defaultKeywords:state => state.hotshop.hotdata.defaultKeywords,
          hotKeywordVOList:state => state.hotshop.hotdata.hotKeywordVOList
      }),
    },
    mounted () {
      this.$store.dispatch('getHotdata')
    },
    methods: {
       handlechange (searchlist) {
         clearTimeout(timer)
         timer=setTimeout(
            ()=> {
             this.$store.dispatch('getSearchdata', searchlist)
           }
           ,300)
      },
      handlec(){
          this.on=false
          this.off=true
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .mask
    width 100%
    height 100%
    display block
    background-color #f4f4f4
    position fixed
    top 0px
    left 0
    
    p
      float right
      font-size 28px
      color #333333
      margin-top 35px
      margin-right 30px
    
    input
      float left
      width 590px
      height 40px
      margin 30px
      font-size 24px
      padding 5px
    
    div
      width 100%
      height 30%
      background #fff
      position relative
      top 0
      left 0
      
      ul
        position absolute
        top 80px
        left 0px
        text-align center
        font-size 20px
      
      li
        width 100px
        height 50px
        float left
        border 1px solid #CCC
        margin 40px 20px 0 20px
        background #FAFAFA
        color #333333
        display flex
        align-items center
        justify-content center

</style>
