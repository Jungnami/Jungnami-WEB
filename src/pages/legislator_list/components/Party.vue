<template>
<v-layout row wrap class="party_page">
  <v-flex xs10 md3 offset-xs1>
    <img src="../../../../static/party_main_text.png" alt="list_party_text" class="party_text">
    <v-layout row wrap justify-space-between class="btn_layout">
      <button v-for="(btn, i) in party_btns1" :key="i" 
            :style="{backgroundColor: btn.color}" class="party_btn">
        <img :src="btn.src" alt="party_btn" class="party_img">
      </button>
    </v-layout>
    <v-layout row wrap justify-space-between class="btn_layout">
      <button v-for="(btn, i) in party_btns2" :key="i" 
            :style="{backgroundColor: btn.color}" class="party_btn">
        <img :src="btn.src" alt="party_btn" class="party_img">
      </button>
    </v-layout>
  </v-flex>

  <v-flex xs10 md7 offset-xs1 offset-md0>
    <v-layout row wrap justify-space-between class="party_tab">
      <v-flex xs4 md2 class="party_tab_bar">
        <img :src="active_party.src" alt="active_party" class="active_party">
      </v-flex>
      <div class="member_count">국회의석 : 130석</div>
      <hr>
    </v-layout>

    <v-layout row wrap justify-space-between>
      <div class="voting_list">
        <voting-list></voting-list>
      </div>
      <div class="voting_list">
        <voting-list></voting-list>
      </div>
    </v-layout>
  </v-flex>
</v-layout>  
</template>

<script>
import VotingList from '../../../components/Vote'

export default {
  name: 'Party',
  data () {
    return {
      party_btns1: [
        {src: '../../../../static/party_blue_character.png', color: '#1783DC'},
        {src: '../../../../static/party_red_character.png', color: '#E1241A'},
        {src: '../../../../static/party_yellow_character.png', color: '#FCDC00'},
        {src: '../../../../static/party_orange_character.png', color: '#EC8C0D'}
      ],
      party_btns2: [
        {src: '../../../../static/party_mint_character.png', color: '#14CDCC'},
        {src: '../../../../static/party_blue_character.png', color: '#123167'},
        {src: '../../../../static/party_blue_character.png', color: '#3EA437'},
        {src: '../../../../static/party_blue_character.png', color: '#C6C6C6'}
      ],
      active_party: {src: "../../../../static/partylist_tab_blue_character.png"}
    }
  },
  components: { VotingList }
}
</script>

<style scoped>
@media (max-width: 960px) {
  button.party_btn {
    width: 16.85vw;
    height: 16.85vw;
    margin-bottom: 4.71vw;
  }
  div.btn_layout {
    padding-right: 0;
  }
  div.member_count {
    font-size: 3vw;
    padding-top: 15vw;
  }
  div.voting_list {
    width: 83vw;
  }
  div.party_tab_bar {
    height: 21vw;
  }
}
.party_page
{
  margin-top: 4.63vh;
}
.party_text
{
  width: 100%;
  margin-bottom: 3vh;
}
.btn_layout
{
  padding-right: 5.1vw;
}
.party_btn
{
  width: 8.66vw;
  height: 8.66vw;
  margin-bottom: 1.54vw;
  border-radius: 10px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
}
.party_img
{
  width: 100%;
}
.party_tab_bar
{
  height: 7.4vw;
}
.active_party
{
  width: 100%;
}
.member_count
{
  font-family: NanumBarunGothic;
  font-size: 1.4vw;
  color: #A1A1A1;
  padding-top: 5vw;
}
hr
{
  width: 100%;
  border: 0;
  height: 3px;
  background: #1783DC;
}
.voting_list
{
  width: 28.64vw;
}
</style>
