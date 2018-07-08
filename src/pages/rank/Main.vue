<template>
  <div>
    <login></login>
    <!-- <login></login> -->
    <v-layout row wrap>
      <v-layout row wrap>
        <v-flex xs10 offset-xs1>
          <rank-box></rank-box>
        </v-flex>
        <v-flex xs1></v-flex>
      </v-layout>
    </v-layout>
  </div>


  <!--s </v-layout> -->
</template>

<script>
import RankBox from './components/RankBox'
// import Modal from '@/pages/legislator/components/SupportModal'
import Login from '@/components/Login'

export default {
  name: 'Rank',
  components: { RankBox, Login },
  data () {
    return {}
  }
}
</script>

<style scoped>
</style>
