<template>
  <div class="videonumber">
    <div class="videonumber-content1">
      <HeadList></HeadList>
      <div class="infoContent">
        <p class="duanxin">
          视频短信
        </p>
        <p class="duanxin2">
          快速传递文本、图片、音频、视频等多媒体信息，内</br>容更丰富，展现更生动，带来用户更好的沟通体验
        </p>
        <router-link to='/' tag="div" class="request">立即申请</router-link>
      </div>
    </div>
    <div class="videonumber-content2">
      <div class='maincontent'>
        <p class="intro">产品介绍</p>
        <p class="intro2">通过短信向用户发送图文音视频等营销内容，内容更丰富、展现更直观、效果更显著</p>
        <div class="intro3">
          <p class="intro-img">
            <img src="../assets/视频短信/组92.png" alt="">
          </p>
          <p class="intro-text">
            <ul>
              <li>
                产品图片、活动海报、示意图标
              </li>
              <li>
                广告视频、VCR宣传片、动画短片
              </li>
              <li>
                宣传文案、广告词、短链接
              </li>
            </ul>
          </p>
        </div>
      </div>

    </div>
    <!-- 又是一个tab切换--应用场景的tab切换 -->
    <div class="videonumber-content3">
      <div class='videoNumberTab'>
        <p class="intro44">应用场景</p>
      </div>
      <div class='videolist1'>
        <router-link tag="span" v-for="(item,index) in videolist" :key="index" :to="item.path" active-class="videolist">
          <span>{{item.name}}</span>
        </router-link>
      </div>
      <router-view></router-view>
    </div>
    <div class='chanpinyoushi'>
      <div class="detail">
        <p class="detail-title">产品优势</p>
        <div style="display:flex;justify-content: space-around; align-items: center;">
          <span class="span-img">

            <img src="../assets/视频短信/组91(16).png" alt="" srcset="">
            <p class="detail-text1">
              多媒体呈现
            </p>
            <p class="detail-text2">

              可发送1.85M以内超大容量内容 约30秒视频/10张高清图/百万字

            </p>

          </span>

          <span class="span-img2">

            <img src="../assets/视频短信/jiantou.png" alt="" srcset="">
            <p class="detail-text1">
              高效触达
            </p>
            <p class="detail-text2">

              使用门槛低，无需安装app 覆盖面广，触达率高
            </p>

          </span>
          <span class="span-img">

            <img src="../assets/视频短信/组91 (18).png" alt="" srcset="">
            <p class="detail-text1">
              转化率高
            </p>
            <p class="detail-textTwo">
              内容和形式有机组合</br>吸引客户点击，实现更高转化
            </p>

          </span>

          <span class="span-img2">

            <img src="../assets/视频短信/组91 (19).png" alt="" srcset="" style="width:110px;">
            <p class="detail-text1">
              多运营商覆盖
            </p>
            <p class="detail-textTwo">
              支持三网发送，多通道支持</br>全国范围覆盖，终端适配率高
            </p>

          </span>
        </div>
      </div>
    </div>
    <OfficalPartner id='offical2'></OfficalPartner>
    <div class="ys" style="color:black;background-color:#F8F8FA">
      <h3>接入流程</h3>

      <div class="accessProcess">
        <div class="ys-item">
          <img src="../assets/视频短信/图层 1230.png" />

          <p class="b-txt2" style="text-align:center">注册账号</p>

          <p class="s-txt2">
            立即前往
            <router-link tag='a' to="/" style="color:#427EFF;text-decoration: none;">注册账号</router-link>
          </p>
        </div>
        <div class="ys-items">
          <img src="../assets/视频短信/flowline.png" alt="" style=" width: 115px;">
        </div>
        <div class="ys-item">
          <img src="../assets/视频短信/图层 1231.png" />

          <p class="b-txt2" style="text-align:center">在线创建视频短信
          </p>
          <p class="s-txt2"> 创建内容，录入号码</p>

        </div>
        <div class="ys-items">
          <img src="../assets/视频短信/flowline.png" alt="" style=" width:115px;">
        </div>
        <div class="ys-item">
          <img src="../assets/视频短信/图层 1232.png" />

          <p class="b-txt2" style="text-align:center">
            测试提交发送
          </p>
          <p class="s-txt2">
            提交后等待审核
          </p>
        </div>
        <div class="ys-items">
          <img src="../assets/视频短信/flowline.png" alt="" style=" width: 6.427vw;">
        </div>
        <div class="ys-item">
          <img src="../assets/视频短信/图层 1233.png" />

          <p class="b-txt2" style="text-align:center">

            充值使用

          </p>
          <p class="s-txt2">
            在线充值余额，正式使用
          </p>
        </div>
      </div>
    </div>
    <div class="bannerst">
      <div class="experience">
        <h3>马上体验</h3>
        <p>
          <input type="text" name="" id="" placeholder="请输入您的手机号" height="30px" style="border:none;">
          <button style="border:none; background-color:#5382FF;color:white">免费体验</button>
        </p>
      </div>
    </div>
    <!-- 产品价格开始 -->
    <Foot style="margin-top:0;"></Foot>
  </div>
</template>

<script>
import HeadList from "../repeatComponents/headList";
import OfficalPartner from '../repeatComponents/officalPartner'
import Foot from '../repeatComponents/bottom'
export default {
  components: { HeadList, OfficalPartner, Foot },
  data() {
    return {
      videolist: [
        { name: "产品推广", path: "/privacy/videoMessage" },
        { name: "品牌曝光", path: "/privacy/brandShow" },
        { name: "电商促销", path: "/privacy/sell" },
        { name: "应用推广", path: "/privacy/applicationPromotion" },
        { name: "客户关怀", path: "/privacy/customerCare" },

      ],
    }
  }
};
</script>
<style>
.videonumber {
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

.videonumber-content1 {
  width: 100%;
  height: 650px;
  background-image: url("../assets/视频短信/组91.png");
  background-position: center;
}

.duanxin {
  width: 60%;
  height: 20%;
  font-size: 56px;
  font-family: Source Han Sans CN;
  font-weight: 800;
  color: rgba(255, 255, 255, 1);
  margin-top: 170px;
  margin-left: 20%;
}

.duanxin2 {
  width: 510px;
  height: 125px;
  font-size: 22px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  margin-left: 20%;
  margin-top: -80px;
  line-height: 40px;
}

.infoContent {
  width: 90%;
  height: 100%;
  border: 1px solid transparent;
  margin: auto;
}

.request {
  font-size: 26px;
  width: 260px;
  height: 80px;
  color: white;
  text-align: center;
  line-height: 80px;
  border: 2px solid rgba(255, 255, 255, 1);
  margin-left: 20%;
  /* margin-top: 108px; */
}

.videonumber-content2 {
    height: 735px;
  background-color: #f7f8fa;
}

.intro {
  text-align: center;
  margin: auto;
  padding-top: 108px;
  width: 188px;
  height: auto;
  font-size: 40px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  line-height: 40px;
}

.intro2 {
  width: 890px;
  text-align: center;
  margin: auto;
  height: auto;
  font-size: 22px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 156px;
}

.intro3 {
  width: 80%;
  height: auto;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.intro-img {
  width: auto;
  height: auto;
  float: left;
}

.intro-img>img {
  width: 578px;
}

.intro-text {
  float: right;
  width: 328px;
  font-size: 19px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 40px;
  margin-right: 140px;
}

.intro-text>ul>li {
  width: 328px;
}

.intro-tex>ul>li {
  font-size: 1.3vw;
}

.videonumber-content3 {
  width: 100%;
  height: 850px;
  position: relative;
}

.videoNumberTab {
  width: 90%;
  height: 150px;
  margin: auto;
}

.intro44 {
  text-align: center;
  padding-top: 50px;
  width: 188px;
  height: 54px;
  font-size: 40px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  line-height: 40px;
  margin: 0 auto;
}

.videolist1 {
  font-size: 24px;
  text-align: center;
  margin: auto;
  position: relative;
  width: 1200px;
  height: 156px;
  margin: auto;
  padding-left: 54px;
  margin-top: -80px;
  border-bottom: .43vh dashed transparent;
  line-height: 156px;
  display: flex;
  margin-bottom: 108px;
}

.videolist1:hover {
  font-size: 800;
}

.videolist1>span {
  display: inline-block;
  text-align: center;
  cursor: pointer;
  width: 200px;
  text-align: center;
  height: 156px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 32px;
}

.videolist {
  color: rgba(26, 156, 252, 1)!important;
  border-bottom: .43vh solid rgba(26, 156, 252, 1)!important;
}

.maincontent {
  width: 90%;

  margin: auto;
}

.chanpinyoushi {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 750px;
  background-color: #F7F8FA;
}

.detail {
  width: 100%;
  height: auto;
  margin: 0 auto;
}

.detail-title {
  width: 188px;
  margin: auto;
  font-size: 40px;
  text-align: center;
  /* margin-top: 60px; */
  padding-top: 86px;
  font-family: Source Han Sans CN;
}

.span-img {
  display: inline-block;
  width: 260px;
  height: 346px;
  background: #6290FC;
  margin-top: 80px;
  color: #FFFFFF;
  /* margin-left: 3vw; */
  padding-top: 54px;
}

.span-img>img {
  /* margin-left: 3vw; */
  display: inline-block;
  margin-left: 84px;
  width: 95px;
}

.detail-text1 {
  text-align: center;
  width: 100%;
  font-size: 26px;
}

.detail-text2 {
  width: 90%;
  text-align: center;
  font-size: 16px;
  font-family: Source Han Sans CN;
  margin: 0 auto;
  line-height: 40px;

}

.detail-textTwo {
  width: 80%;
  text-align: center;
  font-size: 16px;
  font-family: Source Han Sans CN;
  margin: 0 auto;
  line-height: 40px;
}

.span-img2 {
  display: inline-block;
  width: 260px;
  height: 346px;
  background-color: white;
  color: #6290FC;
  padding-top: 54px;
  margin-top: 80px;
  /* margin-left: 3vw; */
}

.span-img2>img {
  display: inline-block;
  margin-left: 88px;
  width: 95px;
}

.bannerst {
  /* width: 100%; */
  height: 420px;
  color: #fff;
  padding: .1rem;
  background: url(../assets/视频短信/bei.png);
  background-size: cover;
  background-position: center center;
}

.bannerst>.experience>h3 {
  width: 188px;
  padding-top: 54px;
  padding-bottom: 32px;
  font-size:40px;
  font-weight: 500;
  margin: 0 auto;
}

.bannerst>.experience>p {
  display: flex;
  justify-content: center;
  align-items: center;
}

.experience {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.bannerst>.experience>p>input {
  width: 780px;
  height: 114px;
  padding-left: 2.187vw;
  font-size: 28px;
  border-radius: .3vw;
}

.bannerst>.experience>p>button {
  width: 280px;
  height: 120px;
  font-size: 28px;
  margin-left:40px;
  border-radius: .3vw;
}

.ys {
  width: 100%;
  height: 450px;
}

.ys>h3 {
  width: 188px;
  font-size: 40px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  text-align: center;
  padding-top: 8vh;
  padding-bottom: 5vh;
  margin: 0 auto;
}

.accessProcess {
  width: 79%;
  height: auto;
  display: flex;
  margin: 0 auto;
}

.accessProcess>.ys-item {
  width: 18%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.ys-item>img {
  width: 80px;
  margin-bottom: 4.3vh;
}

.ys-items {
  display: flex;
  justify-content: center;
  align-items: center;
}

.accessProcess>.ys-item>.s-txt2,
.accessProcess>.ys-item>.b-txt2 {
  width: 209px;
  font-size: 19px;
  margin-top: .1rem;
  margin-block-start: 0;
  margin-block-end: 0;
  line-height: 46px;
  text-align: center;
}
</style>
