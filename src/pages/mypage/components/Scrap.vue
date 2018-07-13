<template>
<v-layout>
  <v-flex xs10 offset-xs1>
    <!-- <contents v-bind:contentsData="mypage_data.scrap", content_info="sendContentInfo()" ></contents> -->
    <contents :content_info="sendContentInfo()"
     :contentsData="mypage_data.scrap" title="관련 컨텐츠"></contents>
    <!-- {{ mypage_data.scrap }} -->
  </v-flex>
</v-layout>
</template>

<script>
import Contents from '../../../components/Contents'
export default {
  name: 'Scrap',
  props: ['mypage_data'],
  components: { Contents },
  methods: {
    sendContentInfo() {
      return {
        linkNone: false,
        endItem: 4, //이거 페이징 단위랑 맞춰줘야함.. 좀 잘못짬 ㅠ
        PAGENUM: 4, //페이징 단위
        DOTNUM: 4, //버튼개수
        // scrapData: this.mypage_data.scrap
      }
    }
  }
}
</script>

<style>
</style>
