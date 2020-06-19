<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>homeData：</h1>
    <h2 class="h2_view">{{homeData}}</h2>
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
      homeData: 'homeData'
    }
  },
  mounted() {
    this.homeData = 'homeData111'
  }
}
</script>
