<template>
  <div id="app">
    <router-view></router-view>
<!-- xxxxx -->
  </div>
</template>

<script>

// import Box from './box'
export default {
  // components: { Box},
  name: "App"
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
 overflow: auto;
 font-size: 14px;
    font-family: 微软雅黑, "Microsoft YaHei", Arial, Verdana;
    /* overflow-x: hidden; */

}


#app {
  width: 100%;
  height: 100%;
}

#app {
  min-width: 1200px;
}
</style>
