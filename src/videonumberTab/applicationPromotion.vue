<template>
  <div class="application">
    <!-- 视频短信下的品牌曝光 -->
    <div class="lefts-img">
      <img src="../assets/视频短信/tuiguang.png" />
    </div>
    <div class="right-text">
      <p class="one" style="margin-inline-start: -20px;">应用推广</p>
      <ul  style="padding-inline-start: 17px;" class="buZai">
        <li>
          不再是单纯的70个字文本，可添加图片、视频、 音频等
        </li>
        <li>给用户更直观的观看效果</li>
        <li>主动推送内容，直击目标客户，轻松实现高转化</li>
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
.application {
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

.mian2 {
  width: 90%;
  height: 10rem;
  border: 1px solid gold;
  margin: auto;
}

.lefts-img {
  float: left;
}

.lefts-img>img {
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
}

.right-text>ul>li {
  margin-top: 18px;
  font-size: 21px;
  line-height: 6.5vh;
}

.buZai{
  width: 470px;
}

</style>