<template>
<v-layout row nowrap justify-space-around>
  <button class="left_btn btn" @click="indexDown"></button>
  <img v-for="(image, i) in imagearray" :src="image.img_url" alt="prview_image" :key="i" :id="checkActive(i)? 'active_img':''" class="pre_img">
  <button class="right_btn btn" @click="indexUp"></button>  
</v-layout>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ImagePreview',
  props: ['imagearray'],
  data () {
    return {
      
    }
  },
  computed: {
    ...mapGetters ({
      imgIndex : 'getActiveImgIndex'
    })
  },
  methods: {
    checkActive (index) {
      if (index === this.imgIndex) return true
      return false
    },
    indexDown () {
      if (this.imgIndex > 0) {
        this.$store.commit('minusActiveImgIndex')
      }
    },
    indexUp () {
      if (this.imgIndex < this.imagearray.length - 1) {
        this.$store.commit('plusActiveImgIndex')
      }
    }
  }
}
</script>

<style scoped>
.btn
{
  width: 1.93vw;
  height: 3.6vw;
  background-size: 100%;
}
.left_btn
{
  background-image: url('/static/contents_detail_left_button.png');
}
.right_btn
{
  background-image: url('/static/contents_detail_right_button.png');
}
.pre_img
{
  width: 3.6vw;
  height: 3.6vw;
}
#active_img
{
  border: 3px solid #36C5F1;
}
</style>
