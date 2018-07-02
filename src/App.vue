<template>
  <v-app>
    <!-- <support-modal></support-modal> -->
    <navigation></navigation>
    <div>
      <router-view></router-view>
    </div>
  </v-app>

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
*
{
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
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
