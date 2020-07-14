<template>
  <div class="care">
    <!-- 视频短信下的品牌曝光 -->
    <div class="lefte-img">
      <img src="../assets/视频短信/guanhuai.png" />
    </div>
    <div class="right-text">
      <p class="one" style="margin-inline-start: -16px;">客户关怀</p>
      <ul style="padding-inline-start: 10px;" class="jieHe">
        <li>结合节日，对高价值客户进行超级短信触达</li>
        <li>
          更生动的表现紧紧吸引眼球，提供更加优质的 用户体验
        </li>
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
.care {
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

.lefte-img {
  float: left;
}

.lefte-img>img {
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
  line-height: 40px;
}

.jieHe{
  width: 430px;
}
</style>