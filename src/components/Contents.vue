<template>
<div class="contents">




  <v-layout row wrap justify-space-around>
    <v-flex xs12 class="component_title">
      관련 콘텐츠
    </v-flex>
    <v-flex xs6 sm4 md3 class="content_card" v-for="item in pageItems" :key="item.id">
      <img :src="item.image" class="content_image">
      <div>
        <div>
          <div class="content_title"> {{ item.title }}</div>
        </div>
      </div>
      <div class="content_desc">
        {{ item.desc }}
      </div>
    </v-flex>
  </v-layout>

  <div class="dot_box" align="center">
    <a href="#">
    <span v-on:click="getPagingData($event)" class="dot" v-bind:class="{ on : currentPage == 1 }" id="1"></span>
    </a>
    <a href="#" v-on:click="getPagingData($event)" v-bind:id="index + 1" v-for="index in pageLength" :key="index">
    <span class="dot" v-bind:class="{ on : currentPage == index + 1 }"></span>
    </a>
  </div>

</div>
</template>

<script>
export default {
  name: 'Contents',
  methods: {
    getPagingData(event) {
      var curPageNum = event.currentTarget.id;
      this.currentPage = curPageNum;
      var startItem = (curPageNum - 1) * this.PAGENUM;
      var endItem = this.PAGENUM * curPageNum;

      this.pageItems = {
        start: this.startItem,
        end: this.endItem
      }
    }
  },
  computed: {
    pageLength: function() {
      var itemLength = this.items.length > this.PAGENUM * this.DOTNUM ? this.PAGENUM * this.DOTNUM   : this.items.length;
      var pageLength = Math.ceil((itemLength / this.PAGENUM)) - 1;
      return pageLength;
    },
    pageItems: {
      get: function() {
        return this.items.slice(this.startItem, this.endItem);
      },
      set: function(newValue) {
        this.startItem = newValue.start;
        this.endItem = newValue.end;
      }
    }

  },
  data() {
    return {
      currentPage: 1,
      startItem: 0,
      endItem: 12,
      PAGENUM: 12, //페이징 단위
      DOTNUM: 4, //버튼개수
      items: [{
          id: 1,
          image: '/static/card_image1.jpeg',
          title: '문재인 대통령의 살아온 일대기와 운명',
          desc: '테스트1'
        },
        {
          id: 2,
          image: '/static/card_image1.jpeg',
          title: '문재인 대통령의 살아온 일대기와 운명',
          desc: '테스트2'
        },
        {
          id: 3,
          image: '/static/card_image1.jpeg',
          title: '문재인 대통령의 살아온 일대기와 운명',
          desc: '테스트3'
        },
        {
          id: 4,
          image: '/static/card_image1.jpeg',
          title: '문재인 대통령의 살아온 일대기와 운명',
          desc: '테스트4'
        },
        {
          id: 5,
          image: '/static/card_image1.jpeg',
          title: '문재인 대통령의 살아온 일대기와 운명',
          desc: '테스트4'
        },
        {
          id: 6,
          image: '/static/card_image1.jpeg',
          title: '문재인 대통령의 살아온 일대기와 운명',
          desc: '테스트4'
        },
        {
          id: 7,
          image: '/static/card_image1.jpeg',
          title: '문재인 대통령의 살아온 일대기와 운명',
          desc: '테스트4'
        },
        {
          id: 8,
          image: '/static/card_image1.jpeg',
          title: '문재인 대통령의 살아온 일대기와 운명',
          desc: '테스트4'
        },
        {
          id: 9,
          image: '/static/card_image1.jpeg',
          title: '문재인 대통령의 살아온 일대기와 운명',
          desc: '테스트4'
        },
        {
          id: 10,
          image: '/static/card_image1.jpeg',
          title: '문재인 대통령의 살아온 일대기와 운명',
          desc: '테스트4'
        },
        {
          id: 11,
          image: '/static/card_image1.jpeg',
          title: '문재인 대통령의 살아온 일대기와 운명',
          desc: '테스트4'
        },
        {
          id: 12,
          image: '/static/card_image1.jpeg',
          title: '문재인 대통령의 살아온 일대기와 운명',
          desc: '테스트4'
        },
        {
          id: 13,
          image: '/static/card_image1.jpeg',
          title: '문재인 대통령의 살아온 일대기와 운명',
          desc: '테스트4'
        },
        {
          id: 14,
          image: '/static/card_image1.jpeg',
          title: '문재인 대통령의 살아온 일대기와 운명',
          desc: '테스트4'
        },
        {
          id: 15,
          image: '/static/card_image1.jpeg',
          title: '문재인 대통령의 살아온 일대기와 운명',
          desc: '테스트4'
        },
        {
          id: 16,
          image: '/static/card_image1.jpeg',
          title: '문재인 대통령의 살아온 일대기와 운명',
          desc: '테스트4'
        },
        {
          id: 17,
          image: '/static/card_image1.jpeg',
          title: '문재인 대통령의 살아온 일대기와 운명',
          desc: '테스트4'
        },
        {
          id: 18,
          image: '/static/card_image1.jpeg',
          title: '문재인 대통령의 살아온 일대기와 운명',
          desc: '테스트4'
        },
        {
          id: 19,
          image: '/static/card_image1.jpeg',
          title: '문재인 대통령의 살아온 일대기와 운명',
          desc: '테스트4'
        },
        {
          id: 20,
          image: '/static/card_image1.jpeg',
          title: '문재인 대통령의 살아온 일대기와 운명',
          desc: '테스트4'
        },
        {
          id: 21,
          image: '/static/card_image1.jpeg',
          title: '문재인 대통령의 살아온 일대기와 운명',
          desc: '테스트4'
        },
        {
          id: 22,
          image: '/static/card_image1.jpeg',
          title: '문재인 대통령의 살아온 일대기와 운명',
          desc: '테스트4'
        },
        {
          id: 23,
          image: '/static/card_image1.jpeg',
          title: '문재인 대통령의 살아온 일대기와 운명',
          desc: '테스트4'
        },
        {
          id: 24,
          image: '/static/card_image1.jpeg',
          title: '문재인 대통령의 살아온 일대기와 운명',
          desc: '테스트4'
        },
        {
          id: 25,
          image: '/static/card_image1.jpeg',
          title: '문재인 대통령의 살아온 일대기와 운명',
          desc: '테스트4'
        },
        {
          id: 26,
          image: '/static/card_image1.jpeg',
          title: '문재인 대통령의 살아온 일대기와 운명',
          desc: '테스트4'
        },
        {
          id: 27,
          image: '/static/card_image1.jpeg',
          title: '문재인 대통령의 살아온 일대기와 운명',
          desc: '테스트4'
        },
        {
          id: 28,
          image: '/static/card_image1.jpeg',
          title: '문재인 대통령의 살아온 일대기와 운명',
          desc: '테스트4'
        },
        {
          id: 29,
          image: '/static/card_image1.jpeg',
          title: '문재인 대통령의 살아온 일대기와 운명',
          desc: '테스트4'
        },
        {
          id: 30,
          image: '/static/card_image1.jpeg',
          title: '문재인 대통령의 살아온 일대기와 운명',
          desc: '테스트4'
        },
        {
          id: 31,
          image: '/static/card_image1.jpeg',
          title: '문재인 대통령의 살아온 일대기와 운명',
          desc: '테스트4'
        },
        {
          id: 32,
          image: '/static/card_image1.jpeg',
          title: '문재인 대통령의 살아온 일대기와 운명',
          desc: '테스트4'
        },
        {
          id: 33,
          image: '/static/card_image1.jpeg',
          title: '문재인 대통령의 살아온 일대기와 운명',
          desc: '테스트4'
        },
        {
          id: 34,
          image: '/static/card_image1.jpeg',
          title: '문재인 대통령의 살아온 일대기와 운명',
          desc: '테스트4'
        },
        {
          id: 35,
          image: '/static/card_image1.jpeg',
          title: '문재인 대통령의 살아온 일대기와 운명',
          desc: '테스트4'
        },
        {
          id: 36,
          image: '/static/card_image1.jpeg',
          title: '문재인 대통령의 살아온 일대기와 운명',
          desc: '테스트4'
        },
        {
          id: 37,
          image: '/static/card_image1.jpeg',
          title: '문재인 대통령의 살아온 일대기와 운명',
          desc: '테스트4'
        },
        {
          id: 38,
          image: '/static/card_image1.jpeg',
          title: '문재인 대통령의 살아온 일대기와 운명',
          desc: '테스트4'
        },
        {
          id: 39,
          image: '/static/card_image1.jpeg',
          title: '문재인 대통령의 살아온 일대기와 운명',
          desc: '테스트4'
        }
      ]
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
  border: 1px solid #D3D3D3;
  border-radius: 4px;
  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.16);
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
  font-family: NanumBarunGothicOTF;
}

.content_desc {
  width: 100%;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  color: #C6C6C6;
  font-family: NanumBarunGothicOTF;
}

.dot.on {
  background-color: #36C5F1;
}
</style>
