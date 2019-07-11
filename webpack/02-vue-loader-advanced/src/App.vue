<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <button @click="update">更新消息</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    update(){
      this.msg = 'Welcome to Your Electron First App'
    }
  }
}
</script>

<style lang="stylus" scoped>
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
  h1
    font-weight normal
  button 
    padding 25px 45px
    background-color #fff
</style>
