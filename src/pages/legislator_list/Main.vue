<template>
<div>
  <v-layout row wrap>
    <v-flex xs10 offset-xs1>
      <router-link to="/list/party">
        <div class="route_link party_link">정당</div>
      </router-link>
      <router-link to="/list/region">
        <div class="route_link region_link">지역</div>
      </router-link>
      <hr>
    </v-flex>
    <v-flex xs1></v-flex>
  </v-layout>
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'LegislatorList'
}
</script>

<style scoped>
.route_link
{
  width: 8.33vw;
  height: 5.3vw;
  padding-top: 1.7vw;
  margin-right: 8.33vw;
  text-align: center;
  font-size: 1.46vw;
  font-family: NanumBarunGothic;
  color: #666666;
  cursor: pointer;
  display: inline-block;
}
.route_link:hover
{
  border-bottom: 0.26vw solid #36C5F1;
  color: #36C5F1;
}
</style>
