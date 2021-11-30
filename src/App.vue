<template>
  <div id="app">
    <div class="app" :class="mode">
      <Header :mode="mode" @toggle="toggle" />
      <Content :mode="mode" />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Content from '@/components/Content'
export default {
  name: 'app',
  data () {
    return {
      mode: 'light'
    }
  },
  components: {
    Header,
    Content
  },
  created () {
    window.addEventListener('keyup', this.keyPress)
  },
  methods: {
    keyPress (e) {
      if (e.key === 't') {
        this.toggle()
      }
    },
    toggle () {
      if (this.mode === 'dark') {
        this.mode = 'light'
      } else {
        this.mode = 'dark'
      }
    }
  }
}
</script>

<style>
 #app {
   font-family: 'Avenir', Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #2c3e50;
   margin-top: 60px;
 }
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}
.app {
  width: 100vw;
  min-height: 100vh;
  background: #F3F3F3;
  color: #15202B;
  transition: background 0.3s ease-in-out;
}
.dark {
  background: #192734;
  color: #E8E8E8;
}
</style>
