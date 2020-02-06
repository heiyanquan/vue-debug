<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2 @click="toDemo">to demo page</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aboutData: 'aboutData'
    }
  },
  methods: {
    toDemo() {
      this.$router.push('/demo')
    }
  },
}
</script>