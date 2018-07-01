<template>
  <div id="app">
    <support-modal></support-modal>
    <navigation></navigation>
  </div>
</template>

<script>
import supportModal from './pages/legislator/components/SupportModal'
import Navigation from '@/components/Navigation'

export default {
  name: 'App',
  components: { 
    Navigation,
    supportModal 
  }
}

</script>

<style>
@font-face {
  font-family: 'NanumBarunGothic';
  src: url('./assets/NanumBarunGothic.ttf') format('truetype');
}
@font-face {
  font-family: 'NanumBarunGothicBold';
  src: url('./assets/NanumBarunGothicBold.ttf') format('truetype');
}
@font-face {
  font-family: 'NanumBarunGothicLight';
  src: url('./assets/NanumBarunGothicLight.ttf') format('truetype');
}
@font-face {
  font-family: 'NanumBarunGothicLight';
  src: url('./assets/NanumBarunGothicLight.ttf') format('truetype');
}
</style>
