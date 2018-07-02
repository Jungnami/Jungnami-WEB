<template>
<v-flex xs4 sm2 offset-xs4 offset-sm1>
  <div class="legislator_img_wrapper">
    <img src="../../../../static/legislator_image_profile.png" alt="legislator_image_profile" class="legislator_img">
    <img src="../../../../static/legislator_icon_goldmedal.png" alt="legislator_medal" class="medal">
  </div>
  <div class="legislator_name">김병관</div>
  <div class="party">더불어민주당</div>
  <div class="region">경기도 성남시 분당구 갑</div>
  <button class="button">후원하기</button>
  <button class="button">항의하기</button>
</v-flex>
</template>

<script>
export default {

}
</script>

<style scoped>
@media (max-width: 600px) {
  * {
    text-align: center;
  }
}
.legislator_img_wrapper
{
  width: 65%;
}
.legislator_img
{
  width: 100%;
}
.medal
{
  position: relative;
  width: 25%;
  left: 8vw;
  bottom: 3vw;
}
.legislator_name
{
  margin-top: -5vh;
  font-size: 2.2vw;
  font-family: NanumBarunGothicBold;
}
.party
{
  font-size: 1.67vw;
  font-family: NanumBarunGothicLight;
  margin-top: 2vh;
}
.region
{
  font-size: 0.83vw;
  font-family: NanumBarunGothic;
  margin-top: 0.96vh;
  margin-bottom: 4.94vh;
}
.button
{
  width: 90%;
  text-align: center;
  border: 2px solid #36C5F1;
  border-radius: 19px;
  font-size: 1.04vw;
  padding-top: 0.3vw;
  padding-bottom: 0.3vw;
  margin-bottom: 1.7vh;
  color: #36C5F1; 
}
</style>
