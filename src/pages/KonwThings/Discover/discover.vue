<template>
  <div id="discover">
    <div class="navwrap">
      <ul class="navlist">
        <li>推荐</li>
        <li>好货内部价</li>
        <li>回购榜</li>
        <li>晒单</li>
        <li>开发者日记</li>
        <li>达人</li>
        <li>上新</li>
        <li>HOME</li>
      </ul>
    </div>
    <div class="find_container">
      <div>
        <ul v-for="(item, index) in data" :key="index">
          <li v-for="(topic, index) in item.topics" :key="index">
            <updownShow v-if="topic.style===1" :topic="topic"></updownShow>
            <leftrightShow v-if="topic.style===2" :topic="topic"></leftrightShow>
            <scrollShow v-if="topic.style===3" :topic="topic"></scrollShow>
            <picShow v-if="topic.style===4" :topic="topic"></picShow>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  import updownShow from './components/updownShow'
  import leftrightShow from './components/leftrightShow'
  import picShow from './components/picShow'
  //import {reqRecommendData} from '../../../api'
  export default {
    name: 'Discover',
    computed: {
      ...mapState({
        data:state=> state.recommend.recommdata
      })
    },
    async mounted () {
      new BScroll('.navwrap', {
        scrollX: true
      })
      new BScroll('.find_container', {
        scrollY: true
      })
      const result= this.$store.dispatch('getRecommendDate')
      // const result = await reqRecommendData()
     console.log(result)
  
    },
    components:{
      'updownShow':updownShow,
      'leftrightShow':leftrightShow,
      'picShow':picShow
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #discover
    background #f4f4f4
    width 100%
    height 100%
    overflow hidden
    .find_container
      margin-top 20px
      width 100%
      max-height 1070px
      overflow hidden
      box-sizing border-box
      padding-top 30px
      font-size 28px
      background-color #fff
    .navwrap
      display flex
      background-color #fff
      margin-top 5px
      .navlist
        display flex
        height 80px
        list-style none
        text-align center
        font-size 28px
        margin-top 15px
        li
          width 150px
          height 40px
          margin-left 15px
    
</style>
