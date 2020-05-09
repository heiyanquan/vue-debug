<template>
  <div class="home">
    home page
    <HelloWorld>
      <h1 slot="header">{{title}}</h1>
      <p>{{msg}}</p>
      <p slot="footer">{{desc}}</p>
    </HelloWorld>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  components: {
    HelloWorld
  },
  data() {
    return {
      homeData: 'homeData',
      title: '我是标题',
      msg: '我是内容',
      desc: '其它信息'
    }
  },
  methods: {
  },
}
</script>
