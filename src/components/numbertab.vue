<template>
  <div class="number-tab">
    <div class="tablist">
      <div class="tablist2">
        <router-link tag="span" v-for="(item,index) in tablist" :key="index" :to="item.path" class="numberLine" active-class="numberlist">
          <span>{{item.name}}</span>
        </router-link>
      </div>

    </div>

  </div>
</template>

<script>
import List from '../repeatComponents/headList'
export default {
  // components:{List}
  data() {
    return {
      tablist: [
        { name: "功能介绍", path: "/privacy/shortMessage" },
        { name: "特点优势", path: "/privacy/advantage" },
        { name: "产品价格", path: "/privacy/price" },

      ],
    }
  }
}
</script>
<style>
.tablist {
  width: 90%;
  height: 18vh;
  font-size: 22px;
  line-height: 18vh;
  margin: auto;
}

.tablist>.tablist2{
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.tablist>.tablist2>span {
  text-align: center;
  display: inline-block;
  height: 17.2vh;
  /* width: 30%; */
  margin-left: 3%;
  color: white;
}

.tablist>.tablist2>span:hover {
  color: #1A9CFC;
}

.numberLine{
   border-bottom: 4px solid #042149;
}

.numberlist {
  border-bottom: 4px solid #1A9CFC;
}
</style>