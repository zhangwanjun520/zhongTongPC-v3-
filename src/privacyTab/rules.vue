<template>
  <div class="rulesInfo">
    <div class="rulesInfo1">
      <HeadList></HeadList>
    </div>
    <div class="rulesInfo2">
      <!-- 左侧代码 -->
      <Left></Left>
      <!-- 右侧信息 -->
      <div class="rules-right">
        <p class="rules-right-title1">中通云号码号码保护业务规则</p>
        <div class="linetst"></div>
        <ul>
          <li class="rules-list-title">号码隐私保护服务计价方式</li>
          <li class="rules-list-title2">
            号码隐私保护服务费用包含两部分：号码月租费和隐私保护通话服务费； 号码月租费以申请的号码数量乘以号码单价计算；隐私保护通话服务费按实际产生通话时长乘以单价。
          </li>
          <li class="list-title">关于实名制</li>

          <li class="rules-list-title2">
            号码隐私保护服务只针对企业开通此服务，需要企业实名才能开通 ；同时AXN隐私号依据《工信部网安函（2016）452号》的要求，每个号码需要实名到人，同一个身份证号码最多可以申请5个隐私号码。
          </li>
          <li class="rules-list-title">AXB中间号X号码复用规则</li>

          <li class="rules-list-title2" style="margin-bottom: 7vh;">在AXB中间号场景中，同一个中间号码X可以供200对AXB绑定关系复用，但是要求这200对AXB关系中A号码和B号码不能存在重复。</li>
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
.rulesInfo {
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
}

.rulesInfo1 {
  width: 100%;
  height: 116px;
  background-color: black;
}

.rulesInfo2 {
  width: 100%;
  height: auto;
  margin: auto;
  margin-top: 108px;
  display: flex;
  justify-content: center;
}





/* 左侧 */


/* 左侧代码 */


/* 右侧 */

.rules-right {
  width: 720px;
  height: auto;
  float: right;
  margin-left: 20px;
  padding-top: 11px;
}

.rules-right-title1 {
  width: 773px;
  font-size: 45px;
  font-weight: bold;
  margin-bottom: 11.3vh;
  font-size: 36px;
}

.rules-right-title2 {
  width: 45vw;
  font-size: 1.3vw;
}

.rules-right>ul>li {
  list-style: none;
  margin-left: -3vw;
}

.rules-list-title,
.list-title {
  width: 789px;
  font-size: 36px;
  font-weight: 500;
  line-height: 108px;
  margin-top: 40px;
}

.linetst {
  border-bottom: 1px solid gainsboro;
}

.rules-list-title1 {
  font-size: 1.5vw;
  font-weight: 600;
  line-height: 80px;
}

.rules-list-title2 {
  width: 680px;
  font-size: 17px;
  font-weight: 400;
  line-height: 30px;
}

.line2 {
  border-bottom: 1px solid gainsboro;
}

.rules-ul>li {
  font-size: 1vw;
  line-height: 50px;
}
</style>
