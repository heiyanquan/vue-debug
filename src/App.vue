<template>
  <div id="home_wrapper" class="home_wrapper">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1 class="h2_view" ref="msgRef">{{msg}}</h1>
  </div>
</template>

<script>
export default {
  name: 'appView',
  data() {
    return {
      msg: 'init msg',
    }
  },
  mounted() {
    const { msgRef } = this.$refs
    this.msg = 'msg111'
    console.log(111, msgRef.innerHTML)
    this.$nextTick(() => {
      this.msg = 'msg222'
      console.log(222, msgRef.innerHTML)
    })
    this.$nextTick(() => {
      console.log(333, msgRef.innerHTML)
      this.$nextTick(() => {
        console.log(444, msgRef.innerHTML)
      })
    })
    Promise.resolve().then(() => {
      this.msg = 'msg333'
      console.log(555, msgRef.innerHTML)
    })
  },
  methods: {
  },
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
