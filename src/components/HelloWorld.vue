<template>
  <div class="hello_box">
    <h3>hello components</h3>
    <!-- <h4>{{ msg }}</h4> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      firstName: 'Foo',
      lastName: 'Bar',
    }
  },
  mounted() {
    console.log('hello world mounted')
  },
  updated() {
    console.log('hello updated', this.msg)
  },
  methods: {
    updateName() {
      this.firstName = 'firstName Foo'
      this.lastName = 'lastName Bar'
    }
  }
}
</script>

<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
