<template>
<div>
  <v-layout row nowrap align-center class="contents_info_wrapper">
    <img src="/static/comment_contents_heart.png" alt="contents_heart" class="contents_icon">
    <div class="contents_info">{{ contentsInfo.likeCnt }}명이 좋아합니다</div>
    <img src="/static/comment_contents_comment.png" alt="contents_comment" class="contents_icon">
    <div class="contents_info">{{ contentsInfo.commentCnt }}개</div>
  </v-layout>
  <v-layout row nowrap justify-space-between align-center class="button_wrapper">
    <div class="btn_group">
      <button class="heart btn"></button>
      <button class="comment btn"></button>
      <button class="share btn"></button>
    </div>
    <button class="scrap_btn"></button>
  </v-layout>
  <v-layout justify-space-between align-center class="comment_form">
    <input type="text" placeholder="댓글을 입력하세요..." class="comment_input">
    <input type="submit" value="" class="comment_submit">
  </v-layout>
</div>
</template>

<script>
export default {
  name: 'Comment',
  props: ['contentsInfo']
}
</script>

<style scoped>
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
button.heart { background-image: url('/static/comment_heart.png'); }
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
</style>
