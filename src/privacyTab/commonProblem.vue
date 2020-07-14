<template>
  <div class="detailInfo">
    <div class="detailInfo1">
      <HeadList></HeadList>
    </div>
    <div class="detailInfoTwos">
      <!-- 左侧代码 -->
      <Left></Left>
      <!-- 右侧信息 -->
      <div class="common-right">
        <p class="detail-right-title1">中通云号码号码保护常见问题</p>
        <p class="detail-right-title2">本页面提供关于中通云号码保护的一些常见问题的解答，如果您在使用过程中遇到问题，可以拨打客服热线来寻求帮助。</p>
        <ul style="padding-inline-start:0;list-style:none;">
          <li class="list-title1">一般常见问题</li>
        </ul>
        <!-- 折叠面板v-model="activeNames" -->
        <el-collapse v-model="activeNames" accordion @change="handleChange" style="margin-bottom:7vh;width:90%;">
          <el-collapse-item title="如何申请号码保护?" name="1">
            <div>
              进入
              <router-link to="/" tag="a" style="color:#1A9CFC; text-decoration: none;">号码申请保护页面</router-link>立即申请该产品，申请完成后，需要等待审核，审核时间大概三个工作日，届时审核结果以邮件形式通知您。
            </div>
          </el-collapse-item>
          <el-collapse-item title=" 录音文件存在哪里？" name="2">
            <div>存放在 COS 云存储，mp3 格式，有效期是一周。可以通过 URL 下载长期保存</div>
          </el-collapse-item>
          <el-collapse-item title="为什么这个号码会被标记？中间号绑定数量和绑定时间是多少?" name="3">
            <div>
              号码呼叫被叫次数过多，用户会去工信部投诉或者把号码拉黑并在第三方软件（腾讯手机管家，百度安全卫士，360等）标记骚扰电话。如果投诉，工信部收到投诉就会去处理这一块投诉问题， 然后会转到给我们，一般情况下就会关停号码，如果是在第三方软件标记，就会在用户有安装软件下显示骚扰电话。
            </div>
          </el-collapse-item>
          <el-collapse-item title="中间号绑定数量和绑定时间是多少？" name="4">
            <div>
              中间号绑定数在合法范围内不限：一个小号同时的通话数，技术上没限制，但是运营商会有监控，并发太高可能会被屏蔽，一般一个小号同时处于通话的并发路数控制在10路左右。中间号绑定时间：一般在设定一周，如要增加，需要额外设置，如果没有通知 ，一般会定义默认一天。中间号的收费标准：主叫拨打还是会扣费，跟我们的正常通话是一样。回拨的是网络电话，主叫方不扣费。
            </div>
          </el-collapse-item>
          <el-collapse-item title="号码有么有SDK或demo" name="5">
            <div>您好，当前号码保护只有 PHP 语言的 demo，其他语言的目前没有提供，后续会增加，敬请期待。</div>
          </el-collapse-item>
        </el-collapse>
        <!-- 折叠面板结束 -->
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
  components: { HeadList, Left, Foot, Bottom },

  data() {
    return {
      activeNames: ["1"]
    };
  },
  methods: {
    handleChange(val) {
      console.log(val, 'dskdksdks');
    }
  }
};
</script>
<style>
.detailInfo  {
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
  height: 126px;
  background-color: black;
}

.detailInfoTwos {
  width: 100%;
  height: auto;
  margin: auto;
  margin-top: 108px;
  display: flex;
  justify-content: center;
}

.el-collapse-item__content {
  width: 80%;
  margin-left: 3vw;
  line-height: 35px;
}

.el-collapse-item__header {
  font-size: 14px!important;
}

.el-collapse-item__header.is-active {
  color: #1A9CFC;
  z-index: 999;
}

/* 左侧 */


/* 左侧代码 */


/* 右侧 */

.common-right {
  width: 720px;
  height: auto;
  float: right;
  margin-left: 20px;
  padding-top: 11px;
}

.detail-right-title1 {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 120px;
}

.detail-right-title2 {
 width: 690px;
  font-size: 20px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 36px;
  /* margin-bottom: 90px; */
}

.detail-right>ul>li {
  list-style: none;
  margin-left: -3vw;
  width: 720px;
}

.list-title {
  font-size: 36px;
  font-weight: 400;
  line-height: 130px;
  /* margin-top: 7vh; */
}

.list-title1 {
  font-size: 22px;
  font-weight: 400;
  line-height: 108px;
}

.list-title2 {
  font-size: 18px;
  font-weight: 400;
  line-height: 32px;
}

.line2 {
  width: 90%;
  border-bottom: 1px solid gainsboro;
}

.detail-ul>li {
  font-size: 13px;
  line-height: 50px;
}

.detail-ul>.list-title4 {
  font-size: 36px;
  font-weight: 500;
  line-height: 100px;
}

el-collapse-item {
  font-size: 1vw;
}
</style>
