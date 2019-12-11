<template>
  <div class="map">
      <div id="container"></div>
  </div>
</template>
<script>
export default {
  mounted(){
    var map = new AMap.Map('container');
  }
}
</script>

<style lang="scss" scoped>
  .map{
    width:100%;
    height:100%;
    background:#6066Bb;
    opacity: 0.6;
    display: flex;
    justify-content: center;
    align-items: center;
    #container{
      width:80%;
      height:80%;
      background: #fff;
      opacity: 1;
    }
  }
</style>