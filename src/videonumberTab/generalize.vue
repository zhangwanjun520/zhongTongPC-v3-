<template>
  <div class="generalize">
    <div class="main2">
      <div class="leftse-img">
        <img src="../assets/视频短信/组91(15).png" />
      </div>
      <div class="right-text">
        <p class="one" style="margin-inline-start: -16px;">产品推广</p>
        <ul style="padding-inline-start: 0" class="xiaFa">
          <li>下发即时生效，瞬间达到万人传播的效果</li>
          <li>视觉冲击是文本的几十倍，用户打开率更胜一筹</li>
          <li>让品牌形象在消费者中无处不在，覆盖面广</li>
          <li>效果可追踪，实现品效合一</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // components:{List}
};
</script>
<style>
.generalize {
  height: 550px;
  width: 1320px;
  margin: auto;
  cursor: pointer;
  z-index: 400;
}

.main2 {
  height: 550px;
  margin: auto;
  display: flex;
  background-color: white;
}

.leftse-img {
  float: left;
}

.leftse-img>img {
  width: 722px;
}

.right-text {
  margin-top: 55px;
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
  line-height: 70px;
}

.xiaFa{
  width: 470px;
}
</style>
