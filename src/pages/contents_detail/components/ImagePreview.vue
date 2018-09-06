<template>
<div>
  <v-layout row nowrap justify-space-around v-if="propsapp">
    <button class="left_btn btn" @click="indexDown"></button>
    <img v-for="(image, i) in propsapp.imageArray" :src="image.img_url" @click="changeImg(i)"
        alt="prview_image" :key="i" :id="checkActive(i)? 'active_img':''" class="pre_img">
    <div class="rest_div" v-for="(item, i) in getRestArray(propsapp.imageArray)" :key="i+propsapp.listAllLength" v-if="propsapp.imageArray.length !== propsapp.listLength">
    </div>
    <button class="right_btn btn" @click="indexUp"></button>
  </v-layout>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ImagePreview',
  props: ['listInfo'],
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters ({
      imgIndex : 'getActiveImgIndex'
    }),
    propsapp: function () {
      return {
        imageArray: this.listInfo.imageArray,
        listAllLength: this.listInfo.listAllLength,
        listLength: this.listInfo.listLength
      }
    }
  },
  methods: {
    checkActive (index) {
      if (index === (this.imgIndex % this.propsapp.listLength)) return true
      return false
    },
    indexDown () {
      if (this.imgIndex > 0) {
        this.$store.commit('minusActiveImgIndex')
      }
    },
    indexUp () {
      if (this.imgIndex < this.propsapp.listAllLength - 1) {
        this.$store.commit('plusActiveImgIndex')
      }
    },
    getRestArray (imageArray) {
      const rest_length = this.propsapp.listLength - (this.propsapp.listAllLength % this.propsapp.listLength)
      let array = []
      for(var i = 0; i < rest_length; i++) {
        array.push(imageArray[0])
      }
      return array
    },
    changeImg (idx) {
      let indexChange = idx - (this.imgIndex % this.propsapp.listLength)
      this.$store.commit('changeImgIndex', (this.imgIndex + indexChange))
    },
    checkKey (e) {
      e = e || window.event
      if (e.keyCode == '37') {
        this.indexDown ()
      } else if (e.keyCode == '39') {
        this.indexUp ()
      }
    }
  },
  destroyed () {
    this.$store.commit('changeImgIndex', 0)
  },
  created () {
    document.onkeydown = this.checkKey
  }
}
</script>

<style scoped>
@media (max-width: 960px) {
  img.pre_img {
    width: 12.53vw;
    height: 12.53vw;
  }
  div.rest_div {
    width: 12.53vw;
    height: 12.53vw;
  }
  button.btn {
    width: 6.77vw;
    height: 12.53vw;
  }
}
.btn
{
  width: 1.93vw;
  height: 3.6vw;
  background-size: 100% 100%;
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
  cursor: pointer;
}
#active_img
{
  border: 3px solid #36C5F1;
}
.rest_div
{
  width: 3.6vw;
  height: 3.6vw;
  background: #F2F2F2;
}
</style>
