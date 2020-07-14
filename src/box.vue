<template>
  <div id="app">
    <Home></Home>
     <Partner></Partner> 
    <Foot></Foot>
  </div>
</template>

<script>
import Home from "./pages/home";
import Partner from './repeatComponents/officalPartner'
import Foot from './repeatComponents/bottom'

export default {
  components: { Home,Partner,Foot},
  name: "App"
};
</script>

<style>
html,body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>
