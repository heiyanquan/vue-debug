import Vue from '../vue/dist/vue'
import App from './App.vue'

Vue.config.productionTip = false

const _vm = new Vue({
  render: h => h(App),
}).$mount('#app')
