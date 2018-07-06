<template>
<div>
  <v-layout row wrap>
    <v-flex xs10 offset-xs1 class="profile_box_wrapper">
      <v-layout row wrap class="profile_box">
        <v-flex xs1></v-flex>
        <img src="../../../static/mapage_image_profile.png" alt="image_profile" class="image_profile">
        <v-layout column justify-space-between class="profile_contents">
          <v-flex class="name">jonnacute_sungchan</v-flex>
          <v-flex>
            <button class="setting_btn">
              <!-- <img src="../../../static/mypage_button_setting.png" alt="setting_button" class="setting_img"> -->
            </button>
          </v-flex>
        </v-layout>
      </v-layout>
    </v-flex>
    <v-flex xs1></v-flex>
  </v-layout>
</div> 
</template>

<script>
export default {
  name: 'MyPage'
}
</script>

<style scoped>
@media (max-width: 600px) {
  div.profile_box {
    margin-top: 11.47vw;
    margin-bottom: 11.47vw;
    height: 29.87vw;
  }
  div.name {
    font-size: 3.5vw;
  }
  button.setting_btn {
    width: 18.6vw;
    height: 5.56vw;
  }
  div.profile_contents {
    margin-top: 5vh;
    margin-bottom: 3vh;
  }
}
.profile_box_wrapper
{
  margin-top: 4.63vh;
  background: #FCFCFC;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
}
.profile_box
{
  margin-top: 8.6vh;
  margin-bottom: 8.6vh;
  height: 22.87vh;
}
.image_profile
{
  height: 100%;
  margin-right: 2.15vw;
}
.profile_contents
{
  margin-top: 6vh;
  margin-bottom: 4vh;
}
.name
{
  font-family: NanumBarunGothic;
  font-size: 1.93vw;
  color: #707070;
}
.setting_btn
{
  width: 8.2vw;
  height: 2.45vw;
  border: 1px solid #B4B4B4;
  border-radius: 5px;
  background-image: url('../../../static/mypage_button_setting.png');
  background-size: 100%;
}
</style>
