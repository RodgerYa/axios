// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Header)
Vue.use(Footer)

Vue.component('y-header',Header)
Vue.component('y-footer',Footer)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
