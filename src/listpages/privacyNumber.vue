<template>
  <div class="privacy">
    <div class="privacy-content1">
      <HeadList></HeadList>
      <div class="infoContent">
        <p class="duanxin">号码保护</p>
        <p class="duanxinTwo">
          防止用户手机/座机号码隐私泄露的融合通信解决方案，</br>适用于网购、出行、求职、外卖等场景
        </p>
        <router-link to="/" tag="div" class="reQuest">立即申请</router-link>
      </div>
    </div>

    <!-- 第一个tab切换 -->
    <div class="privacy-content3">
      <div class="privacylist1">
        <span class="privacylist">号码保护NPP概览</span>
        <router-link tag="span" v-for="(item,index) in privacylist" :key="index" :to="item.path">
          <span style="color:#333333;font-size:20px;font-weight:300;">{{item.name}}</span>
        </router-link>
      </div>
      <div class="haoma">
        <div class="haoma1">
          <img src="../assets/隐私号/产品功能.png" alt="">
        </div>

      </div>
      <!-- <router-view></router-view> -->
    </div>

    <!-- 第二个tab切换 -->
    <div class="privacy-content4">
      <div class='videoNumberTab'>
        <p class="intro44">应用场景</p>
      </div>
      <div class="privacylist2">

        <router-link tag="span" v-for="(item,index) in privacylist2" :key="index" :to="item.path" class="actives" active-class="privacylist3">
          <span>{{item.name}}</span>
        </router-link>
      </div>
      <router-view></router-view>
    </div>

    <div class="last-image">
      <img src="../assets/隐私号/产品优势.png" alt="">
    </div>
    <OfficalPartner id="offical2"></OfficalPartner>
    <Foot></Foot>
  </div>
</template>

<script>
import HeadList from "../repeatComponents/headList";
import OfficalPartner from "../repeatComponents/officalPartner";
import Foot from "../repeatComponents/bottom";
export default {
  components: { HeadList, OfficalPartner, Foot },
  data() {
    return {
      privacylist: [
        { name: "产品详细信息", path: "/detailInfo" },
        { name: "入门", path: "/start" },
        { name: "常见问题", path: "/commonProblem" },
        { name: "业务规则", path: "/rules" }
      ],
      privacylist2: [
        { name: "网约车出行", path: "/privacy/privacyNumber" },
        { name: "企业协同办公", path: "/privacy/company" },
        { name: "外卖送餐", path: "/privacy/takeout" },
        { name: "中介服务", path: "/privacy/middle" },


      ],
    };
  }
};
</script>

<style>
.privacy {
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

.privacy-content1 {
  width: 100%;
  height: 650px;
  background-image: url("../assets/隐私号/组91.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

.duanxin {
  width: 60%;
  height: 20%;
  font-size: 56px;
  font-family: Source Han Sans CN;
  font-weight: 800;
  color: rgba(255, 255, 255, 1);
  margin-top: 200px;
  margin-left: 20%;
}




/* 价格css样式开始 */

.duanxinTwo {
  width: 748px;
  height: 68px;
  font-size: 22px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  margin-left: 20%;
  margin-top: -80px;
  line-height: 36px;
}

.infoContent {
  width: 90%;
  height: 100%;
  border: 1px solid transparent;
  margin: auto;
}

.reQuest {
  font-size: 28px;
  width: 260px;
  height: 80px;
  color: #083875;
  text-align: center;
  line-height: 80px;
  border: 2px solid rgba(255, 255, 255, 1);
  margin-left: 20%;
  margin-top: 80px;
  background: white;
}







/* 第一个tab切换 */

.privacy-content3 {
  width: 100%;
}

.privacyTab {
  width: 90%;
  height: 30vh;
  margin: auto;
}

.privacy-intro {
  text-align: center;
  padding-top: 10vh;
  width: 20vw;
  height: 4vh;
  font-size: 2.5vw;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  line-height: 4vh;
  margin-left: 35vw;
}

.privacylist1 {
  font-size: 24px;
  text-align: center;
  margin: auto;
  width: 80%;
  height: 103px;
  margin: auto;
  padding-left: 5vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.privacylist1:hover {
  font-size: 800;
}

.privacylist1>span {
  display: inline-block;
  text-align: center;
  margin-top: 20px;
  cursor: pointer;
  height: 12vh;
  font-family: Source Han Sans CN;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
}

.privacylist {
  font-size: 24px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
}

.haoma1 {
  width: 100%;
  height: auto;
}

.haoma1>img {
  width: 100%;
}







/* 第er个tab切换 */

.privacy-content4 {
  width: 100%;
  height: auto;
}

.privacylist2 {
  font-size: 28px;
  text-align: center;
  margin: auto;
  width: 80%;
  height: 96.73px;
  margin: auto;
  font-weight: 600;
  border-bottom: 4px solid rgba(229, 229, 229, 1);
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.privacylist2>span {
  height: 99.73px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.privacylist2>span:hover {
  color: rgba(26, 156, 252, 1);
}

.intro44 {
  text-align: center;
  width: 100%;
  font-size: 40px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  margin-block-start: 0;
  margin-block-end: 0;
  padding-top: 60px;
  padding-bottom: 48px;
}

.privacylist3 {
  display: inline-block;
  width: 20%;
  position: absolute;
  border-bottom: 3px solid rgba(26, 156, 252, 1)!important;
}

.actives {
  display: inline-block;
  width: 20%;
  position: absolute;
  border-bottom: 3px solid rgba(229, 229, 229, 1);
}







/* 第二个tab切换 */

.last-image {
  width: 100%;
  display: block;
  float: left;
}

.last-image>img {
  width: 100%;
}
</style>
