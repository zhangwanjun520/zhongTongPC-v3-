<template>
  <div class="smart">
    <div class="smartnumber-content1">
      <HeadList></HeadList>
    </div>
    <div class="smartnumber">
      <div class="smartnumber-content2">
        <p class="ppp1">5G短信</p>
        <p class="ppp2">全面改造和升级传统短信</p>
        <p class="ppp3">
          <img src="../assets/智能短信/图层33.png" alt="" srcset="">
        </P>
        <p class="ppp4">

          5G短信本身还是短信，只是功能上大大地增强，从原来只能发70个字的文本短信，变</br>成了带菜单、带卡片、带企业logo的新短信，让传统短信具有互联网能力。</br> 5G短信，还可根据企业发送短信场景不同，匹配不同的卡片和菜单服务。智慧短信主</br>要产品为短信公众号、短信门户、短信品宣、情景卡片等特色短信增值服务产品。

        </p>

      </div>

    </div>
    <!-- 产品价值开始 -->
    <div class="smartnumber2">
      <div class="smartnumber-content3">
        <p class="ppp1" style="color:white;">产品价值</p>
        <div style="display:flex;justify-content: center;">
          <div class="smartnumber-img">
            <div class="top-img">
              <img src="../assets/智能短信/图层 35.png" alt="" srcset="">
            </div>
            <div class="bottom-img">
              <img src="../assets/智能短信/图层 36.png" alt="" srcset="">

            </div>

          </div>
          <div class="smartnumber-right-content">
            <ul>
              <li>
                入口应用效果评估
              </li>
              <li>
                多维度客户画像
              </li>
              <li>

                数据运营精准服务

              </li>

            </ul>
          </div>
        </div>

      </div>
    </div>

    <!-- 实现原理开始 -->
    <div class="theory">
      <div class="theory-content">
        <p class="pppp1">实现原理</p>
        <p class="pppp2">实现原理其实既高级又简单，因为它是一款SDK产品， 手机出厂时就已经自带</br>了，而解析的过程就发生在最后一步，变变变！
        </p>
        <p class="pppp3">
          <span class="pppp3-content">
            <img src="../assets/智能短信/图层 50.png" alt="" class="image">
            <p class="image-text">
              企业 / 单位
            </p>
          </span>
          <span class="pppp3-content2">
            <img src="../assets/智能短信/形状 2.png" alt="" class="jiantou">
          </span>
          <span class="pppp3-content">
            <img src="../assets/智能短信/图层 51.png" alt="" class="image">
            <p class="image-text">

              通过传统短信通道商 </br>发出短信

            </p>
          </span>
          <span class="pppp3-content2">
            <img src="../assets/智能短信/形状 2.png" alt="" class="jiantou">
          </span>
          <span class="pppp3-content">
            <img src="../assets/智能短信/图层 52.png" alt="" class="image">
            <p class="image-text">

              用户终端接收到短信</br>通过终端本地SDK处理

            </p>
          </span>

        </p>

        <div class="image2">
          <img src="../assets/智能短信/组 91.png" />

        </div>

      </div>

    </div>

    <!-- 特色功能开始 -->
    <div class="specail-function">
      <div class="specail-function-content">
        <p class="pppp1" style="color:white;">特色功能</p>
        <div class="specail-function-content2">
          <div class="top3-content">
            <div class="ppppp1">
              <p>
                <span class="Number">1</span>便捷服务</p>
              <p>为用户提供更多优质服务</p>
            </div>
            <div class="ppppp2">
              <p>
                <span class="Number">2</span>跳转H5</p>
              <p>企业产品与服务丰富呈现</p>
            </div>

          </div>
          <div class="top3-content">
            <div class="ppppp3">
              <p>
                <span class="Number">3</span>
                唤起纳新

              </p>
              <p>引流下载企业APP应用</p>
            </div>
            <div class="ppppp2">
              <p>
                <span class="Number">4</span>
                一键点击

              </p>
              <p>快速享受企业业务办理</p>&nbsp;&nbsp;&nbsp;&nbsp;
            </div>

          </div>

        </div>

      </div>
    </div>
    <OfficalPartner></OfficalPartner>
    <div class="last-image1">
      <img src="../assets/智能短信/广告栏.png" alt="" srcset="">
    </div>
    <div class="last-image2">
      <!-- <img src="../assets/智能短信/定制栏.png" alt="" srcset=""> -->

    </div>
    <foot style="margin-top:0;"></foot>

  </div>
</template>

<script>
import HeadList from "../repeatComponents/headList";
import OfficalPartner from "../repeatComponents/officalPartner";
import Foot from "../repeatComponents/bottom";
export default {
  components: { HeadList, OfficalPartner, Foot }
};
</script>
<style>
.smart {
  width: 100%;
  background: white;
  position: relative;
  top: 0px;
  bottom: 0px;
  left: 0;
  right: 0;
  z-index: 200;
}

.smartnumber-content1 {
  width: 100%;
  height: 420px;
  background-image: url("../assets/智能短信/banner.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position:center;

}

.smartnumber {
  width: 100%;
  height: auto;
}

.smartnumber-content2 {
  width: 100%;
  height: 100%;
  margin: auto;
}

.ppp1 {
  font-size: 46px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(64, 80, 123, 1);
  text-align: center;
  padding-top: 11.7vh;
  padding-bottom: 6.4vh;
  margin-block-start: 0;
  margin-block-end: 0;
}

.ppp2 {
  width: 440px;
  height: 5.1vh;
  margin: 0 auto;
  font-size: 28px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: white;
  text-align: center;
  color: #666666;
  letter-spacing: 11px;
  margin-block-start: 0;
  margin-block-end: 0;
}

.ppp3 {
  margin: auto;
  margin-top: 15vh;
  font-size: 2.5vw;
  display: flex;
  justify-content: center;
}

.ppp3>img {
  width: 920px;
}

.ppp4 {
  font-size: 28px;
  width: 1167px;
  height: 260px;
  margin: auto;
  margin-top: 140px;
  margin-bottom: 130px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #333333;
  line-height: 80px;
  text-align: center;
}

.smartnumber2 {
  width: 100%;
  height: 1095px;
  background-image: url('../assets/智能短信/组90.png');
  background-size: cover;
  background-position: center center;
}

.smartnumber-content3 {
  width: 100%;
  height: 1095px;
  margin: auto;
}

.smartnumber-img {
  width: auto;
  height: auto;
  float: left;
  margin-right: 20px;
}

.smartnumber-img>.top-img>img {
  width: 749px;
}

.smartnumber-img>.bottom-img>img {
  width: 749px;
  margin-top: 4.34vh;
}

.smartnumber-right-content>ul>li {
  width: 320px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  line-height: 80px;
  font-size: 38px;
  color: white;
  margin-top: 90px;
}

.smartnumber-right-content {
   margin-left: 20px;
}

.theory {
  width: 100%;
  height: auto;
}

.theory-content {
  width: 100%;
  height: 100%;
  margin: auto;
}

.pppp1 {
  font-size:46px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  text-align: center;
  color: #40507B;
  padding-top: 11.7vh;
  padding-bottom: 6.4vh;
  margin-block-start: 0;
  margin-block-end: 0;
}

.pppp2 {
  margin: auto;
  width: 760px;
  height: 7.4vh;
  font-size: 18px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  line-height: 32px;
  text-align: center;
  letter-spacing: .2vw;
}

.pppp3 {
  width: 900px;
  height: 30vh;
  margin: auto;
  margin-top: 94px;
  margin-bottom: 6.5vh;
}

.pppp3-content {
  text-align: center;
  float: left;
  display: block;
  width: 200px;
  height: 300px;
  margin: auto;
  font-size: 1.3vw;
  color: rgba(102, 102, 102, 1);
}

.pppp3-content2 {
  float: left;
  display: block;
  width: 138px;
  text-align: center;
}

.image {
  width: 85px;
}

.jiantou {
  width: 91px;
  display: inline-block;
  padding-top: 6vh;
}

.image-text {
  color: #333333;
  line-height:60px;
  font-size: 20px;
}

.image2 {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
}

.image2>img {
  width: 860px;
  margin-bottom: 200px;
}

.specail-function {
  color: white;
  font-size: 1.8vw;
  width: 100%;
  height:671px;
  background-image: url('../assets/智能短信/组87.png');
  background-position: center;
}

.specail-function-content2 {
  width: 70vw;
  margin: auto;
  height: 500px;
}

.ppppp1 {
  width: 384px;
  float: left;
  font-size: 26px;
  margin-right: 70px;
}

.ppppp1>p{
  width: 384px;
}

.ppppp2 {
   width: 384px;
  float: right;
  font-size: 26px;
  margin-left: 70px;
}

.ppppp2>p{
  width: 384px;
}

.top3-content {
  text-align: left;
  width: auto;
  margin: auto;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}

.Number {
  font-size: 26px;
  margin-right: .6vw;
}

.ppppp3 {
  width: 384px;
  float: left;
  font-size: 26px;
  margin-right: 70px;
}

.ppppp3>p{
  width: 384px;
}

.last-image1 {
  width: 100%;
  height: 448px;
}

.last-image1>img {
  width: 100%;
  height: 448px;
}

.last-image2 {
  width: 100%;
  height: 610px;
  background-image: url('../assets/智能短信/定制栏.png');
  background-position: center;
  background-size: cover;
  margin-top: 100px;
}

.last-image2>img {
  width: auto;
  height: 610px;
}
</style>
