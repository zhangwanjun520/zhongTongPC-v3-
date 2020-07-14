<template>
  <div class="headlist">
    <div class="content1">
      <img src="../assets/01方案.png" class="img1" alt />
      <!-- <ul class="list2">
        <router-link to='/homePage' tag="li">首页</router-link>

        <li>
          <el-dropdown>
            <span class="el-dropdown-link" style="color:white">
              通信产品
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown" id="pull" placement="bottom-start" style="font-size:22px">
              <el-dropdown-item>
                <a id="aa" @click="phone">400/95客服号码</a>
              </el-dropdown-item>
              <router-link tag="a" target="_blank" style="text-decoration: none;" v-for="(sitem,sindex) in pulllist" :key="sindex" :to="sitem.path" active-class="active">
                <el-dropdown-item>{{sitem.name}}</el-dropdown-item>
              </router-link>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
        <li>
          <el-dropdown>
            <span class="el-dropdown-link" style="color:white;font-szie:18px;">
              解决方案
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown" id="pull" placement="bottom-start" style="font-size:22px">
              <router-link tag="a" target="_blank" value="citem.name" style="text-decoration:none;font-szie:18px;" v-for="(citem,cindex) in pulllist2" :key="cindex" :to="citem.path" active-class="cactive">
                <el-dropdown-item>{{citem.name}}</el-dropdown-item>
              </router-link>
              <el-dropdown-item>
                <a @click="machines" id="aa">机器人客服</a>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
        <li>
          <el-dropdown>
            <span class="el-dropdown-link" style="color:white;font-szie:18px;" @click='abouts'>
              关于我们
            </span>
          </el-dropdown>
        </li>
      </ul> -->

   <div class="list2">
      <router-link tag="a" to='/homePage' target="_blank">首页</router-link>
      <router-link tag="a" to='/privacy/shortMessage' target="_blank">短信</router-link>
      <router-link tag="a" to='/privacy' target="_blank">隐私号</router-link>
      <router-link tag="a" to='/privacy/SMS' target="_blank">5G短信</router-link>
      <a href="http://www.sinocall.net/" target="_blank">400/95客服号码</a>
      <router-link tag="a" to='/aboutUs' target="_blank">关于我们</router-link>
   </div>
      <ul class="tab">
        <a href="http://smsclient.sinocall.com/#/login" class="login-a">登录/注册</a>
      </ul>
      <!-- </div> -->
      <div></div>
    </div>

  </div>
</template>

<script>
import List from "../repeatComponents/list";
export default {
  components: { List },
  data() {
    return {

      pulllist: [
        { name: "隐私号", path: "/privacy" },
        { name: "短信 ", path: "/privacy/shortMessage" },
        { name: "视频短信", path: "/privacy/videoMessage" },
        { name: "5G短信", path: "/privacy/SMS" }

      ],
      pulllist2: [
        { name: "IPCC ", path: "/solution" },
        { name: "智能通行 ", path: "/solution/intelligentPassage" },
        { name: "视频会议", path: "/solution/videoconFerencing" },
        // { name: "5G/IOT", path: "" }
      ],
      about: [
        { name: "关于我们", path: "/abouts" },
        { name: "媒体报道", path: "" },
        { name: "公司新闻 ", path: "" },
        { name: "行业动态", path: "" },
        { name: "联系我们", path: "" },
        { name: "加入我们", path: "" }
      ]
    };
  },
  methods: {
    phone() {
      window.open("http://www.sinocall.net", '_blank')
    },
    machines(item) {
      window.open("http://www.dongrobot.com", '_blank')
    },
    abouts() {
      this.$router.push('/aboutUs');
    }
  }
};
</script>
<style>
.headlist {
  position: absolute;
  width: 100%;
}

.content1 {
  color: white;
  width: 90%;
  height: 120px;
  margin: auto;
  font-size: 18px;
}

.list2 {
  height: 20%;
  font-size: 17px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  float: left;
  margin-top: 54px;
  margin-left: 33px;
  width: 700px;
  /* border: 1px solid; */
  margin-left: 70px;
}
.list2>a{
  text-decoration: none;
  color: white;
  display: inline-block;
  /* width: 100px; */
  /* border: 1px solid; */
  margin-right: 30px;

  text-align: left;
}
.img1 {
  width: 143px;
  display: block;
  float: left;
  padding-top: 38px;
}

.list2>a {

  cursor: pointer;
}

.list2>a：hover {
  color: orange;
}

.tab {
  font-size: 17px;
  float: left;
  margin-top: 55px;
    /* border: 1px solid; */
}

.tab>span {
  list-style: none;
  float: left;
  /* margin-right: 200px; */


  /* width: 40px; */
  height: 30px;
  line-height: 43px;
  text-align: center;

}

.sel:hover {
  cursor: pointer;
  color: orange;
}

.el-dropdown-link {
  cursor: pointer;
  font-size: 18px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}

.el-icon-arrow-down {
  font-size: 12px;
}

#pull {
  line-height: 20px;
  font-size: 1.2vw;

  width: 285px;
}

#aa {
  text-decoration: none;
  color: grey;
}

.login-a {
  text-decoration: none;
  color: white;
}

.login-a:hover {
  color: orange;
}
</style>
