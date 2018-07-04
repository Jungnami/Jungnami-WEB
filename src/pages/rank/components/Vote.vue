<template>
<div class="vote_container">

  <div class="vote_content">


  <div class="rank" > <!--inline block-->
    <div class="img">
    </div>
    <div class="content">
          1
    </div>
  </div>

  <div class="thumbnail_box"><!--inline block-->

    <div class="thumbnail_border">
      <img src="../../../../static/img_avatar.png" alt="Avatar" class="thumbnail" >
    </div>

  </div>

  <div class="progress"><!--inline block-->
    <div class="bar">
      <div class="percent">

      </div>
    </div>
  </div>

  <div class="emotion"><!--inline block-->

  </div>
</div>
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
.vote_container {
  width: 99vw;
  /*height: auto;*/
  height: 14vw;
  position: relative;
  background-color: rgba(0, 0, 0, 0.05);
  padding-top: 0.8%;
  padding-bottom: 1%;

}
.vote_content {
  height: 100%;
  /*padding: 20px;*/
  display: table;
}



.rank {
  width: 17%;
  height: 100%;
  display: table-cell;
}
.rank .img
{
  width: 50%;
  margin: 0 auto;
  height: 90%;
  background-image: url('../../../../static/gold_medal.png');
  background-size: contain;
  align: center;
  position: relative;
  top: 5%;
}


.rank .content{
     position: absolute;
     top:50%;
     left: 7.85%;
     /*left:50%;*/
     transform: translate(-50%, -50%);
     font-size:2.7vw;
     color: white;
     z-index: 2;
     text-align: center;
}

.rank_text{
  display: inline-block;
  /*padding: 30px;*/
  text-align: center;
}



.thumbnail_box
{
  width: 12%;
  /*height: 60px;*/
  /*padding-top: 8px;*/
  /*padding-bottom: 8px;*/
  /*background-color: #1783DC;*/
  display: table-cell;
  /*border-radius: 50%;*/
  position: relative;
  /*right: 0px;
  top: -5px;*/
  z-index: 1;


  /*vertical-align: baseline;*/
}

.thumbnail_border
{
  /*height: */
}

.thumbnail
{
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border : 3px solid #1783DC;

}




.progress
{
  width: 300px;
  height: 100%;
  position: relative;
  right: +13px;
  z-index: 0;
}

.emotion
{
    width:20%;
    display: table-cell;
}


.bar {
  /*display: inline-block;*/
  height: 100%;
  /*background-color: #1783DC;*/
  width: 100%;
  padding-top: 12px;
  padding-bottom: 12px;
  /*border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;*/

}

.percent {
  height: 100%;
  background-color: #1783DC;
  width: 100%;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
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

.vote_percent {
  width: 80%;
}*/
</style>
