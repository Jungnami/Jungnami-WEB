<template>
<div>

  <contents class="hidden-md-and-up" v-bind:contents_list_info="sendReconmendInfoMobile()"></contents>
  <contents class="hidden-sm-and-down" v-bind:contents_list_info="sendReconmendInfoPC()"></contents>
</div>
</template>

<script>
import Contents from './ContentsList'

export default {
  name: 'Story',
  components: {
    Contents
  },
  data() {
    return {
      showModal: false,
      windowWidth: window.innerWidth,
      mobileCheck: this.isMobile()
    }
  },
  methods: {
    sendReconmendInfoPC(){
      return {
        items: this.StoryData,
        title: '스토리',
        seeContentsMore: false,
        endItem: 12, //이거 페이징 단위랑 맞춰줘야함.. 좀 잘못짬 ㅠ
        PAGENUM: 12, //페이징 단위
        DOTNUM: 5, //버튼개수
      }//최근 PAGENUM * DOTNUM 갯수만 받아오게끔 되어있음
    },
    sendReconmendInfoMobile(){
      return {
        items: this.StoryData,
        title: '스토리',
        seeContentsMore: false,
        endItem: 10, //이거 페이징 단위랑 맞춰줘야함.. 좀 잘못짬 ㅠ
        PAGENUM: 10, //페이징 단위
        DOTNUM: 6, //버튼개수
      } //최근 PAGENUM * DOTNUM 갯수만 받아오게끔 되어있음
    },
    handleWindowResize(event) {
      this.windowWidth = event.currentTarget.innerWidth;
    },
    isMobile(){
      this.windowWidth = 600 ? true : false
    }
  },
  computed : {
    StoryData: function() {
      return this.$store.getters.getStoryContents
    }
  },
  beforeDestroy: function() {
    window.removeEventListener('resize', this.handleWindowResize)
  },
  mounted() {
    window.addEventListener('resize', this.handleWindowResize);
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
  created() {
    // console.log("!!");
    this.$store.dispatch('getContentsData', {name : '스토리'});
  }
}

</script>

<style>
</style>
