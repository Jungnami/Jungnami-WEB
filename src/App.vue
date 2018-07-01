<template>
  <div id="app">
    <support-modal></support-modal>
    <router-view/>
  </div>
</template>

<script>
import supportModal from './pages/legislator/components/SupportModal'

export default {
  name: 'App',
  components: {
    supportModal
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
</style>
