<template>
    <div class="show">
        <div class="show-content"></div>
        
    </div>
</template>

<script>
import List from '../repeatComponents/headList'
export default {
    // components:{List}
}
</script>
<style>
.show{
    z-index: 99;
    height: 1022px;
  background:white;
  overflow-y: auto;
  position: absolute;
  top: 827px;
  /* bottom: 0px; */
  left: 0;
  right: 0;
}
.show-content{
    width: 1326px;
    height: 836px;
    margin: auto;
    background-color: blue;
    margin-top: 93px;
   
}
</style>