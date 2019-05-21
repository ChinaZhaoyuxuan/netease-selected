<template>
<div id="personalWrap">
  <personalNav  v-show="$route.meta.personalNavShow"/>
  <router-view/>
</div>
</template>

<script>
  import personalNav from './components/personalNav/personalNav'
  import Login from './components/Login/login'
  import Register from './components/Register/register'
  import PhoneLogin from './components/PhoneLogin/phonelogin'
  import EmailLogin from './components/EmailLogin/emaillogin'
  export default {
    name: 'personal',
    components:{
      'personalNav':personalNav,
      'Login':Login,
      'Register':Register,
      'PhoneLogin':PhoneLogin,
      'EmailLogin':EmailLogin
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
   #personalWrap
     overflow hidden
     background #F2F5F4
     
     

</style>
