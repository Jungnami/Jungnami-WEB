<template>
  <!-- <v-layout row wrap md7> -->
  <v-layout row wrap>


    <!-- <v-flex xs1></v-flex> -->
    <v-layout row wrap>
      <v-flex xs10 offset-xs1>
        <rank-box></rank-box>
      </v-flex>
      <v-flex xs1></v-flex>
    </v-layout>


  </v-layout>
  <!-- </v-layout> -->
</template>

<script>
import RankBox from './components/RankBox'
export default {
  name: 'Rank',
  components: { RankBox },
  data () {
    return {}
  }
}
</script>

<style scoped>
</style>
