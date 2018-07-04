<template>
<div>
  <!--리스팅될 화면 pc: 1117.88, tablet: 648.71-->

  <v-list class="vote_list">
    <template v-for="index in 10">
    <div class="vote_container">
      <div class="vote_content">
        <div class="rank_box">
          <div class="rank_border">
            <div class="img">
              <div class="content">
                1
              </div>
            </div>
          </div>
        </div>
        <div class="thumbnail_box">
          <div class="thumbnail_border">
            <img src="../../../../static/img_avatar.png" alt="Avatar" class="thumbnail_content">
          </div>
        </div>

        <div class="progress_box">
          <div class="progress_border">
            <div class="progress_percent">
              <div class="text"> 김병관 </div>
              <div class="count"> 270,000표 </div>

            </div>

          </div>
        </div>

        <div class="emotion">

        </div>
      </div>

    </div>
    </template>
  </v-list>



</div>
</template>
<script>
export default {
  name: 'Vote',
  data() {
    return {}
  }
}
</script>


<style scoped>
/*root : 549px*/

.vote_list {
  width: 50vw;
  height: 100vw;

}


.vote_container {
  width: 100%;
  /*height: auto;*/
  height: 10%;
  /*position: relative;*/
  background-color: rgba(0, 0, 0, 0.05);
  padding-top: 1%;
  padding-bottom: 1%;

}

.vote_content {
  height: 100%;
  display: table;
}

.rank_box {
  width: 17%;
  display: table-cell;
  position: relative;
  vertical-align: top;
  z-index: 1;
  /*border: 1px solid #1783DC;*/

}

.rank_border {
  position: relative;
  height: 100%;
  padding-top: 5%;
  padding-bottom: 5%;
  /*align-items:center;*/
}

.img {
  /*top: 50%;*/
  /*top: 200px;*/

  position: relative;
  top: 25%;;
  height: 60%;
  width: 50%;
  /*align: middle;*/
  /*vertical-align: super;*/
  margin: 0 auto;
  background-image: url('../../../../static/gold_medal.png');
  background-size: contain;
  /*border: 2px solid #1783DC;*/
}

/* .rank를 기준으로 가운데에 텍스트가필요한 부분*/

.content {
  /* Centered text */
  left: -2%;
  position: relative;
  text-align: center;
  /*width: 50%;*/
  /*height: 50%;*/
  margin: 0 auto;
  font-size: 2.7vw;
  color: white;
  z-index: 2;
  /*border: 1px solid #1783DC;*/

}


.thumbnail_box {
  width: 14%;
  display: table-cell;
  position: relative;
  vertical-align: top;
  /*border: 1px solid #1783DC;*/

  /*z-index: 1;*/
}

.thumbnail_border {
  position: relative;
  padding-top: 12%;
  padding-bottom: 12%;
}

.thumbnail_content {
  width: 100%;
  border-radius: 50%;
  vertical-align: baseline;
  /*border: 0.35vw solid #1783DC;*/
  border: 2px solid #1783DC;
  position: relative;
  z-index: 1;
}


.progress_box {
  display: table-cell;

  width: 58%;
  height: 100%;
  /*position: relative;*/
  /*right: +13px;*/
  z-index: 0;
}

.progress_border {
  position: relative;
  height: 100%;
  width: 100%;
  left: -10%;
  padding-top: 10%;
  padding-bottom: 10%;
}

.progress_percent {
  height: 100%;
  background-color: #1783DC;
  width: 100%;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  align: middle;



}

.count
{
  text-align: right;
  font-size: 1.5vw;
  color: white;
  top: 20%;
  right: 10%;
  position: relative;

}

.emotion {
  width: 11%;
  display: table-cell;
}






.text {
  z-index: 4;
  align: center;
  color: white;
  font-size:2vw;
  position: absolute;
  background: none !important;
  left: 10%;
  top: 35%;
  /*border: 2px solid #FFFFFF;*/

}




/*.vote_container {
  width: 324.29px;
  height: 60.13px;
  display: inline-block;
  background-color: '#000';
}

.vote_box {
  width: 300px;
  background: #000;
}

.vote_progress {
  width: 80%;
}*/
</style>
