<template>
  <div class="detail-left">
    <p class="detail-left1">
      <img src="../assets/隐私号/微信图片02.png" alt="">

    </p>
    <p class="detail-left2">号码保护</p>
    <p class="detail-left3">Number Privacy Protection</p>
    <p class="detail-left4">
      <button>立即申请</button>
    </p>
    <ul style="padding-inline-start: 0;">
      <router-link to="/privacy/privacyNumber" tag="li" active-class="left11">
        <img src="../assets/隐私号/gai.svg" alt=""> 概览
        <i class="el-icon-d-arrow-right"></i>
      </router-link>
      <router-link to="/detailInfo" tag="li" active-class="left11">
        <img src="../assets/隐私号/xiang.svg" alt=""> 产品详细信息
        <i class="el-icon-arrow-right"></i>
      </router-link>
      <router-link to="/start" tag="li" active-class="left11"> <img src="../assets/隐私号/xin.svg" alt="">入门
        <i class="el-icon-arrow-right"></i>
      </router-link>
      <router-link to="/commonProblem" tag="li" active-class="left11"> <img src="../assets/隐私号/chang.svg" alt="">常见问题
        <i class="el-icon-arrow-right"></i>
      </router-link>
      <router-link to="/rules" tag="li" active-class="left11"> <img src="../assets/隐私号/ye.svg" alt="">业务规则
        <i class="el-icon-arrow-right"></i>
      </router-link>
    </ul>
  </div>
  <!-- 右侧信息 -->
</template>

<script>
export default {
};
</script>
<style>
/* 左侧 */


/* 左侧代码 */

.detail-left {
  width: 300px;
  height: auto;
  float: left;
  padding-top: 2vh;
  font-family: Source Han Sans CN;
  margin-right: 20px;
}

.detail-left1 {
  width: 6vw;
  height: 108px;
}

.detail-left2 {
  font-size: 26px;
  font-weight: 700;
}

.detail-left3 {
  width: 300px;
  font-size: 20px;
  font-weight: 400;
  color: #999999;
}

.detail-left4>button {
  width: 160px;
  height: 50px;
  font-size: 22px;
  font-weight: 400;
  border: none;
  color: white;
  text-align: center;
  line-height: 50px;
  background-color: #1a9cfc;
}

.detail-left>ul>li {
  cursor: pointer;
  list-style: none;
  width: 198px;
  height: 60px;
  text-align: center;
  margin-top: 5vh;
  line-height: 60px;
  font-size: 20px;
  color: #333333;
  font-weight: 400;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.detail-left1>img {
  width: 100px;
}

.left11 {
  color: #1A9CFC!important;
  /* width: 15vw; */
  height: 6vh!important;
  line-height: 6vh!important;
}
</style>
