<template>
  <div class="detailInfo">
    <div class="detailInfo1">
      <HeadList></HeadList>
    </div>
    <div class="detailInfo2">
      <!-- 左侧代码 -->
      <Left></Left>
      <!-- 右侧信息 -->
      <div class="detail-right">
        <p class="detail-right-title1">中通云号码保护产品详细信息</p>
        <p class="detail-right-title2">
          号码隐私保护(Phone Number Protection)是一款基于基础运营商通信网络能力的互联网产品， 可以帮忙使用本产品的企业保护其客户电话号码不泄露、 通过对虚拟号码服务过程进行录音来管理客户电话服务质量， 同时该产品适用于出行、物流、外卖、招聘等多种业务场景， API接口简单易用，可以快速实现平台客户保护用户隐私的需求。
        </p>
        <div class="linese2"></div>
        <ul>
          <li class="list-title">功能</li>
          <li class="list-title2 zhong">中通云号码保护目前有点击拨号（回拨）和中间号（直拨）两种。</li>
          <li class="list-title1">点击拨号（回拨）</li>
          <li class="list-title2 zhong">
            点击拨号（回拨）是主叫方发起通话后，中通·云通信平台先呼通主叫，主叫方接听后再呼通被叫方，平台负责与运营商标准对接并完成主被叫通话音频富媒体流中转。
          </li>
          <li class="list-title1">中间号（直拨）</li>
          <li class="list-title2 zhong" style="margin-bottom:7vh;">
            中间号（直拨）是通过向商家平台方分配固定或动态小号，用户拨打小号可直连到商家平台，平台显示的用户主叫号码均为平台统一号码。
          </li>
        </ul>
        <div class="line2"></div>
        <ul class="detail-ul">
          <li class="list-title4">类型</li>
          <li class="litst">
            <strong>· AXB中间号:</strong>
            ：AXB中间号是为了保护一对一专属服务场景中的用户A、服务方B的隐私，为 A、B这一对通话的专属隐私保护功能；
          </li>
          <li class="litst">
            <strong>· AXG隐私号</strong>

            ：AXG产品是针对有用户分级需求、限制呼叫范围、限制抢单等场景的客户需 求提供的号码隐私保护解决方案，其中G代表一个号码组，可以根据需要添加号码；
          </li>
          <li class="litst">
            <strong>· AXN隐私号</strong>

            ：AXN隐私号是为A用户分配一个专属的隐私号，任何号码N通过拨打X号码都可以转接到A。
          </li>
          <li class="litst">
            <strong>· AXN分机号</strong>

            ：和AXN隐私号功能类似，AXN分机号在AXN基础上引入了分机号，从而降低X号码的使用量，在呼叫时候首先拨打X号码，听到提示音后输入对应分机号转接到A；
          </li>
          <li style="margin-bottom: 7vh;" class="litst">
            <strong>· 95AXN隐私号</strong>

            ：和AXN隐私号功能类似，主要区别在于X码号类型，95AXN隐私号采用95开头的扩位码号作为X号码，相比与普通X号码，单个号码月租较低；
          </li>
        </ul>
        <div class="line2"></div>
      </div>
    </div>
    <Foot></Foot>
    <Bottom></Bottom>
  </div>
</template>

<script>
import HeadList from '../repeatComponents/headList'
import Bottom from '../repeatComponents/bottom'
import Left from "../privacyRepeat/left";
import Foot from "../privacyRepeat/foot";

export default {
  components: { HeadList, Left, Foot, Bottom }
};
</script>
<style >
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

.detailInfo2 {
  width: 100%;
  margin: auto;
  margin-top: 80px;
  display: flex;
  justify-content: center;
}

.litst{
  font-size: 17px!important;
  width: 700px!important;
}



/* 左侧 */


/* 左侧代码 */


/* 右侧 */

.detail-right {
  width: 720px;
  height: auto;
  float: right;
  margin-left: 20px;
}

.detail-right-title1 {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 110px;
}

.detail-right-title2 {
  width: 700px;
  font-size: 18px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 36px;
  margin-bottom: 60px;
}

.detail-right>ul>li {
  list-style: none;
  margin-left: -3vw;
  /* width: 720px; */
}

.list-title {
  font-size: 36px;
  font-weight: 500;
  line-height: 100px;
  margin-top: 70px;
}

.list-title1 {
  font-size: 22px;
  font-weight: 400;
  line-height: 100px;
}

.list-title2 {
  font-size: 18px;
  font-weight: 400;
  line-height: 32px;
}

@media screen and (max-width: 1366px){
.zhong {
    width: 698px!important;
}
}
.linese2 {
  border-top: 1px solid gainsboro;
}

.line2 {
  border-bottom: 1px solid gainsboro;
}

.detail-ul>li {
  font-size: 13px;
  line-height: 30px;
}

.detail-ul>.list-title4 {
  font-size: 36px;
  font-weight: 500;
  line-height: 100px;
  margin-top: 60px;
  margin-bottom: 0;
}

.detail-ul>li {
  margin-bottom: 30px;
}
</style>
