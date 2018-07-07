<template>
<div>
  <img src="../../../static/legislator_image_banner.png" alt="legislator_image_banner" class="legislator_banner">
  <v-layout row wrap>
    <profile v-on:showSupportModal="showModal = true"></profile>
    <v-flex xs10 sm8 offset-xs1 offset-sm0>
      <contents v-bind:content_info="sendContentInfo()"></contents>
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
  },
  methods: {
    sendContentInfo() {
      return {
        endItem: 12,
        PAGENUM: 12, //페이징 단위
        DOTNUM: 4, //버튼개수
      }
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
