<template>
<div>
  <v-layout row wrap>
    <v-flex xs10 offset-xs1>
      <router-link to="/list">
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
  name: 'LegislatorList',
  created() {
    this.$store.commit('putIsLike', 1);
  }
}

</script>

<style scoped>
@media (max-width: 600px) {
  div.route_link {
    font-size: 5vw;
    width: 40vw;
    margin-right: 0;
  }
}
.route_link
{
  width: 8.33vw;
  padding-top: 2.73vh;
  padding-bottom: 2.27vh;
  margin-right: 8.33vw;
  border-bottom: 0.46vh solid white;
  text-align: center;
  font-size: 1.46vw;
  font-family: NanumBarunGothic;
  color: #666666;
  cursor: pointer;
  display: inline-block;
}
.route_link:hover
{
  border-bottom: 0.46vh solid #36C5F1;
  color: #36C5F1;
}
.router-link-exact-active div
{
  border-bottom: 0.46vh solid #36C5F1;
  color: #36C5F1;
}
</style>
