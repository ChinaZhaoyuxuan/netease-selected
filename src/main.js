// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueScroller from 'vue-scroller'
import store from './store'
import './mock/mockServer'
import 'lib-flexible/flexible'
import commonFooter from './components/Footer/commonFooter'
import commonheader from './components/Header/header'
import {Button,Field} from 'mint-ui'
import 'mint-ui/lib/style.css'
import './validate'


Vue.component(Button.name,Button)
Vue.component(Field.name, Field);
Vue.component('commonFooter',commonFooter)
Vue.component('commonheader',commonheader)

Vue.use(VueScroller)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
