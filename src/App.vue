<template>
  <v-app>
    <navigation></navigation>
    <router-view></router-view>
    <home-footer></home-footer>
  </v-app>

</template>

<script>
import supportModal from './pages/legislator/components/SupportModal'
import Navigation from '@/components/Navigation'
import HomeFooter from '@/components/HomeFooter'

export default {
  name: 'App',
  components: {
    Navigation,
    supportModal,
    HomeFooter
  }
}

</script>

<style>
*
{
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
a
{
  text-decoration: none;
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
  font-family: 'NanumBarunGothicUltraLight';
  src: url('./assets/NanumBarunGothicUltraLight.ttf') format('truetype');
}
</style>
