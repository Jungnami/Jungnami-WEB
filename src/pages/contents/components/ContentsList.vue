<template>
  <div>

  <!-- <v-layout row wrap justify-space-around> -->

    <v-layout row wrap class="content_box" justify-space-between>
      <v-flex md1 class="content_category">
          {{ title }}
      </v-flex>
      <v-flex md1 v-if="seeMore" class="content_more" >
        <router-link :to="seeMorePath" class="content_more_btn">더보기</router-link>
      </v-flex>
    </v-layout>

    <v-layout row wrap >

      <v-flex xs6 sm4 md3 v-for="item in pageItems" :key="item.contentsid">
        <router-link :to="getContentLink(item.contentsid)">
      <div class="content_card">
        <img :src="item.thumbnail" class="content_image">
        <div>
          <div>
            <div class="content_title"> {{ item.title }}</div>
          </div>
        </div>
        <div class="content_desc">
          {{ item.text }}
        </div>
      </div>
      </router-link>
      </v-flex>

    </v-layout>

  <!-- </v-layout> -->

    <div class="dot_box" align="center">
      <span v-on:click="getPagingData($event)" class="dot" v-bind:class="{ on : currentPage == 1 }" id="1"></span>
      <span class="dot" v-on:click="getPagingData($event)" v-for="index in pageLength" v-if="index >= 2" v-bind:id="index"  v-bind:class="{ on : currentPage == index }"></span>
    </div>

</div>
</template>

<script>
export default {
  name: 'ContentsList',
  props: ['contents_list_info'],
  methods: {
    getPagingData(event) {
      var curPageNum = event.currentTarget.id;
      this.currentPage = curPageNum;
      var startItem = (curPageNum - 1) * this.PAGENUM;
      var endItem = this.PAGENUM * curPageNum;
      this.pageItems = startItem + ' ' + endItem;
    },
    getContentLink(c_id) {
      return `/contentsDetail/${c_id}`
    }
  },
  computed: {
    pageLength: function() {
      var itemLength = this.items.length > this.PAGENUM * this.DOTNUM ? this.PAGENUM * this.DOTNUM : this.items.length;
      var pageLength = Math.ceil((itemLength / this.PAGENUM));
      return pageLength;
    },
    pageItems: {
      get: function() {
        // return this.items
        // console.log("pageItems :::;; " + this.items);
        // console.log(this.items.slice(0,5));
        return this.items.slice(this.startItem, this.endItem);
      },
      set: function(newValue) {
        var pagingSlot = newValue.split(' ');
        this.startItem = pagingSlot[0];
        this.endItem = pagingSlot[1];
      }
    },
    items: function() {
      return this.contents_list_info.items
    }
  },
  data() {
    return {
      //고정된 데이터 받는거 전용.. PAGENUM * DOTNUM 만큼의 데이터를 불러옴
      currentPage: 1,
      startItem: 0,
      seeMorePath: this.contents_list_info.path,
      title: this.contents_list_info.title,
      seeMore: this.contents_list_info.seeContentsMore,
      endItem: this.contents_list_info.endItem,
      PAGENUM: this.contents_list_info.PAGENUM, //페이징 단위
      DOTNUM: this.contents_list_info.DOTNUM, //버튼개수

    }
  }
}
</script>



<style scoped>

@media (min-width: 960px) {
  .content_box {
    margin-top: 1.64vw;
    margin-bottom: 1.64vw;
  }

  .content_image {
    width: 16.04vw;
    height: 12.66vw;
    border-radius: 5%;
    margin-bottom: 1.318vw;
  }

  .content_category{
    font-size: 1.3vw;
    color: #000;
    font-family: NanumBarunGothicBold
  }

  .content_more{
    font-size: 1.04vw;
    color: #BDBDBD;
    font-family: NanumBarunGothic

  }

  .content_more{
    text-align: right;
  }

  .content_desc {
    width: 100%;
    display: -webkit-box;
    overflow: hidden;
    margin-bottom: 2.05vw;
    font-size: 1.04vw;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    color: #C6C6C6;
    font-family: NanumBarunGothic;
  }

  .content_title{
    margin-bottom: 1.29vw;
    display: -webkit-box;
    overflow: hidden;
    color: rgb(75, 75, 75);
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    font-size: 1.145vw;
  }

  .content_card {
    width: 16.04vw;
    /*margin-bottom: 4.3vw;*/
  }

  .dot {
    height: 10px;
    width: 10px;
    margin-left: 7px;
    margin-right: 7px;
    background-color: #FFF;
    border-radius: 50%;
    display: inline-block;
    border: 1px solid #36C5F1;
  }


  .dot_box {
    /*margin-top: 2.05vw;*/
    margin-bottom: 2.67vw;
  }

  .dot.on {
    background-color: #36C5F1;
  }
  a {
      color: #BDBDBD;
    }
  a:hover{
      color: #BDBDBD;
    }
}

@media (max-width: 959px) {
  .content_box {
    margin-top: 3.73vw;
    margin-bottom: 3.73vw;
  }

  .content_image {
    width: 27vw;
    height: 21.6vw;
    border-radius: 5%;
    margin-bottom: 1.5vw;
  }

  .content_category{
    font-size: 3.733vw;
    color: #000;
    font-family: NanumBarunGothicBold
  }

  .content_more{
    font-size: 1.3vw;
    color: #BDBDBD;
    font-family: NanumBarunGothic

  }

  .content_more{
    text-align: right;
  }

  .content_desc {
    width: 100%;
    display: -webkit-box;
    overflow: hidden;
    font-size: 1.04vw;
    -webkit-box-orient: vertical;
    margin-bottom: 2.05vw;
    -webkit-line-clamp: 1;
    color: #C6C6C6;
    font-family: NanumBarunGothic;
  }

  .content_title{
    margin-bottom: 1.29vw;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .content_card {
    width: 27.39vw;
    /*margin-bottom: 4.3vw;*/
  }

  .dot {
    height: 10px;
    width: 10px;
    margin-left: 7px;
    margin-right: 7px;
    background-color: #FFF;
    border-radius: 50%;
    display: inline-block;
    border: 1px solid #36C5F1;
  }


  .dot_box {
    /*margin-top: 2.05vw;*/
    margin-bottom: 2.67vw;
  }

  .dot.on {
    background-color: #36C5F1;
  }

  a{
      color: #BDBDBD;
    }
  a:hover{
      color: #BDBDBD;
    }
}

@media (max-width: 599px) {
  .content_box {
    margin-top: 3.73vw;
    margin-bottom: 3.73vw;
  }

  .content_image {
    width: 40vw;
    height: 31.9vw;
    border-radius: 5%;
    margin-bottom: 1.318vw;
  }

  .content_category{
    font-size: 3.733vw;
    color: #000;
    font-family: NanumBarunGothicBold
  }

  .content_more{
    font-size: 1.3vw;
    color: #BDBDBD;
    font-family: NanumBarunGothic
  }

  .content_more{
    text-align: right;
  }

  .content_desc {
    width: 100%;
    margin-bottom: 2.05vw;
    font-size: 1.04vw;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    color: #C6C6C6;
    font-family: NanumBarunGothic;
  }

  .content_title{
    margin-bottom: 1.29vw;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .content_card {
    width: 41.5vw;
    /*margin-bottom: 4.3vw;*/
  }

  .dot {
    height: 10px;
    width: 10px;
    margin-left: 7px;
    margin-right: 7px;
    background-color: #FFF;
    border-radius: 50%;
    display: inline-block;
    border: 1px solid #36C5F1;
  }


  .dot_box {
    margin-top: 2.05vw;
    margin-bottom: 2.67vw;
  }

  .dot.on {
    background-color: #36C5F1;
  }

  a{
      color: #BDBDBD;
    }
  a:hover{
      color: #BDBDBD;
    }

}


/*@media (min-width: 1264px) {



@media (max-width: 1264px) and (min-width: 600px) {

  .component_title {
    font-size: 17px;
    margin-bottom: 22.54px;
    margin-top: 22.54px;
  }
  .component_desc {
    font-size: 10px;
    line-height: 14px;
    padding-top: 8px;
  }
  .content_card {
    width: 16.04vw;
    padding-left: 0.6vw;
    padding-right: 0.6vw;
    margin-bottom: 5.42vw;
  }

  .dot_box {
    margin-top: 11.21px;
    margin-bottom: 13.23px;
  }

}

@media (max-width: 600px) {
  .component_title {
    font-size: 16px;
    margin-bottom: 13.86px;
    margin-top: 13.86px;
  }
  .component_desc {
    font-size: 8px;
    line-height: 11px;
    padding-top: 1.95px;
  }
  .content_card {
    width: 180px;
    padding-left: 13.3px;
    padding-right: 13.3px;
    margin-bottom: 20.25px;
  }
  .dot {
    height: 7px;
    width: 7px;
    margin-left: 4.15px;
    margin-right: 4.15px;
    background-color: #FFF;
    border-radius: 50%;
    display: inline-block;
    border: 1px solid #36C5F1;
  }
  .dot_box {
    margin-top: 11.21px;
    margin-bottom: 13.23px;
  }
}

.contents {
  padding-left: 1vw;
  padding-right: 1vw;
  margin-bottom: 8.33vh;
}

.component_title {
  font-weight: bold;
}


.content_image {
  width: 100%;
  border-radius: 5%;
}

.content_title {
  width: 100%;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  color: #000000;
  font-family: NanumBarunGothic;
}
*/
/*dot*/

</style>
