<template>
    <div class="detail">
        <div class="left">
          <!-- 顶部轮播 -->
            <div class="swiper-container-up" id="chart">
                <!-- <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in 7" :key="item.relevancdid">
                    <i class="iconfont iconperson"></i>
                    <div class="info">
                        <p class="name">{{item.name}}</p>
                        <p>购买:{{item.productNum}} 服务:{{item.serviceNum}}</p>
                    </div>
                </div>
                </div> -->
            </div>
            <!-- <div class="line-up">
                <img class="line1" src="../static/line1.png" alt="">
                <img  class="line2" src="../static/line2.png" alt="">
                <img  class="line3" src="../static/line2.png" alt="">
                <img  class="line4" src="../static/line1.png" alt="">
            </div> -->
            <!-- 中间部分 -->
            <div class="middle">
                <div class="buy">
                    <p class="title">购买</p>
                    <div class="content">
                        <img v-for="i in 8" src="../static/xiyiji.png" alt="">
                    </div>
                </div>
                <div class="home">
                    <img src="../static/jia.png" alt="">
                    <p class="position">
                        <i class="iconfont icondingwei"></i>
                        <span>山东省青岛市市南区学府路【香溢紫都26栋406】（青岛紫泉饮料公司2号门附近</span>
                    </p>
                    <span @click="toMap">查看地图</span>
                </div>
                <div class="serve">
                    <p class="title">服务</p>
                    <div class="content">
                        <img v-for="i in 8" src="../static/xiyiji.png" alt="">
                    </div>
                </div>
            </div>
            <div class="line-bottom">
                <img v-if="weak.length == 1" class="line1" src="../static/line1.png" alt="">
                <img v-if="weak.length >= 2" class="line2" src="../static/line2.png" alt="">
                <img v-if="weak.length >= 3" class="line3" src="../static/line2.png" alt="">
                <img v-if="weak.length >= 4" class="line4" src="../static/line1.png" alt="">
            </div>
            <!-- 底部轮播 -->
            <div class="swiper-container-bottom">
                <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in weak" :key="item.relevancdid">
                    <i class="iconfont iconperson"></i>
                    <div class="info">
                        <p class="name">{{item.name}}</p>
                        <p>购买:{{item.productNum}} 服务:{{item.serviceNum}}</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div class="icon">
            <div><img src="../static/fangda.png" alt=""></div>
            <div><img src="../static/suoxiao.png" alt=""></div>
            <div><img src="../static/reset.png" alt=""></div>
        </div>
        <div class="right">
            <p class="title">家庭成员及交互历史</p>
            <div class="tab">
                <p @click="tab='members'" :class="[tab=='members'?'active':'']">家庭成员(2)</p>
                <p @click="tab='buyHistory'" :class="[tab=='buyHistory'?'active':'']">购买历史(2)</p>
                <p @click="tab='service'" :class="[tab=='service'?'active':'']">服务历史(4)</p>
                <p @click="tab='jilu'" :class="[tab=='jilu'?'active':'']">交互记录(3)</p>
            </div>
            <div class="content">
            <!-- 家庭成员 -->
            <div class="members" v-if="tab == 'members'">
                <el-table :data="tableData" border style="width: 100%">
                    <el-table-column prop="sourceid" label="序号" width="50"></el-table-column>
                    <el-table-column prop="name" label="姓名"></el-table-column>
                    <el-table-column prop="mobile" label="手机号码" width="100"></el-table-column>
                    <el-table-column prop="productNum" label="购买次数" width="80"></el-table-column>
                    <el-table-column prop="serviceNum" label="服务次数" width="80"></el-table-column>
                </el-table>
            </div>
            <!-- 购买历史 -->
            <div class="buyHistory" v-if="tab == 'buyHistory'">
                <div class="item" v-for="(item,index) in buyHistory" :key="index">
                    <div class="title"><p></p><span>产品型号:{{item.productcode}} {{item.productcategory}}</span></div>
                    <div><p><span>姓名</span><span class="name">{{item.name}}</span></p><span>购买途径:线上</span></div>
                    <div><p>购买日期:{{item.purchasedate}}</p><p>价格:{{item.price ? item.price + '元' : '未记录'}}</p></div>
                    <div><p>机械编码：{{item.productno || '未记录'}}</p><p>是否过保:否</p></div>
                </div>
            </div>   
            <!-- 服务历史 -->
            <div class="service" v-if="tab == 'service'">
                <div class="serviceTab">
                    <span class="active">咨询/其他()</span>
                    <span>安装()</span>
                    <span>维修()</span>
                    <span>投诉()</span>
                    <span>活动()</span>
                </div>  
                <div class="item" v-for="i in 3">
                    <div class="title"><p></p><span>产品型号：S7516Z61    海尔波轮</span></div>
                    <div><p><span>姓名</span><span class="name">王建国</span></p><span>购买途径:线上</span></div>
                    <div><p>购买日期:2019-10-11</p><p>价格:233元</p></div>
                    <div><p>机械编码：GX123981320127839072DXXX</p><p>是否过保:否</p></div>
                </div>
            </div>
            <!-- 交互记录 -->
            <div class="jilu" v-if="tab == 'jilu'">
                    <div class="jiluTab">
                    <span class="active">全部</span>
                    <span>电话</span>
                    <span>微信</span>
                    <span>短信</span>
                    <span>其他</span>
                </div>
                <div class="block">
                    <el-timeline>
                        <el-timeline-item
                        v-for="(activity, index) in activities"
                        :key="index"
                        :icon="activity.icon"
                        :type="activity.type"
                        :color="activity.color"
                        :size="activity.size"
                        :timestamp="activity.timestamp"
                        placement="top">
                        {{activity.content}}
                        </el-timeline-item>
                    </el-timeline>
                </div>  
            </div>
            </div>
        </div>
    </div>
</template>
<script>
import Swiper from "swiper";
import echarts from "echarts";
export default {
    data(){
        return{
            tab:"jilu",
            tableData:[],
            weak:[],
            strong:[],
            buyHistory:[],
            activities:[{
                icon:'',
                type:'',
                color:'#0bbd87',
                content:'这里是哦撒娇殴打容部分',
                timestamp:'2019-10-29'
            },{
                icon:'',
                type:'',
                color:'#0bbd87',
                content:'232',
                timestamp:'2019-10-29'
            }]
        }
    },
    created(){
        this.$get("detail",{
            relevancdid:666,
            customerid:222
        }).then(res =>{
            console.log(res)
            this.strong = res.strong.concat();
            this.weak = res.weak.concat();
            this.tableData = res.strong.concat(res.weak);
            this.buyHistory = res.product.concat();
        })
    },
    mounted(){
        var myChart = echarts.init(document.getElementById("chart"), "light");
        myChart.setOption();
        var swiper_up = new Swiper('.swiper-container-up', {
            slidesPerView: 4,
            spaceBetween: 30,
            slidesPerGroup: 3,
            loop: false,
            loopFillGroupWithBlank: true
        });
        var swiper_bottom = new Swiper('.swiper-container-bottom', {
            slidesPerView: 4,
            spaceBetween: 30,
            slidesPerGroup: 3,
            loop: false,
            loopFillGroupWithBlank: true
        });
    },
    methods:{
        toMap(){
            this.$router.push({name:"map"});
        }
    }
}
</script>

<style lang="scss" scoped>
.detail{
    height:100%;
    width:100%;
    display:flex;
    justify-content: center;
    .left{
        width:55%;
        height:580px;
        margin-top:100px;
        display:flex;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
        .swiper-container-up,.swiper-container-bottom{
            width:100%;
            height:150px;
            flex-shrink: 0;
            .swiper-wrapper{
                width:100%;
                height:100%;
                .swiper-slide{
                    background:#fff;
                    border-radius:5px;
                    display:flex;
                    height:90%;
                    align-items: center;
                    border-bottom:5px solid #ff9d71;
                    width:180px;
                    i{
                        font-size:40px;
                        margin-left:15px;
                        margin-right:5px;
                        color:#ff9d71;
                    }
                    .info{
                        color:#767885;
                        font-size:12px;
                        height:35px;
                        display:flex;
                        flex-direction: column;
                        justify-content: space-between;
                        .name{
                            font-weight:900;
                            color:#000;
                            font-size:14px;
                        }
                    }

                }
            }
        }
        .line-up,.line-bottom{
            width:100%;
            height:90px;
            position:relative;
            .line1{
                height:90px;
                width:40%;
                position:absolute;
                left:10%;
                top:0;
            }
            .line2{
                height:90px;
                width:15%;
                position:absolute;
                left:35%;
                top:0;
            }
            .line3{
                height:90px;
                width:15%;
                position:absolute;
                right:35%;
                top:0;
                transform:rotateY(180deg); 
            }
            .line4{
                height:90px;
                width:40%;
                position:absolute;
                right:10%;
                top:0;
                transform:rotateY(180deg); 
            }
        }
        .line-bottom{
            transform:rotateX(180deg); 
        }
        .middle{
            display:flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            .buy,.serve{
                width:200px;
                height:210px;
                background:#fff;
                border-radius:10px;
                box-shadow: 0 0 15px #ccc;
                .title{
                    width:90%;
                    height:50px;
                    line-height: 50px;
                    font-size:14px;
                    color:#000;
                    margin-left:10%;
                }
                .content{
                    width:100%;
                    display:flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: flex-start;
                    img{
                        width:30px;
                        height:35px;
                        margin:0 18px;
                        margin-bottom:15px;
                    }
                }
            }
            .home{
                width:200px;
                height:260px;
                background:#fff;
                margin:0 20px;
                border-radius:10px;
                box-shadow:0 0 15px #ccc;
                display:flex;
                flex-direction: column;
                align-items: center;
                img{
                    width:160px;
                    height:110px;
                    margin-top:40px;
                }
                .position{
                    width:100%;
                    height:50px;
                    display:flex;
                    flex-direction: row;
                    align-items: center;
                    color:#767885;
                    margin-top:10px;
                    i{
                        font-size:16px;
                        margin:0 10px;
                    }
                    span{
                        font-size:12px;
                    }
                }
                &>span{
                    font-size:12px;
                    color:#ff9d71;
                    margin-top:15px;
                    margin-right:40%;
                    cursor:pointer;
                }
            }
        }
    }
    .icon{
        width:60px;
        height:100%;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        div{
            width:40px;
            height:40px;
            background:#fff;
            display:flex;
            justify-content: center;
            align-items: center;
            margin:5px 0;
            &:last-child{
                margin-bottom:100px;
            }
            img{
                width:60%;
                height: 60%;
            }
        }
    }
    .right{
        width:25%;
        padding:0 10px;
        height:530px;
        background:#fff;
        margin-top:100px;
        display:flex;
        flex-direction: column;
        &>.title{
            color:#000;
            font-family: "黑体";
            font-weight:900;
            height:40px;
            line-height: 40px;
            width:100%;
            font-size:14px;
            border-bottom:1px solid #dfe0eb;
        }
        .tab{
            width:100%;
            display:flex;
            justify-content: space-between;
            height:40px;
            color:#a6a8b4;
            font-size:14px;
            align-items: center;
            font-family:"黑体";
            cursor:pointer;
            &>.active{
                color:#0091ff;
            }
        }
        .content{
            width:100%;
            height:450px;
            .el-table{
                width:100%;
            }
            .buyHistory{
                width:100%;
                height:100%;
                overflow-y:auto;
                .item{
                    width:100%;
                    height:120px;
                    background:#f4f6fc;
                    margin-bottom:10px;
                    display:flex;
                    flex-direction: column;
                    .title{
                        font-weight:900;
                        font-size:14px;
                        height:40px;
                        line-height: 40px;
                        display:flex;
                        flex-direction: row;
                        justify-content: flex-start;
                        align-items: center;
                        p{
                            width:10px;
                            height:10px;
                            background:#0091ff;
                            border-radius:50%;
                            margin-right:10px;
                        }
                    }
                    &>div{
                        display:flex;
                        justify-content: space-between;
                        width:90%;
                        padding:0 5%;
                        span{
                            color:#767885;
                            font-size:12px;
                        }
                        p{
                            color:#767885;
                            font-size:12px;
                            height:25px;
                            line-height: 25px;
                        }
                    }
                }
            }
            .service{
                width:100%;
                height:100%;
                .serviceTab{
                    width:100%;
                    height:30px;
                    display:flex;
                    align-items: center;
                    justify-content: space-between;
                    span{
                        font-size:12px;
                        color:#a6a8b4;
                        padding:3px 10px;
                        border-radius:13px;
                        &.active{
                            background:#0091ff;
                            color:#fff;
                        }
                    }
                }
                .item{
                    width:100%;
                    height:120px;
                    background:#f4f6fc;
                    margin-bottom:10px;
                    display:flex;
                    flex-direction: column;
                    .title{
                        font-weight:900;
                        font-size:14px;
                        height:40px;
                        line-height: 40px;
                        display:flex;
                        flex-direction: row;
                        justify-content: flex-start;
                        align-items: center;
                        p{
                            width:10px;
                            height:10px;
                            background:#0091ff;
                            border-radius:50%;
                            margin-right:10px;
                        }
                    }
                    &>div{
                        display:flex;
                        justify-content: space-between;
                        width:90%;
                        padding:0 5%;
                        span{
                            color:#767885;
                            font-size:12px;
                        }
                        p{
                            color:#767885;
                            font-size:12px;
                            height:25px;
                            line-height: 25px;
                        }
                    }
                }
            }
            .jilu{
                width:100%;
                display:flex;
                flex-direction: column;
                .jiluTab{
                    width:100%;
                    height:30px;
                    display:flex;
                    align-items: center;
                    justify-content: flex-start;
                    margin-bottom:15px;
                    span{
                        font-size:12px;
                        color:#a6a8b4;
                        padding:3px 10px;
                        border-radius:13px;
                        margin-right:15px;
                        &.active{
                            background:#0091ff;
                            color:#fff;
                        }
                    }
                }
            }
        }
    }
}
</style>