<template>
<div>
  <img src="../../../static/legislator_image_banner.png" alt="legislator_image_banner" class="legislator_banner">
  <v-layout row nowrap>
    <profile></profile>
    <v-flex xs10 sm8 offset-xs1>
      <!-- 여기에 컴포넌트 넣으면 됨 -->
    </v-flex>
  </v-layout>
</div>
</template>

<script>
import Contents from './components/Contents'
import Profile from './components/Profile'

export default {
  name: 'Legislator',
  components: { Contents, Profile },
  data () {
    return {}
  }
}
</script>

<style scoped>
.legislator_banner
{
  width: 100%;
  margin-bottom: 4.54vh;
}
</style>
