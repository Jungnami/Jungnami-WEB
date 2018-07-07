<template>
<v-layout>
  <v-flex xs10 offset-xs1>
    <contents v-bind:content_info="sendContentInfo()"></contents>
  </v-flex>
</v-layout>
</template>

<script>
import Contents from '../../../components/Contents'
export default {
  name: 'Scrap',
  components: { Contents },
  methods: {
    sendContentInfo() {
      return {
        endItem: 4, //이거 페이징 단위랑 맞춰줘야함.. 좀 잘못짬 ㅠ
        PAGENUM: 4, //페이징 단위
        DOTNUM: 4, //버튼개수
      }
    }
  }
}
</script>

<style>
</style>
