<template>
  <div class="price">
    <div class="productPrice">
      <span>产品价格</span>
      <div class="transitionLine">
        <div class="leftLine"></div>
        <div style="color:#1A2056;font-size:18px;">product price</div>
        <div class="rightLine"></div>
      </div>
    </div>
    <div class="production-price">
      <div class="production-price-content">
        <div class="pdTop">
          <div class="price-info">
            <p class="left">1000
              < 充值金额 < 1,0000 元</p>
                <p class="right">0.050 元/条</p>
          </div>

          <div class="price-info">
            <p class="left">1,0000
              < 充值金额 < 100,000 元</p>
                <p class="right">0.045 元/条</p>
          </div>

          <div class="price-info">
            <p class="left">充值金额 ≥ 100,000 元</p>
            <p class="right">0.040 元/条</p>
          </div>
        </div>
        <div class="price-button">
          <div class="rightnow">立即开通</div>
          <div class="rightnow-number">4008-175-888</div>
        </div>
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
.price {
  width: 100%;
  z-index: 99;
  height: auto;
  background: white;
}

.coushu {
  height: 11vh;
  background-color: #f6f8fa;
}

.production-price {
  width: 100%;
  height: auto;
}

.production-price-content {
  width: 1160px;
  height: 569px;
  margin: auto;
  background-image: url("../assets/短信/组91.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
}

.pdTop {
  padding-top: 48px;
  height: 288px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.price-info {
  width: 100%;
  font-size: 19px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
}

.left {
  margin-left: 200px;
  float: left;
  width: 300px;
}

.right {
  float: right;
  width: 300px;
}

.price-button {
  margin: auto;
  width: 100%;
  height: 173px;
  font-size: 22px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(8, 56, 117, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.rightnow {
  width: 260px;
  height: 60px;
  border: 2px solid #1a9cfc;
  margin-right: 15px;
  line-height: 60px;
}

.rightnow-number {
  width: 260px;
  height: 60px;
  border: 2px solid #1a9cfc;
  margin-left: 15px;
   line-height: 60px;
}

.productPrice {
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  padding-top: 9vh;
}

.productPrice>span {
  line-height: 58px;
  color: #262933;
  font-weight: 600;
  font-size: 36px;
}


.transitionLine {
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
  margin-top: 1.41vh;
}

.transitionLine>div:nth-child(2) {
  padding: 0 3px;
}

.leftLine {
  width: 300px;
  height: 1px;
}

.rightLine {
  width: 300px;
  height: 1px;
}

.leftLine {
  background: linear-gradient(-90deg, rgba(242, 71, 61, 1), rgba(26, 32, 86, 1), rgba(255, 255, 255, 1));
}

.rightLine {
  background: linear-gradient(90deg, rgba(26, 32, 86, 1), rgba(255, 255, 255, 1));
}
</style>
