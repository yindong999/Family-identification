<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
  export default {
    mounted(){
      document.getElementById("app").style.height = document.documentElement.clientHeight + "px";
    }
  }
</script>
<style>
  *{
    margin:0;
    padding:0;
  }
  #app{
    width:100%;
    background:url('./static/background.jpg') no-repeat;
    background-size:100% 100%;
  }
</style>
