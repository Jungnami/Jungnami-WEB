<template>
<div class="contents" v-if="contentsData">

  <v-layout row wrap>
    <v-flex xs12 class="component_title" v-if="title">
      {{ title }}
    </v-flex>
    <v-flex xs6 sm4 md3 class="content_card" v-for="content in contentsData" :key="content.c_id">
      <router-link :to="getContentLink(content.c_id)">
        <img :src="content.thumbnail" class="content_image">
        <div>
          <div>
            <div class="content_title"> {{ content.c_title }}</div>
          </div>
        </div>
        <div class="content_desc">
          {{ content.text }}
        </div>
      </router-link>
    </v-flex>
  </v-layout>

  <div class="dot_box" align="center" v-if="this.hasLink">
    <a href="#" >
    <span v-on:click="getPagingData($event)" class="dot" v-bind:class="{ on : currentPage == 1 }" id="1"></span>
    </a>
    <a href="#" v-on:click="getPagingData($event)" v-for="index in pageLength" v-bind:id="index" v-if="index >= 2">
    <span class="dot" v-bind:class="{ on : currentPage == index }"></span>
    </a>
  </div>

  <div class="dot_box" align="center" v-if="!(this.hasLink)">

    <span v-on:click="getPagingData($event)" class="dot" v-bind:class="{ on : currentPage == 1 }" id="1"></span>

    <span class="dot" v-on:click="getPagingData($event)" v-for="index in pageLength" v-bind:id="index" v-if="index >= 2" v-bind:class="{ on : currentPage == index}"></span>

  </div>

</div>
</template>

<script>
export default {
  name: 'Contents',
  props: ['content_info', 'contentsData', 'title'],
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
      var itemLength = this.contentsData.length > this.PAGENUM * this.DOTNUM ? this.PAGENUM * this.DOTNUM   : this.contentsData.length;
      var pageLength = Math.ceil((itemLength / this.PAGENUM));
      return pageLength;
    },
    pageItems: {
      get: function() {
        return this.items.slice(this.startItem, this.endItem);
      },
      set: function(newValue) {
        var pagingSlot = newValue.split(' ');
        this.startItem = pagingSlot[0];
        this.endItem = pagingSlot[1];
      }
    }

  },
  data() {
    return {
      //고정된 데이터 받는거 전용.. PAGENUM * DOTNUM 만큼의 데이터를 불러옴
      currentPage: 1,
      startItem: 0,
      hasLink: this.content_info.linkNone, //a href 링크를 걸지 말지
      endItem: this.content_info.endItem,
      PAGENUM: this.content_info.PAGENUM, //페이징 단위
      DOTNUM: this.content_info.DOTNUM //버튼개수
    }
  }
}
</script>

<style scoped>
@media (min-width: 1264px) {
  .component_title {
    font-size: 27px;
    margin-bottom: 31px;
    margin-top: 31px;
  }
  .component_desc {
    font-size: 15px;
    line-height: 20px;
    padding-top: 17px;
  }
  .content_card {
    width: 23.2vw;
    padding-left: 0.6vw;
    padding-right: 0.6vw;
    margin-bottom: 4.3vw;
  }
  .dot {
    height: 13px;
    width: 13px;
    margin-left: 7px;
    margin-right: 7px;
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
    width: 21.7vw;
    padding-left: 0.6vw;
    padding-right: 0.6vw;
    margin-bottom: 5.42vw;
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

@media (max-width: 960px) and (min-width: 600px) {
  img.content_image {
    min-height: 14.5vw;
    max-height: 14.5vw;
    height: 14.5vw;
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
  img.content_img {
    min-height: 25.3vw;
    max-height: 25.3vw;
    height: 25.3vw;
  }
}

.contents {
  padding-left: 1vw;
  padding-right: 1vw;
  margin-bottom: 8.33vh;
  border: 1px solid #D3D3D3;
  border-radius: 4px;
  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.16);
}

.component_title {
  font-weight: bold;
}


.content_image {
  width: 100%;
  min-height: 10.66vw;
  max-height: 10.66vw;
  height: 10.66vw;
  border-radius: 5%;
}

.content_title {
  width: 100%;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  color: #000000;
  font-family: NanumBarunGothicOTF;
}

.content_desc {
  width: 100%;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  color: #C6C6C6;
  font-family: NanumBarunGothic;
}

.dot.on {
  background-color: #36C5F1;
}
</style>
