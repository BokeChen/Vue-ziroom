<template>
  <div class="main">
  <Header bannerScrollTop="0" searchInputShow="1" province="北京"></Header>
    <div class="main-ad">
    <img src="./images/mainAd1.png" alt="首页宣传海报"/>
      <ul class="main-ad-nav">
      <li > 我要租房</li>
       <li class="rightLiGrayBg">房屋委托</li>
      </ul>
      <button class="main-ad-searchBtn"></button>
    </div>
       <!-- 通用模块1 -->
    <div class="rentInfo">
     <h3>租房情报局</h3>
     <p class="rentInfo-hTip">带你发现居住的另一种选择</p>
    
    <ul class="rentInfo-list">
    <li class="rentInfo-list-li">
      <img src="./images/rentInfo1.png"/>
      <div class="rentInfo-li-div">
       <p>都市租客图鉴</p>
       <span class="ellipsis">助力毕业生找室友</span>
      </div>
    </li>
     <li class="rentInfo-list-li">
      <img src="./images/rentInfo2.png"/>
      <div class="rentInfo-li-div">
       <p>自如惠蕾计划</p>
       <span class="ellipsis">实习生租房1470</span>
      </div>
    </li>
     <li class="rentInfo-list-li">
      <img src="./images/rentInfo2.png"/>
      <div class="rentInfo-li-div">
       <p>自如惠蕾计划</p>
       <span class="ellipsis">实习生租房1470</span>
      </div>
    </li>
     <li class="rentInfo-list-li">
      <img src="./images/rentInfo2.png"/>
      <div class="rentInfo-li-div">
       <p>自如惠蕾计划</p>
       <span class="ellipsis">实习生租房1470</span>
      </div>
    </li>
    </ul>
    </div>
  
   <!-- 通用模块2 -->
   <div class="zryj">
   <h3 class="zryj-title-h3">自如友家 <span>查看更多<i></i></span></h3>
   <p class="zryj-title-p">百万自如客的品质合租公寓</p>
   <ul class="zryj-ul">
   <li class="zryj-li">
   <img src="./images/zryj_01.png"/>
   <div >
   <p>石景山<b class="P-dot"></b>朝南<b class="P-dot"></b>独立卫生间</p>
   <span>￥3990/月</span>
    </div>
   </li>
   <li class="zryj-li">
   <img src="./images/zryj_01.png"/>
   <div>
   <p>石景山 <b class="P-dot"></b>朝南<b class="P-dot"></b> 独立卫生间</p>
   <span>￥3990/月</span>
   </div>
   </li>
   </ul>
   </div>


  <!-- 通用模块3 -->
  <div class="banner">
   <ul class="banner-ul">
   <li><img src="./images/banner1.png"/></li>
   <li><img src="./images/banner1.png"/></li>
   </ul>
   <ul class="banner-dot"><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul>
  </div>
  <!-- 通用模块4 -->
   <div class="zrkzz">
   <h3>自如客转租<span>查看更多<i></i></span></h3>
   <p class="zrkzz-title-p">传递你我的自如生活</p>
   <ul class="zrkzz-ul">
    <li class="zrkzz-li">
      <div class="zrkzz-profile">
      <img src="./images/leiyang.png"/> <span>雷扬</span>
       <p  >屋子有超大的阳台，差不多20平，因为工作原因转租出去，出门就有918路公交车</p>
      </div>
      <img class="zrkzz-img" src="./images/leiyang_1.png"/>
      <p class="zrkzz-des">顺义城<b class="P-dot"></b>裕龙一区3居室<b class="P-dot"></b>南卧</p>
      <p class="zrkzz-m">￥2160/月</p>
    </li>
      <li class="zrkzz-li">
      <div class="zrkzz-profile">
      <img src="./images/leiyang.png"/> <span>雷扬</span>
       <p  >屋子有超大的阳台，差不多20平，因为工作原因转租出去，出门就有918路公交车</p>
      </div>
      <img class="zrkzz-img" src="./images/leiyang_1.png"/>
      <p class="zrkzz-des">顺义城<b class="P-dot"></b>裕龙一区3居室<b class="P-dot"></b>南卧</p>
      <p class="zrkzz-m">￥2160/月</p>
    </li>
   </ul>
   
   </div>

    <Footer activeTapIndex="0"></Footer>
  </div>
</template>
<script>
import Footer from '../../components/Footer.vue';
import Header from '../../components/Header.vue';
export default {
  name: 'home',
  data () {
    return {
      msg: 'Home pages'
    }
  },
  components:{
        Footer,//子组件声明
        Header
    }
}
</script>

<!-- Add "scoped" attribute to limit less to this component only -->
<style lang="less" scoped>
    @import "../../style/mixin.less";
  .main{
    background-color:white;
    padding-bottom:120rem/@rootFontSize;
    .main-ad{
      position:relative;
      img{vertical-align:bottom;height:560rem/@rootFontSize;}
    }
    .main-ad-nav{
       height:97rem/@rootFontSize;
       display:flex;
     
       li{
          height:97rem/@rootFontSize;
          line-height:97rem/@rootFontSize;
         
          font-size:28rem/@rootFontSize;
          font-weight:bold;
           background-color:@comonColorWhite;
       }
       li:first-child{
         width:187rem/@rootFontSize;
          padding-left:42rem/@rootFontSize;
       }
       li:last-child{
         flex-grow:1;
          padding-left:57rem/@rootFontSize;
       }
       .rightLiGrayBg{
      background:url(./images/grayBar.png) no-repeat 0 0!important;
      background-size:contain;
      color:@fontGray;
    }
   
    }
     .main-ad-searchBtn{
      display:inline-block;
       width:127rem/@rootFontSize;
       height:127rem/@rootFontSize;
      background:url(./images/circleBtn.png) no-repeat -1rem/@rootFontSize -1rem/@rootFontSize ;
      background-size:contain;
      position:absolute;
       right:44rem/@rootFontSize;
       bottom:43rem/@rootFontSize;
       
    }

    .rentInfo{
       padding-top:20rem/@rootFontSize;
       padding-bottom:47rem/@rootFontSize;
       border-bottom:0.5rem/@rootFontSize solid @fontGray;
     h3{
       font-size:39rem/@rootFontSize;
       font-weight:bold;
       padding:22rem/@rootFontSize 39rem/@rootFontSize;
     }
     .rentInfo-hTip{
       font-size:24rem/@rootFontSize;
       color:@fontGray;
       padding-left:44rem/@rootFontSize;
     }
     .rentInfo-list{
       margin-top:47rem/@rootFontSize;
       padding-left:40rem/@rootFontSize;
       display:flex;
       overflow-x:auto;
       .rentInfo-list-li{
         margin:0.5rem 0 ;
         width:275rem/@rootFontSize;
         padding:25rem/@rootFontSize 15rem/@rootFontSize 0;
         background-color:@comonColorWhite;
         margin-right:16rem/@rootFontSize;
         margin-left: 0.1rem/@rootFontSize;
         box-shadow:0 0 20rem/@rootFontSize #ddd ;
         img{
           width:245rem/@rootFontSize;
           height:160rem/@rootFontSize;
         }
       }
     }
     .rentInfo-li-div{
       padding:30rem/@rootFontSize 0;
       text-align:center;
       p{
         font-size:26rem/@rootFontSize;
         margin-bottom:20rem/@rootFontSize;
       }
      span{
      font-size:22rem/@rootFontSize;
      color:@fontGray;
        
      }

     }

    }
    .zryj{
      padding-top:40rem/@rootFontSize;
      border-bottom:0.5rem/@rootFontSize solid #ddd;
      .zryj-title-h3{
        height:64rem/@rootFontSize;
        line-height:64rem/@rootFontSize;
        font-size:38rem/@rootFontSize;
        font-weight:bold;
        padding-left:44rem/@rootFontSize;
        span{
          float:right;
          font-size:30rem/@rootFontSize;
          font-weight:normal;
          color:rgb(194,194,194);
          padding-right:32rem/@rootFontSize;
          i{
          display:inline-block;
          width:28rem/@rootFontSize;
          height:36rem/@rootFontSize;
          padding-left:5rem/@rootFontSize;
          background:url(./images/rightArrow.png) no-repeat 5rem/@rootFontSize 6rem/@rootFontSize;
          background-size:100% 100%;
        }
        }
      }
       .zryj-title-p{
         padding:20rem/@rootFontSize 0 35rem/@rootFontSize   44rem/@rootFontSize ;
         
         font-size:26rem/@rootFontSize;
         color:@fontGray;
       }
       .zryj-ul{
         padding-left:40rem/@rootFontSize;
         display:flex;
         overflow-x:auto;
       }
       .zryj-li{
         margin-right:18rem/@rootFontSize;
         div{
           padding:30rem/@rootFontSize 0;
           p{font-size:28rem/@rootFontSize;
              margin-bottom:22rem/@rootFontSize;
           }
           span{
             font-size:28rem/@rootFontSize;
             font-weight:bold;
           }
         }
       }
    }
   .P-dot{
     display:inline-block;
     position:relative;
     bottom:0rem/@rootFontSize;
     left:0rem/@rootFontSize;
     width:5rem/@rootFontSize;
     height:5rem/@rootFontSize;
     margin:10rem/@rootFontSize;
     border-radius:5rem/@rootFontSize;
     background-color:black;
   }
  .banner{
    padding:40rem/@rootFontSize 0;
    border-bottom:0.5rem/@rootFontSize;
    position:relative;
    
  }
  .banner-ul{
    overflow-x:auto;
    display:flex;
    li{
      padding: 0 40rem/@rootFontSize;
    }
    
  }
  .banner-dot{
      position:absolute;
      bottom:72rem/@rootFontSize;
      width: 100%;
      text-align: center;
      li{
        display:inline-block;
        width:13rem/@rootFontSize;
        height:13rem/@rootFontSize;
        border-radius:13rem/@rootFontSize;
        border:2rem/@rootFontSize solid white;
        margin-left:16.7rem/@rootFontSize;
      }
    }

    .zrkzz{
     padding-top:40rem/@rootFontSize;
     padding-bottom:44rem/@rootFontSize;
      border-bottom:0.5rem/@rootFontSize solid #ddd;
      h3{
        height:64rem/@rootFontSize;
        line-height:64rem/@rootFontSize;
        font-size:38rem/@rootFontSize;
        font-weight:bold;
        padding-left:44rem/@rootFontSize;
        span{
          float:right;
          font-size:30rem/@rootFontSize;
          font-weight:normal;
          color:rgb(194,194,194);
          padding-right:32rem/@rootFontSize;
          i{
          display:inline-block;
          width:28rem/@rootFontSize;
          height:36rem/@rootFontSize;
          padding-left:5rem/@rootFontSize;
          background:url(./images/rightArrow.png) no-repeat 5rem/@rootFontSize 6rem/@rootFontSize;
          background-size:100% 100%;
        }
        }
      }
      .zrkzz-title-p{
        padding:20rem/@rootFontSize 0 35rem/@rootFontSize   44rem/@rootFontSize ;
         font-size:26rem/@rootFontSize;
         color:@fontGray;
      }
      .zrkzz-ul{
        overflow-x:auto;
        padding:0 37rem/@rootFontSize;
        display:flex;
      }
      .zrkzz-li{
        width:464rem/@rootFontSize;
        padding:27rem/@rootFontSize 23rem/@rootFontSize;
        box-shadow:0 0 20rem/@rootFontSize #ddd ;
        margin:5rem/@rootFontSize 20rem/@rootFontSize 5rem/@rootFontSize 0;
       
      }
      .zrkzz-profile{
        img{
          width:63rem/@rootFontSize;
          height:63rem/@rootFontSize;
          margin-right:20rem/@rootFontSize;
          vertical-align:middle;
        }
        span{
          display:inline-block;
          height:63rem/@rootFontSize;
          line-height:63rem/@rootFontSize;
          font-size:34rem/@rootFontSize;
          font-weight:bold;
        }
        p{
          margin-top:10rem/@rootFontSize;
          margin-bottom:23rem/@rootFontSize;
          font-size:25rem/@rootFontSize;
          // line-height:40rem/@rootFontSize;
          height:62rem/@rootFontSize;
          color:@fontGray;
          overflow : hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
   
        }
        
      }
      .zrkzz-img{
          width:416rem/@rootFontSize;
          height:280rem/@rootFontSize;
        }
        .zrkzz-des{
          font-size:28rem/@rootFontSize;
          color:@comonColorGraydark;
          margin:25rem/@rootFontSize 0 20rem/@rootFontSize 0;
          b{
            background-color:@fontGray;
          }
        }
        .zrkzz-m{
          font-size:28rem/@rootFontSize;
          font-weight:bold;
        }
    }

  }
</style>
