<template>
  <div class="sell">
    <!-- 视频短信下的品牌曝光 -->
    <div class="left-img">
      <img src="../assets/视频短信/cuxiao.png" />
    </div>
    <div class="right-text">
      <p class="one">电商促销</p>
      <ul style="padding-inline-start: 20px" class="baoCun">
        <li>
          保存在短信信箱，用户可随时随地查看，不再
          需要安装、启动APP
        </li>
        <li>无需跳转就能观看，立体生动展现产品</li>
        <li>支持短链跟踪，活动效果看得见</li>
      </ul>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>
<style>
.sell {
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

.left-img {
  float: left;
}
.left-img > img {
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
.right-text > ul > li {
  margin-top: 2vh;
  font-size: 21px;
  line-height: 40px;
}

.baoCun{
  width: 430px;
}
</style>
