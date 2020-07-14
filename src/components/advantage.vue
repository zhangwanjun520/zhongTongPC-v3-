<template>
  <div class="advantage">
    <div class="number-content3">
      <p class="my-advantage">我们的优势</p>
      <p class="number-info1">极速触达</p>
      <p class="number-info2">
        五星机房+BGP网络+北上广深机房分布+主番</br>
        多条链数，集群服务；
      </p>
      <p class="number-info1">三网覆盖</p>
      <p class="number-info2">
        短信通道容量=1/31的使用率+多根通道备份</br>
        +独享11位码号；
      </p>
      <p class="number-info1">极简集成</p>
      <p class="number-info2">接入灵活一行代码即可搞定；</p>
      <p class="number-info1">专业安全</p>
      <p class="number-info2">独立安全保障机制，IP地址白名单.</p>
    </div>
  </div>
</template>

<script>
export default {
};
</script>
<style>
.advantage {
  width: 100%;
  z-index: 10;
  height: 1000px;
  background: white;
  background-image: url("../assets/短信/组90.png");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}

.number-content3 {
  width: 90%;
  height: 100vh;
  margin: auto;
  height: 100%;
  color: white;
}

.my-advantage {
  margin: auto;
  width: 30%;
  font-size: 56px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  padding-top: 99px;
}

.number-info1 {
  width: 400px;
  height: 4vh;
  font-size: 26px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: white;
  margin-left: 260px;
  margin-top: 56px;
  margin-bottom: 30px;
}

.number-info2 {
  width: 400px;
  font-size: 19px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  margin-left: 260px;
  line-height: 38px;
  opacity: 0.9;
}
</style>
