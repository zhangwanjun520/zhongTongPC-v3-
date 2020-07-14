<template>
  <div class="detailInfo">
    <div class="detailInfo1">
      <HeadList></HeadList>
    </div>
    <div class="detailInfoTwo">
      <!-- 左侧代码 -->
      <Left></Left>
      <!-- 右侧信息 -->
      <div class="start-right">
        <p class="detail-right-title1">中通云号码保护</p>
        <p class="detail-right-title2">中通云号码保护目前是线下来完成的您的对接服务。</p>
        <div class="linet"></div>
        <ul style=" list-style: none;margin-right:6rem;padding-inline-start: 0;">
          <li class="list-title">接入流程</li>
          <li class="list-title2">
            <img src="../assets/隐私号/微信图片01.png" alt />
          </li>
          <li class="list-titleOne">第 1 步：开通申请</li>
          <li class="list-titleTwo">
            登录中通云控制台。如果没有账号，请先注册一个中通云账号。拥有中通云账号后， 您可以在中通云网站、控制台登录中通云，从而选购和使用您需要的云产品和服务。 登录成功后，点击
            <router-link to="/">立即申请</router-link>
            开始您的业务对接。
          </li>
          <li class="list-titleOne">第 2 步：商务对接</li>
          <li class="list-titleTwo">在审批完成后，会有专人根据您留下的联系方式找到您开始对接，确定应用场景和商务意向后会开始线下对接。</li>
          <li class="list-titleOne">第 3 步：对接测试</li>
          <li class="list-titleTwo">一般会形成 QQ 讨论组与您进行相关技术支持和服务，给您报备白名单，分配 APPID 等。</li>
          <li class="list-titleOne">第 4 步：正式上线</li>
          <li class="list-titleTwo" style="margin-bottom: 7vh;">对接测试成功，且商务合同流程完成之后，您可以申请正式上线到成产环境，开始使用您的相关服务。</li>
        </ul>

        <div class="line2"></div>
      </div>
    </div>
    <Foot></Foot>
    <Bottom></Bottom>
  </div>
</template>

<script>
import HeadList from "../repeatComponents/headList";
import Bottom from "../repeatComponents/bottom";
import Left from "../privacyRepeat/left";
import Foot from "../privacyRepeat/foot";

export default {
  components: { HeadList, Left, Foot, Bottom }
};
</script>
<style>
.detailInfo {
  width: 100%;
  height: auto;
  background: white;
  overflow: hidden;
  position: relative;
  top: 0px;
  bottom: 0px;
  left: 0;
  right: 0;
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  float: left;
}

.detailInfo1 {
  width: 100%;
  height: 116px;
  background-color: black;
}

.detailInfoTwo {
  width: 100%;
  height: auto;
  margin: auto;
  margin-top: 72px;
  display: flex;
  justify-content: center;
}

.start-right {
  width: 720px;
  height: auto;
  float: right;
  padding-top: 14px;
  margin-left: 20px;
}

.detail-right-title1 {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 108px;
}

.detail-right-title2 {
  width: 700px;
  font-size: 20px;
  line-height: 36px;
}

.detail-right>ul>li {
  list-style: none;
  width: 720px;
}

.list-title {
  font-size: 36px;
  font-weight: 400;
  line-height: 108px;
  margin-top: 70px;
}

.list-titleOne {
  font-size: 22px;
  font-weight: 400;
  line-height: 70px;
}

.list-titleTwo {
  font-size: 15px;
  font-weight: 400;
  line-height: 45px;
  margin-bottom: 3.91vh;
}

.line2 {
  border-bottom: 1px solid gainsboro;
}

.detail-ul>li {
  font-size: 13px;
  line-height: 45px;
}

.detail-ul>.list-title4 {
  font-size: 36px;
  font-weight: 500;
  line-height: 108px;
  margin-top: 77px;
}

.list-title2>img {
  width: 800px;
  margin-left: -2vh;
}


.linet {
  border-bottom: 1px solid gainsboro;
}
</style>
