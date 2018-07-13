<template>
<div>
  <v-layout row nowrap align-center class="contents_info_wrapper">
    <img src="/static/comment_contents_heart.png" alt="contents_heart" class="contents_icon">
    <div class="contents_info">{{ contentsLikeCnt }}명이 좋아합니다</div>
    <img src="/static/comment_contents_comment.png" alt="contents_comment" class="contents_icon">
    <div class="contents_info">{{ contentsInfo.commentCnt }}개</div>
  </v-layout>
  <v-layout row nowrap justify-space-between align-center class="button_wrapper">
    <div class="btn_group">
      <button class="heart btn" @click="clickContentsLikeBtn(contentsIsLike)" :style="{ backgroundImage: likeBtnImage[contentsIsLike] }"></button>
      <!-- <button class="comment btn"></button> -->
      <button class="share btn" id="kakao-link-btn" @click="sendLink()"></button>
    </div>

    <!-- :style="{ contentsInfo.isScrap === 1 }" -->
    <button class="scrap_btn" @click="clickScrapBtn(isScrap)" :style="{ backgroundImage: scrapImage[isScrap] }"></button>

  </v-layout>
  <v-layout justify-space-between align-center class="comment_form">
    <input type="text" v-model="commentContents" @keyup.enter="makeComment" placeholder="댓글을 입력하세요..." class="comment_input">
    <input type="submit" @click="makeComment" value="" class="comment_submit">
  </v-layout>
  <div class="comment_list" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
    <div v-for="(comment, i) in commentList" :key="i" class="comment_wrapper">
      <div class="user_of_comment">
        <img :src="userImg(comment.user_img)" alt="user_img" class="user_img">
        <div>
          <div class="user_name">
            {{ comment.user_nick }}
            <img v-if="i<3" src="/static/comment_best.png" alt="best_comment" class="best_tag">
          </div>
          <v-layout row wrap justify-space-between class="comment_content_wrapper">
            <div class="comment_content">{{ comment.content }}</div>
            <div><button class="comment_like" :style="{ backgroundImage: likeBtnImage[comment.islike] }"
                    @click="likeComment(comment.commentid, i)"></button></div>
          </v-layout>
        </div>
      </div>
      <v-layout row nowrap class="comment_info" >
        <div>{{ comment.timeset }}</div>
        <div>좋아요 {{ comment.commentlikeCnt }}개</div>
        <div>답글 {{ comment.recommentCnt }}개</div>
      </v-layout>
    </div>
  </div>
</div>
</template>

<script>
import infiniteScroll from 'vue-infinite-scroll'

export default {
  name: 'Comment',
  props: ['contentsInfo', 'commentList', 'contentsID'],
  directives: { infiniteScroll },
    data () {
      return {
        data: [],
        busy: false,
        likeBtnImage: ['url("/static/comment_heart_no.png")', 'url("/static/comment_heart_yes.png")'],
        commentContents: '',
        scrapImage: ['url("/static/comment_scrap.png")', 'url("/static/comment_scrap_yes.png")'],
        isScrap: this.contentsInfo.isscrap,
        contentsIsLike: this.contentsInfo.islike,
        contentsLikeCnt: this.contentsInfo.likeCnt,
        contentDetail: this.$store.getters.getContentsDetail
      }
    },


  methods: {
    sendLink() {
      console.log(this.title)
      Kakao.Link.sendDefault({
                objectType: 'feed',
                content: {
                  title: this.contentDetail.title,
                  description: this.contentDetail.subtitle,
                  imageUrl: this.contentDetail.thumbnail,
                    link: {
                        webUrl: window.location.href //웹 url 들어가야함
                    }
                }
            });
          },



    loadMore: function () {
      this.busy = true;

      setTimeout(() => {
        for (var i = 0, j = 10; i < j; i++) {
          this.data.push(this.commentList[i]);
        }
        this.busy = false;
      }, 1000);
    },
    userImg: function (user_img) {
      if(user_img === '0') {
        return '/static/mypage_image_profile.png'
      } else {
        return user_img
      }
    },
    likeComment: function (commentID, index) {
      if(this.$store.getters.getUserId === null){
          this.$store.commit('openLoginComponent')
      } else{
      const object = {
        comment_id: commentID
      }
      if(this.commentList[index].islike === 1) {
        this.$store.dispatch('postLikeCancelComment', commentID)
        this.commentList[index].islike = 0
      } else {
        this.$store.dispatch('postLikeComment', object)
        this.commentList[index].islike = 1
      }
      }
    },
    makeComment () {
      if(this.$store.getters.getUserId === null){
          this.$store.commit('openLoginComponent')
      } else{
      if (this.commentContents !== '') {
        const object = {
          contents_id: this.contentsID,
          content: this.commentContents
        }
        this.$store.dispatch('postMakeComment', object)
        this.commentContents = ''
        // location.reload(true)
      }
      }
    },
    clickScrapBtn (isScrap) {
      if(this.$store.getters.getUserId === null){
          this.$store.commit('openLoginComponent')
      } else{
      const object = {
        contentsid: this.contentsID
      }
      if( isScrap === 0) {
        this.$store.dispatch('doScrapContents', object)
        this.isScrap = 1;
      } else if( isScrap === 1){
        this.$store.dispatch('deleteScrap', object);
        this.isScrap = 0;
      }
      }
    },
    clickContentsLikeBtn (isLike) {
      if(this.$store.getters.getUserId === null){
          this.$store.commit('openLoginComponent')
      } else {
      const object = {
        contents_id: this.contentsID
      }
      if( isLike === 0) {
        // console.log("like 0");

        this.$store.dispatch('doLikeContents', object)
        this.contentsIsLike = 1;
        this.contentsLikeCnt++;
      } else if( isLike === 1){
        console.log("like 1");
        this.$store.dispatch('deleteLikeContents', object);
        this.contentsIsLike = 0;
        this.contentsLikeCnt--;
      }
    }
  }
  },
  created () {

  }
}
</script>

<style scoped>
@media (max-width : 960px) {
  div.contents_info_wrapper {
    height: 10.31vw;
    margin-left: 3.29vw;
    margin-right: 3.29vw;
  }
  img.contents_icon {
    width: 4vw;
    height: 4vw;
    margin-right: 1.43vw;
  }
  div.contents_info {
    font-size: 3.2vw;
    margin-right: 4.44vw;
  }
  div.button_wrapper {
    height: 11.02vw;
    padding-left: 3.29vw;
    padding-right: 3.29vw;
  }
  div.btn_group .btn {
    margin-right: 3.03vw;
  }
  button.btn {
    height: 4.8vw;
    width: 4.8vw;
  }
  button.scrap_btn {
    width: 3.6vw;
    height: 4.8vw;
  }
  div.comment_form {
    height: 12.45vw;
    padding-left: 3.29vw;
    padding-right: 3.29vw;
  }
  input.comment_input {
    width: 67.16vw;
    padding-left: 2.67vw;
    padding-top: 2.67vw;
    padding-bottom: 2.67vw;
    font-size: 2.4vw;
  }
  input.comment_submit {
    width: 9.33vw;
    height: 9.33vw;
  }
  div.comment_list {
    height: 136vw;
  }
  div.comment_wrapper {
    margin-left: 2.67vw;
    margin-right: 2.67vw;
    padding-top: 2.67vw;
    padding-bottom: 2.67vw;
  }
  div.user_of_comment {
    height: 11.2vw;
  }
  img.user_img {
    margin-right: 1.68vw;
  }
  div.user_name {
    font-size: 2.67vw;
    padding-top: 1.6vw;
  }
  img.best_tag {
    height: 2.89vw;
    margin-left: 1.5vw;
  }
  div.comment_content_wrapper {
    width: 60vw;
  }
  div.comment_content {
    font-size: 2.67vw;
    padding-top: 0.4vw;
  }
  button.comment_like {
    width: 3.73vw;
    height: 3.73vw;
  }
  div.comment_info {
    font-size: 2.4vw;
    margin-left: 13.42vw;
    margin-top: 1vw;
  }
  div.comment_info > div {
    margin-right: 3.51vw;
  }
  .comment_list::-webkit-scrollbar {
    width: 1.4vw;
  }
}
.contents_info_wrapper
{
  height: 2.53vw;
  margin-left: 0.81vw;
  margin-right: 0.81vw;
  border-bottom: 1px solid #DDDDDD;
}
.contents_icon
{
  width: 0.83vw;
  height: 0.83vw;
  margin-right: 0.26vw;
}
.contents_info
{
  font-family: NanumBarunGothic;
  font-size: 0.68vw;
  color: #444444;
  margin-right: 0.73vw;
}
.button_wrapper
{
  height: 3.13vw;
  padding-left: 0.81vw;
  padding-right: 0.81vw;
}
button.heart { background-image: url('/static/comment_heart_no.png') }
button.comment { background-image: url('/static/comment_comment.png') }
button.share { background-image: url('/static/comment_share.png') }
.scrap_btn
{
  background-image: url('/static/comment_scrap.png');
  width: 1.09vw;
  height: 1.46vw;
  background-size: 100% 100%;
}
.btn_group .btn
{
  margin-right: 0.86vw;
}
.btn
{
  width: 1.46vw;
  height: 1.46vw;
  background-size: 100% 100%;
}
.comment_form
{
  height: 3.7vw;
  padding-left: 0.81vw;
  padding-right: 0.81vw;
  border-top: 1px solid #DDDDDD;
  border-bottom: 1px solid #DDDDDD;
}
.comment_input
{
  width: 23vw;
  padding-left: 1.41vw;
  padding-top: 0.52vw;
  padding-bottom: 0.52vw;
  background: #F8F8F8;
  border: 1px solid #F2F2F2;
  border-radius: 29px;
  font-size: 0.73vw;
  font-family: NanumBarunGothic;
  color: #707070;
}
.comment_input::-webkit-input-placeholder
{
  color: #B4B4B4;
}
.comment_input:-ms-input-placeholder
{
  color: #B4B4B4;
}
.comment_submit
{
  width: 2.19vw;
  height: 2.19vw;
  background-image: url('/static/comment_send_button.png');
  background-size: 100% 100%;
}
.comment_list
{
  height: 29vw;
  overflow: overlay;
}
.comment_wrapper
{
  margin-left: 0.81vw;
  padding-top: 0.89vw;
  margin-right: 0.81vw;
  padding-bottom: 0.89vw;
  border-bottom: 1px solid #F2F2F2;
}
.user_of_comment
{
  height: 2.27vw;
}
.user_of_comment > div
{
  display: inline-block;
}
.user_img
{
  height: 100%;
  border-radius: 100%;
  margin-right: 0.64vw;
  vertical-align: top;
}
.user_name
{
  font-family: NanumBarunGothicBold;
  font-size: 0.78vw;
  padding-top: 0.2vw;
}
.best_tag
{
  height: 0.76vw;
  margin-left: 0.33vw;
  vertical-align: text-top;
}
.comment_content_wrapper
{
  width: 21vw;
}
.comment_content
{
  font-family: NanumBarunGothic;
  font-size: 0.73vw;
  color: #707070;
  padding-top: 0.1vw;
}
.comment_like
{
  width: 1.13vw;
  height: 1.13vw;
  background-size: 100% 100%;
}
.comment_info
{
  font-family: NanumBarunGothic;
  font-size: 0.63vw;
  color: #D0D0D2;
  margin-left: 3.3vw;
  margin-top: 0.58vw;
}
.comment_info > div
{
  margin-right: 0.95vw;
}

/* scrollbar css */
::-webkit-scrollbar {
  width: 0.47vw;
}
::-webkit-scrollbar-track {
    background: #F1F1F1;
}
::-webkit-scrollbar-thumb {
    background: #E4E4E4;
}
</style>
