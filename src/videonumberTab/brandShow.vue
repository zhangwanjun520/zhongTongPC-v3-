<template>
  <div class="brand">
    <!-- 视频短信下的品牌曝光 -->
    <div class="lef-img">
      <img src="../assets/视频短信/show2.png" />
    </div>
    <div class="right-text">
      <p class="one" style="margin-inline-start: -20px;">品牌曝光</p>
      <ul style="padding-inline-start: 0;" class="zaiMei">
        <li>再美的文字不如一条视频，全方位立体展示产品</li>
        <li>展现内容丰富，用户的互动感和参与感更强</li>
      </ul>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
export default {
  // components:{List}
};
</script>
<style>
.brand {
  height: 70vh;
  width: 1320px;
  margin: auto;
  cursor: pointer;
  z-index: 400;
  position: absolute;
  top: 45vh;
  bottom: 0px;
  left: 0;
  right: 0;
  display: flex;
}

.lef-img {
  float: left;
}

.lef-img>img {
  width: 722px;
}

.right-text {
  margin-top: 5vh;
  float: right;
  width: 30vw;
  height: auto;
  font-size: 40px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  margin-left: 30px;
}

.right-text>ul>li {
  margin-top: 18px;
  font-size: 21px;
  line-height: 6.5vh;
}

.zaiMei{
  width: 470px;
}
</style>