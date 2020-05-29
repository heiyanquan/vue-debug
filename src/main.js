// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
import Vue from '../vue/dist/vue'

Vue.config.productionTip = false

let Child = {
  template: '<div class="child">' +
  '<slot text="Hello " :msg="msg"></slot>' +
  '</div>',
  data() {
    return {
      msg: 'Vue'
    }
  }
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: `<div class="wrapper">
    <p class="p1">111</p>
    <div class="div1">{{title}}</div>
  </div>`,
  data () {
    return {
      title: '我是标题',
      msg: '我是内容',
      desc: '其它信息',
      list: ['aaa', 'bbb', 'ccc']
    }
  },
  components: {
    Child
  },
  methods: {
    
  },
})
