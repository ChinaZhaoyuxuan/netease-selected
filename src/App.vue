<template>
  <div>
    <commonHeader/>
    <commonFooter/>
    <router-view/>
  </div>
  
</template>

<script>
import commonFooter from './components/Footer/commonFooter'
import commonHeader from './components/Header/header'
export default {
  name: 'App',
  components: {
    'commonFooter':commonFooter,
    'commonHeader':commonHeader
  }
}
</script>

<style>

</style>
