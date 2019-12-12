<template>
  <div class="home">
      <div>家庭<span>360</span>全景</div>
      <div><div><input v-model="keyWord" type="text" placeholder="姓名/手机/电话/地址/工单号"><p>点击右侧功能键可根据详细地址搜索----><i class="iconfont icondingwei"></i></p></div><p @click="toSearch" class="search">搜索</p></div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      keyWord:''
    }
  },
  methods:{
    toSearch(){
      this.$router.push({name:'search',params:{keyWord:this.keyWord}});
    }
  }

}
</script>

<style lang="scss" scoped>
  .home{
    width:100%;
    height:100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    i{
      color:#ff9d71;
      font-size:18px;
    }
    &>div:first-child{
      font-size:40px;
      color:#0091ff;
      margin-top:200px;
      margin-bottom:30px;
      font-family: '黑体';
      span{
        color:#ff9d71;
      }
    }
    &>div:last-child{
      display:flex;
      align-items: center;
      div{
        width:600px;
        height:30px;
        background:#fff;
        display:flex;
        align-items: center;
        border-radius:5px;
        padding:0 10px;
        input{
          width:60%;
          color:#a6a8b4;
          font-size:12px;
          border:none;
          outline:none;
        }
        p{
          color:#a6a8b4;
          font-size:12px;
          height:100%;
          display: flex;
          align-items: center;
        }
      }
      &>p{
        width:80px;
        height:30px;
        background:#ff9d71;
        cursor:pointer;
        color:#fff;
        display:flex;
        align-items: center;
        justify-content: center;
        font-size:14px;
        border-radius:5px;
        margin-left:15px;
      }
    }
  }
</style>