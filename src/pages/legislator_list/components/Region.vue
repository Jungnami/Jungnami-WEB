<template>
<v-layout row wrap>
  <v-flex xs7 md3 offset-xs1>
    <img src="../../../../static/list_party_text.png" alt="list_party_text" class="party_text">
    <map-component class="hidden-sm-and-down"></map-component>
  </v-flex>
</v-layout>
</template>

<script>
import MapComponent from './Map'

export default {
  name: 'Region',
  components: { MapComponent }
}
</script>

<style scoped>
.party_text
{
  width: 100%;
  margin-top: 4.63vh;
  margin-bottom: 10.74vh;
}
</style>
