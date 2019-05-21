<template>
  <div>
    <KonwthigsHeader/>
    <router-view/>
  </div>
 
  
</template>

<script>
  import KonwthigsHeader from './KonwthigsHeader/konwthigsheader'
  export default {
    name: 'konwthings',
    components:{
      'KonwthigsHeader':KonwthigsHeader
    }
  }
</script>

<style scoped>

</style>
