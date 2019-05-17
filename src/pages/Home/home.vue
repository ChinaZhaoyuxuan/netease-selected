<template>
    <div id="homeWrap">
        <HomeNav/>
        <div class="wrapp">
          <scroller class="content">
            <HomeSwiper/>
            <HomeGoods/>
            <Brand/>
          </scroller>
        </div>
        
    </div>
</template>

<script>
  import HomeNav from './components/Nav/nav'
  import HomeSwiper from './components/HomeSwiper/homeswiper'
  import HomeGoods from './components/HomeGoods/homegoods'
  import Brand from './components/Brand/brand'

  export default {
    name: 'home',
    components:{
      'HomeNav':HomeNav,
      'HomeSwiper':HomeSwiper,
      'HomeGoods':HomeGoods,
      'Brand':Brand
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #homeWrap
    background-color rgb(244,244,244)
    .content
      margin-top 21%
      background-color rgb(244,244,244)
    
</style>
