<template>
  <div class="privacy-foot">
    <!-- <img src="../assets/隐私号/401214245.png" alt /> -->
    <div class="foot2-content">
      <p>现在接入中通网络 · 云通信，即享
        <span class="eighty-eight">88</span>元开发大礼包</p>
      <button>立即接入</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style>
.privacy-foot {
  position: relative;
  width: 100%;
  height: 400px;
  background-image: url("../assets/隐私号/401214245.png");
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
}

.privacy-foot>img {
  width: 100%;
  height: 50vh;
}

.foot2-content {
  width: 100%;
  height: auto;
  padding-top: 70px;
}

.foot2-content>p {
  width: 100%;
  margin: auto;
  text-align: center;
  font-size: 36px;
  font-weight: 500;
  padding-bottom: 30px;
  line-height: 15vh;
}

.foot2-content>p>span {
  font-size: 46px;
  font-weight: bold;
  color: #1A9CFC;
}

.foot2-content>button {
  display: block;
  margin-top: 15vh;
  margin: auto;
  width: 300px;
  height: 80px;
  text-align: center;
  line-height: 80px;
  background-color: #1A9CFC;
  color: white;
  font-weight: 500;
  border: none;
  font-size: 32px;
}
</style>
