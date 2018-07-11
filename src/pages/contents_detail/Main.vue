<template>
<v-flex xs10 md8 offset-xs1 offset-md2 v-if="contents">
  <div class="contents_title">{{ contents.title }}</div>
  <v-layout row nowrap justify-space-between class="contents_info">
    <div class="detail_info">{{ contents.text }}</div>
    <div class="img_info"><span class="active_idx">{{ imgIndex + 1}}</span>/{{ contents.imagearray.length }}</div>
  </v-layout>
  <image-preview :listInfo="sendArrayInfo(PC_LIST_LENGTH)" class="hidden-sm-and-down"></image-preview>
  <image-preview :listInfo="sendArrayInfo(MOBILE_LIST_LENGTH)" class="hidden-md-and-up"></image-preview>
  <v-layout row wrap class="img_and_comment">
    <v-flex xs12 md7>
      <v-layout align-center class="active_img" :style="{ backgroundImage: `url(${ contents.imagearray[imgIndex].img_url })`}">
        <v-layout row nowrap justify-space-between>
          <button class="left_btn btn" @click="indexDown()"></button>
          <button class="right_btn btn" @click="indexUp()"></button>
        </v-layout>
      </v-layout>
    </v-flex>
    <v-flex xs12 md5>
      <comment :contentsInfo="contents" class="comment_box"></comment>
    </v-flex>
  </v-layout>
</v-flex>
</template>

<script>
import ImagePreview from './components/ImagePreview'
import Comment from './components/Comment'
import { mapGetters } from 'vuex'

export default {
  name: 'ContentsDetail',
  components: { ImagePreview, Comment },
  data () {
    return {
      MOBILE_LIST_LENGTH: 5,
      PC_LIST_LENGTH: 16
    }
  },
  computed: {
    ...mapGetters ({
      imgIndex : 'getActiveImgIndex',
      contents: 'getContentsDetail'
    })
  },
  methods: {
    indexDown () {
      if (this.imgIndex > 0) {
        this.$store.commit('minusActiveImgIndex')
      }
    },
    indexUp () {
      if (this.imgIndex < this.contents.imagearray.length - 1) {
        this.$store.commit('plusActiveImgIndex')
      }
    },
    sendArrayInfo (list_length) {
      if(this.contents) {
        let startIndex = Math.floor(this.imgIndex / list_length) * list_length
        console.log('sendArrayInfo 진행중')
        return {
          imageArray: this.contents.imagearray.slice(startIndex, startIndex + list_length),
          listAllLength: this.contents.imagearray.length,
          listLength: list_length
        }
      }
    }
  },
  created () {
    this.$store.dispatch('getPostingView', this.$route.params.id)
  }
}
</script>

<style scoped>
@media (max-width: 960px) {
  div.contents_title {
    font-size: 4.53vw;
    margin-top: 3.33vw;
  }
  div.contens_info {
    margin-top: 1.29vw;
    margin-bottom: 6.45vw;
  }
  div.detail_info {
    font-size: 2.4vw;
  }
  div.img_info {
    font-size: 3.2vw;
  }
  div.img_and_comment {
    margin-top: 3.2vw;
  }
  div.active_img {
    height: 83.33vw;
    padding-left: 3vw;
    padding-right: 3vw;
  }
  button.btn {
    width: 3.47vw;
    height: 6.67vw;
  }
}
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
.img_and_comment
{
  margin-top: 0.52vw;
}
.active_img
{
  height: 38.89vw;
  padding-left: 1.04vw;
  padding-right: 1.04vw;
  background-size: 100% 100%;
}
.btn
{
  width: 1.56vw;
  height: 2.96vw;
  background-size: 100% 100%;
}
.left_btn
{
  background-image: url('/static/contents_detail_left_arrow.png');
}
.right_btn
{
  background-image: url('/static/contents_detail_right_arrow.png');
}
.comment_box
{
  margin-left: 0.63vw;
  border: 1px solid #DDDDDD;
}
</style>
