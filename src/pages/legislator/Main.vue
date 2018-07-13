<template>
<div v-if="legislatorInfo">
  <img src="/static/legislator_image_banner.png" alt="legislator_image_banner" class="legislator_banner">
  <v-layout row wrap>
    <profile @showSupportModal="showModal = true" :profileInfo="legislatorInfo"></profile>
    <v-flex xs10 sm8 offset-xs1 offset-sm0>
      <contents :content_info="sendContentInfo()"
       :contentsData="legislatorInfo.contents" title="관련 컨텐츠"></contents>
       
    </v-flex>
  </v-layout>
  <support-modal v-if="showModal" @openSuccessModal="showSuccessModal = true"
    @closeSupportModal="showModal = false" :legislatorID="$route.params.l_id"></support-modal>
  <success-modal v-if="showSuccessModal" :name="legislatorInfo.l_name" @close="showSuccessModal = false"></success-modal>
</div>
</template>

<script>
import Contents from '../../components/Contents'
import Profile from './components/Profile'
import SupportModal from './components/SupportModal'
import SuccessModal from './components/SuccessModal'
import { mapGetters } from 'vuex'


export default {
  name: 'Legislator',
  components: { Contents, Profile, SupportModal, SuccessModal },
  data () {
    return {
      showModal: false,
      showSuccessModal: false
    }
  },
  computed: {
    ...mapGetters ({
      legislatorInfo: 'getLegislatorInfo'
    })
  },
  methods: {
    sendContentInfo() {
      return {
        linkNone: true, // false: href 없앰 ,
        endItem: 12,
        PAGENUM: 12, //페이징 단위
        DOTNUM: 4, //버튼개수
      }
    }
  },
  created () {
    this.$store.dispatch('getLegislatorData', this.$route.params.l_id)
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
