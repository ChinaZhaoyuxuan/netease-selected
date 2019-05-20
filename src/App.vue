<template>
  <div>
    <commonHeader v-show="$route.meta.showHeader"/>
    <commonFooter v-show="$route.meta.showFooter"/>
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
