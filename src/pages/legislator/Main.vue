<template>
<div>
  <img src="../../../static/legislator_image_banner.png" alt="legislator_image_banner" class="legislator_banner">
  <v-layout row wrap>
    <profile v-on:showSupportModal="showModal = true"></profile>
    <v-flex xs10 sm8 offset-xs1 offset-sm0>
      <contents></contents>
    </v-flex>
  </v-layout>
  <support-modal v-if="showModal"></support-modal>  
</div>
</template>

<script>
import Contents from '../../components/Contents'
import Profile from './components/Profile'
import SupportModal from './components/SupportModal'

export default {
  name: 'Legislator',
  components: { Contents, Profile, SupportModal },
  data () {
    return {
      showModal: false,
    }
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
