<template>
  <div class="search">
     <div class="title">
        <div>家庭<span>360</span>全景</div>
        <div><div><input type="text" placeholder="姓名/手机/电话/地址/工单号"><p>点击右侧功能键可根据详细地址搜索----><i class="iconfont icondingwei"></i></p></div><p class="search">搜索</p></div>
    </div>
    <div class="paging">
        <div class="block">
           <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :page-size="100"
            :pager-count="5"
            layout="prev, pager, next, jumper"
            :total="1000">
            </el-pagination>
        </div>
        <div class='button'>确定</div>
        <p>当前第<span> 1 </span>页/共<span> 23 </span>页</p>
    </div>
    <div class="content">
        <div class="item" v-for='item in 2' @click='toDetail' :key="item.id">
            <p class='info'><img src="../static/info.png" alt=""><span>{{item.relevancdid}}</span></p>
            <p class='position'><img src="../static/position.png" alt=""><span>{{item.address}}</span></p>
            <p class="gray"><span>家庭成员</span><span>{{item.familyNum}}人</span></p>
            <p><span>交互次数</span><span>{{item.sessionNum}}</span></p>
            <p class="gray"><span>购买历史</span><span>{{item.productNum}}</span></p>
            <p><span>服务历史</span><span>{{item.serviceNum}}</span></p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            searchResult:[]
        }
    },
    created(){
        console.log(this.$route.params.keyWord);
        // this.$get('search',{
        //     queryStr:this.$route.params.keyWord
        // }).then(res =>{
        //     this.searchResult = res.concat();
        // })
    },
    methods:{
        handleSizeChange(){

        },
        handleCurrentChange(){

        },
        currentPage3(){

        },
        toDetail(){
            this.$router.push({name:'detail'})
        }
    }
}
</script>

<style lang="scss" scoped>
    .search{
        width:100%;
        height:100%;
        display:flex;
        flex-direction: column;
        align-items: center;
        .title{
            display:flex;
            width:750px;
            align-items: center;
            flex-direction: column;
            margin-top:70px;
            .icondingwei{
                font-size:18px;
                color:#ff9d71;
            }
            &>div:first-child{
                font-size:40px;
                color:#0091ff;
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
                display:flex;
                align-items: center;
                }
            }
            &>p{
                width:80px;
                height:30px;
                background:#ff9d71;
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
        .paging{
            width:750px;
            display:flex;
            height:50px;
            align-items: center;
            flex-shrink: 0;
            justify-content: flex-end;
            .block{
                display:flex;
                align-items: center;
                justify-content: flex-end;
                width:650px;
            }
            .button{
                width:50px;
                height:25px;
                text-align: center;
                line-height: 25px;
                color:#fff;
                background: #ff9d71;
                flex-shrink: 0;
                font-size:14px;
                border-radius:5px;
            }
            p{
                font-size:14px;
                color:#767885;
                width:140px;
                display: flex;
                justify-content: center;
                flex-shrink: 0;
                span{
                    color:#333;
                }
            }
        }
        .content{
            width:750px;
            height:500px;
            display:flex;
            flex-wrap: wrap;
            flex-shrink: 0;
            align-items:flex-start;
            .item{
                width:230px;
                height:230px;
                margin:0 10px;
                background:#fff;
                border-radius:10px;
                &>p{
                    color:#767885;
                    display:flex;
                    justify-content: space-between;
                    height:30px;
                    width:80%;
                    margin:0 5%;
                    padding:0 5%;
                    border-radius:5px;
                    align-items: center;
                    font-size:14px;
                    span:last-child{
                        color:#333;
                    }
                    &.gray{
                        background:#edf1f4;
                    }
                }
                .info{
                    width:90%;
                    height:50px;
                    padding:0;
                    margin:0 5%;
                    font-weight:900;
                    justify-content: flex-start;
                    img{
                        margin-right:15px;
                    }
                }
                .position{
                    width:90%;
                    height:50px;
                    padding:0;
                    margin:0 5%;
                    justify-content: flex-start;
                    span{
                        color:#767885;
                        font-size:12px;
                    }
                    img{
                        margin-right:15px;
                    }
                }
            }
        }
    }
</style>