<template>
<div>

  <contents class="hidden-md-and-up" v-bind:contents_list_info="sendReconmendInfoMobile()"></contents>
  <contents class="hidden-sm-and-down" v-bind:contents_list_info="sendReconmendInfoPC()"></contents>
  <div class="adventisor hidden-sm-and-down"></div>
  <contents v-bind:contents_list_info="sendTMIInfo()" class="hidden-sm-and-down"></contents>
  <contents v-bind:contents_list_info="sendContentInfo()" class="hidden-sm-and-down"></contents>
</div>
</template>

<script>
import Contents from './ContentsList'

export default {
  name: 'Recommend',
  components: {
    Contents
  },
  data() {
    return {
      showModal: false,
      windowWidth: window.innerWidth,
      mobileCheck: this.isMobile(),
    }
  },
  methods: {
    sendReconmendInfoPC(){
      return {
        items: this.top20,
        title: 'TOP 20',
        seeContentsMore: false,
        endItem: 4, //이거 페이징 단위랑 맞춰줘야함.. 좀 잘못짬 ㅠ
        PAGENUM: 4, //페이징 단위
        DOTNUM: 5, //버튼개수
      }
    },
    sendReconmendInfoMobile(){
      return {
        items: this.recommend,
        title: 'TOP 20',
        seeContentsMore: false,
        endItem: 10, //이거 페이징 단위랑 맞춰줘야함.. 좀 잘못짬 ㅠ
        PAGENUM: 10, //페이징 단위
        DOTNUM: 2, //버튼개수
      }
    },
    sendTMIInfo() {
      return {
        items: this.tmi,
        title: 'TMI',
        path: '/contents/TMI',
        seeContentsMore: true,
        endItem: 4, //이거 페이징 단위랑 맞춰줘야함.. 좀 잘못짬 ㅠ
        PAGENUM: 4, //페이징 단위
        DOTNUM: 5, //버튼개수
      }
    },
    sendContentInfo() {
      return {
        items: this.story,
        title: '스토리',
        path: '/contents/story',
        seeContentsMore: true,
        endItem: 4, //이거 페이징 단위랑 맞춰줘야함.. 좀 잘못짬 ㅠ
        PAGENUM: 4, //페이징 단위
        DOTNUM: 5, //버튼개수
      }
    },
    handleWindowResize(event) {
      this.windowWidth = event.currentTarget.innerWidth;
    },
    isMobile(){
      this.windowWidth = 600 ? true : false
    }
  },
  beforeDestroy: function() {
    window.removeEventListener('resize', this.handleWindowResize)
  },

  watch: {
    windowWidth: function() {
      if(this.windowWidth < 600){
        this.mobileCheck = true;
      } else{
        this.mobileCheck = false;
      }
    }
  },
  computed: {
    // getTop20 : function(){
    //   this.top20 = this.items.recommend;
    //   console.log("here computed:::" + JSON.stringify(this.items.recommend))
    // }
    top20: function(){ return this.$store.getters.getRecommendTop20 },
    tmi: function(){ return this.$store.getters.getRecommendTMI },
    story: function(){ return this.$store.getters.getRecommendStory },
    recommend: function() { return this.$store.getters.getRecommendContents }
  },
  mounted() {
    window.addEventListener('resize', this.handleWindowResize)
  },
  created() {
    this.$store.dispatch('getRecommendContents')
    this.$store.dispatch('getRecommendData')
  }
}

</script>

<style>
.adventisor {
  width: 100%;
  height: 12.968vw;
  background-size: cover;
  background-image: url('/static/bannerdesigning.png');
}
</style>
