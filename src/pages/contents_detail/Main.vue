<template>
<v-flex xs10 md8 offset-xs1 offset-md2 v-if="contents">
  <div class="contents_title">{{ contents.title }}</div>
  <v-layout row nowrap justify-space-between class="contents_info">
    <div class="detail_info">{{ contents.text }}</div>
    <div class="img_info" v-if="imageArray"><span class="active_idx">{{ imgIndex + 1}}</span>/{{ imageArray.length }}</div>
  </v-layout>
  <image-preview :imagearray="sendArrayInfo()"></image-preview>
  <v-layout row wrap>
    <v-flex xs12 md7>
      <v-layout align-center class="active_img" :style="{ backgroundImage: `url(${ contents.thumbnail })`}">
        <v-layout row nowrap justify-space-between>
          <button class="left_btn btn" @click="indexDown()"></button>
          <button class="right_btn btn" @click="indexUp()"></button>
        </v-layout>
      </v-layout>
    </v-flex>
    <v-flex xs12 md5 class="comment">
      s
    </v-flex>
  </v-layout>
</v-flex>
</template>

<script>
import ImagePreview from './components/ImagePreview'
import { mapGetters } from 'vuex'

export default {
  name: 'ContentsDetail',
  components: { ImagePreview },
  data () {
    return {
      MOBILE_LIST_LENGTH: 5,
      PC_LIST_LENGTH: 16,
      windowWidth: window.innerWidth,
      CURRENT_LENGTH: 16
    }
  },
  computed: {
    ...mapGetters ({
      imgIndex : 'getActiveImgIndex',
      contents: 'getContentsDetail',
      imageArray: 'getImageArray'
    }),
    list_length: function () {
      if (this.CURRENT_LENGTH === this.PC_LIST_LENGTH && this.isMobile()) {
        return this.CURRENT_LENGTH = this.MOBILE_LIST_LENGTH
      } else if (this.CURRENT_LENGTH === this.MOBILE_LIST_LENGTH && !this.isMobile()) {
        return this.CURRENT_LENGTH = this.PC_LIST_LENGTH
      }
    }
  },
  methods: {
    indexDown () {
      if (this.imgIndex > 0) {
        this.$store.commit('minusActiveImgIndex')
      }
    },
    indexUp () {
      if (this.imgIndex < this.imageArray.length - 1) {
        this.$store.commit('plusActiveImgIndex')
      }
    },
    sendArrayInfo () {
      let startIndex = Math.floor(this.imgIndex / this.CURRENT_LENGTH) * this.CURRENT_LENGTH
      return this.imageArray.splice(startIndex, startIndex + this.CURRENT_LENGTH + 1)
    },
    isMobile() {
      return (this.windowWidth < 960) ? true : false
    },
    handleWindowResize(event) { this.windowWidth = event.currentTarget.innerWidth; }
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.handleWindowResize)
  },
  mounted () {
    window.addEventListener('resize', this.handleWindowResize);
  },
  created () {
    this.$store.dispatch('getPostingView', this.$route.params.id)
  }
}
</script>

<style scoped>
.contents_title
{
  font-family: NanumBarunGothic;
  font-size: 1.46vw;
  margin-top: 2.97vw;
}
.contents_info
{
  font-family: NanumBarunGothic;
  color: #C3C3C3;
  margin-top: 0.51vw;
  margin-bottom: 1.21vw;
}
.detail_info
{
  font-size: 0.89vw;
}
.img_info
{
  font-size: 1.04vw;
}
span.active_idx
{
  color: #36C5F1;
}
.active_img
{
  height: 48.61vw;
  padding-left: 1.04vw;
  padding-right: 1.04vw;
  background-size: 100% 100%;
}
.btn
{
  width: 1.56vw;
  height: 2.96vw;
  background-size: 100%;
}
.left_btn
{
  background-image: url('/static/contents_detail_left_arrow.png');
}
.right_btn
{
  background-image: url('/static/contents_detail_right_arrow.png');
}
</style>
