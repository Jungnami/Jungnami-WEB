<template>
<v-flex xs6 sm2 offset-xs3 offset-sm1>
  <div class="legislator_img_wrapper">
    <img :src="profileInfo.profileimg" alt="legislator_image_profile"
     class="legislator_img" :style="{ border: `5px solid ${getColorWithPartyName(profileInfo.party_name)}`}">
    <img :src="getMedalImg(profileInfo.likerank, profileInfo.unlikerank)"
       alt="legislator_medal" class="medal" v-if="checkMedal(profileInfo.likerank, profileInfo.unlikerank)">
  </div>
  <div class="legislator_name" :style="{ marginTop: setMarginTop(profileInfo.likerank, profileInfo.unlikerank) }">{{ profileInfo.l_name }}</div>
  <div class="party">{{ profileInfo.party_name }}</div>
  <div class="region">{{ profileInfo.position }}</div>
  <button class="button" @click="show">후원하기</button>
</v-flex>
</template>


<script>

export default {
  name: 'Profile',
  props: ['profileInfo'],
  data () {
    return {}
  },
  methods: {
    show: function () {
      // this.$emit('showSupportModal')
      alert('후원하기 서비스는 준비중입니다.')
    },
    getMedalImg: function (likerank, unlikerank) {
      if(likerank == '1')
        return '/static/legislator_icon_goldmedal.png'
      if(likerank == '2')
        return '/static/legislator_icon_silvermedal.png'
      if(likerank == '3')
        return '/static/legislator_icon_bronzemedal.png'
      if(unlikerank == '1')
        return '/static/legislator_icon_goldbomb.png'
      if(unlikerank == '2')
        return '/static/legislator_icon_silverbomb.png'
      if(unlikerank == '3')
        return '/static/legislator_icon_bronzebomb.png'
      return ''
    },
    checkMedal: function (likerank, unlikerank) {
      if(likerank == '1' || likerank == '2' || likerank == '3')
        return true
      if(unlikerank == '1' || unlikerank == '2' || unlikerank == '3')
        return true
      return false
    },
    setMarginTop: function (likerank, unlikerank) {
      if(likerank == '1' || likerank == '2' || likerank == '3')
        return '-5vh'
      if(unlikerank == '1' || unlikerank == '2' || unlikerank == '3')
        return '-5vh'
      return '1vh'
    },
    getColorWithPartyName(partyName){
     switch(partyName){
       case '더불어민주당':
         return '#1783DC';
       case '자유한국당':
         return '#E1241A';
       case '정의당':
         return '#FCDC00';
       case '민중당':
         return '#EC8C0D';
       case '대한애국당':
         return '#123167';
       case '바른미래당':
         return '#14CDCC';
       case '민주평화당':
         return '#3FC335';
       case '무소속':
         return '#C6C6C6';
     }
   }
  }
}
</script>

<style scoped>
@media (max-width: 600px) {
  * {
    text-align: center;
  }
  img.medal {
    bottom: 7vw;
  }
  div.legislator_img_wrapper {
    width: 60%;
    margin-left: 20%;
  }
  div.legislator_name {
    margin-top: -5vh;
    font-size: 5.87vw;
  }
  div.party, div.region {
    font-size: 4.53vw;
    margin-top: 0;
  }
  div.region {
    margin-bottom: 3.15vh;
  }
  button.button {
    width: 70%;
    font-size: 5.33vw;
  }
}
.legislator_img_wrapper
{
  width: 65%;
}
.legislator_img
{
  width: 100%;
  border-radius: 50%;
  border: 2px solid #1783DC;
}
.medal
{
  position: relative;
  width: 25%;
  left: 7.5vw;
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
  transition: 0.5s;
}
.button:hover
{
  background: #36C5F1;
  transition: 0.5s;
  font-size: 1.2vw;
  color: white;
}
</style>
