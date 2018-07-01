<template>
  <div id="app">
    <navigation></navigation>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'

export default {
  name: 'App',
  components: { Navigation }
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
