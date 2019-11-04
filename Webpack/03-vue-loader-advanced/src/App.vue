<template>
  <div class="container css/postcss">
    <h1 class="less">Hello World</h1>
    <div class="content sass" v-show="show">
      <p>本节将使用webpack来打包单独的VUE文件，并抽离其中的CSS，通过其它插件将JS/CSS压缩并自动插入到模板当中，其中CSS使用autoprefixer插件为该文件自动添加前缀</p>
      <ul class="stylus">
        <li>1. CSS使用less/sass/stulus/postcss，分别为三种不同的css语言通过不同插件来转化成CSS文件</li>
        <li>2. 使用Babel来转化JS，并加入JSLint来提高代码严谨率</li>
        <li>3. 使用Babel来转化JS</li>
      </ul>
    </div>
    <button @click="showContent">本章内容</button>
  </div>
</template>
<script>
export default {
  name: 'app',
  data(){
    return {
      show: false
    }
  },
  methods: {
    showContent(){
      this.show = !this.show
    }
  }
}
</script>

<style scoped>
.container{
  background: #f8f9f0
}
</style>

<style lang="less" scoped>
h1{
  letter-spacing: 5px
}
</style>

<style lang="scss" scoped>
.content{
  border: 1px dashed #000
}
</style>

<style lang="stylus" scoped>
ul>li
  list-style none
</style>
