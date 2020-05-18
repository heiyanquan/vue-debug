// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
import Vue from '../vue/dist/vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: `<div class="wrapper">
    <div class="row" v-for="(item, index) in list">{{item.value}}</div>
  </div>`,
  data () {
    return {
      list: [
        {
          key: 'aaa',
          value: 'aaa'
        },
        {
          key: 'bbb',
          value: 'bbb'
        },
        {
          key: 'ccc',
          value: 'ccc'
        }
      ]
    }
  },
  methods: {
    
  },
})
