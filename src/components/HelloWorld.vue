<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    this is home page
    <h2>{{firstComputedName}}</h2>
    <h3>{{secondComputedName}}</h3>
    <button @click="updateName">click button</button>
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
      list: ['aaa', 'bbb', 'ccc']
    }
  },
  methods: {
    updateName() {
      this.firstName = 'firstName Foo'
      this.lastName = 'lastName Bar'
    }
  },
  watch: {
    firstName (newVal, oldVal) {
      console.log(newVal)
      console.log(oldVal)
    },
    lastName (newVal, oldVal) {
      console.log(newVal)
      console.log(oldVal)
    }
  },
  computed: {
    firstComputedName() {
      return `${this.firstName}-${this.lastName}-computedaaa`
    },
    secondComputedName() {
      return `${this.lastName}-computedbbb`
    }
  },
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
