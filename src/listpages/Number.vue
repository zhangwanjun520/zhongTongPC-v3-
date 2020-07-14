<template>
  <div class="number">
    <div class="number-content1">
      <HeadList></HeadList>
      <div class="infoContents">
        <p class="duanxin">
          短信
        </p>
        <p class="duanxinTwos">
          稳定触达的短信发送服务，包括短信通知、短信验证码， 满足企业和客户的多场景沟通，三网覆盖，集成快速， 发送结果可知
        </P>
      </div>
    </div>
    <div class="number-content2">
      <div class="messageTitle">
        <div v-for="(item,index) in data" :key="index" :class="activeIndex==index?'active':''" class="activest" @click="tab(index)">{{item}}</div>
      </div>
    </div>
    <div class="floor-item">
      <Introduce id='demo'></Introduce>
      <Advantage id='demo'></Advantage>
      <div id="demo">
        <OfficalPartner></OfficalPartner>
      </div>
      <Price id='demo'></Price>
    </div>
    <Foot></Foot>
  </div>
</template>

<script>
import HeadList from "../repeatComponents/headList";
import NumberTab from "../components/numbertab";
import Introduce from "../components/introduce";
import Price from "../components/price";
import OfficalPartner from '../repeatComponents/officalPartner';
import Advantage from "../components/advantage";
import Foot from '../repeatComponents/bottom'
export default {
  data() {
    return {
      data: ['功能介绍', '特点优势', '案例展示', '产品价格'],
      activeIndex: 0,
      i:''
    }
  },
  mounted(){
  },
  components: { HeadList, OfficalPartner, Foot, Introduce, Price, Advantage },
  methods: {
    scrollToPos(pos) {
      document.body.scrollTo({
        top: pos,
        left: 0,
        behavior: 'smooth'
      });
      document.documentElement.scrollTo({
        top: pos,
        left: 0,
        behavior: 'smooth'
      });
    },
    tab(index) {
      this.activeIndex = index
      this.i=index
      let floor_item = document.getElementsByClassName('floor-item')
      let floor_items = document.getElementsByClassName('number-content1')[0]
      let floor_itemt = document.getElementsByClassName('number-content2')[0]
      let all = floor_item[0].querySelectorAll('#demo')
      let floor_offsetTop = [all[index].offsetTop + floor_items.clientHeight + floor_itemt.clientHeight] - floor_item[0].offsetTop
      let window_scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      if (window_scrollTop > floor_offsetTop) {
        // this.scrollToPos(floor_offsetTop)
      } else if (window_scrollTop == floor_offsetTop) {
        return false
      } else {
        this.scrollToPos(floor_offsetTop)
      }
    }
  }
};
</script>
<style>
.number {
  width: 100%;
  height: auto;
  background: white;
  position: relative;
  top: 0px;
  bottom: 0px;
  left: 0;
  right: 0;
  z-index: 99;
}

.number-content1 {
  overflow: hidden;
  width: 100%;
  height: 650px;
  background-image: url("../assets/短信/组95.png");
  background-position: center center;
  background-repeat: no-repeat;
  /* background-size: cover; */
}

.number-content2 {
  width: 100%;
  height: 120px;
  background-image: url("../assets/短信/矩形1556.png");
  background-size: cover;
  font-size: 30px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.messageTitle {
  width: 86%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.activest {
  border-bottom: 2px solid #042149;
  height: 118px;
  line-height: 118px;
  cursor: pointer;
}

.active {
  color: rgba(26, 156, 252, 1);
  border-bottom: 2px solid rgba(26, 156, 252, 1)!important;
  z-index: 999;
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
  padding-top: 29px;
  padding-bottom: 34px;
}


/* 价格css样式开始 */

.duanxinTwos {
  width: 552px;
  height: 12.4vh;
  font-size: 22px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  margin-left: 20%;
  margin-top: -7vh;
  line-height: 40px;
}

.infoContents {
  width: 800px;
  height: 308px;
  background-image: url("../assets/短信/zhe.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: auto;
}
</style>
