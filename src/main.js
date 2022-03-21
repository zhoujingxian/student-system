import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import './utils/element-ui'
import "./utils/axios"
import './styles/index.scss'
import store from './utils/vuex'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
