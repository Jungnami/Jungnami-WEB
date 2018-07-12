<template>
  <v-app>
    <navigation></navigation>
    <router-view class="app_router_view"></router-view>
    <login v-if="loginPopUp"></login>
    <home-footer v-if="!$route.path.includes('/contents')"></home-footer>
  </v-app>

</template>

<script>
import supportModal from './pages/legislator/components/SupportModal'
import Navigation from '@/components/Navigation'
import HomeFooter from '@/components/HomeFooter'
import Login from '@/components/Login'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    Navigation,
    supportModal,
    HomeFooter,
    Login
  },
  computed: {
    ...mapGetters({
      loginPopUp: 'getOpenLoginPopUp'
    })
  },
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
.app_router_view
{
  margin-top: 7.5vh; 
}
input:focus, button:focus
{
  outline: none;
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
