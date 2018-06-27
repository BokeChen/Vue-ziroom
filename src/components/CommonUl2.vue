<template>
   <!-- 通用模块2 -->
     <div class="zryj">
   <h3 class="zryj-title-h3">{{commonMoudleTitle[0]}} <span>查看更多<i></i></span></h3>
   <p class="zryj-title-p">{{commonMoudleTitle[1]}}</p>
   <ul class="zryj-ul">
   <li class="zryj-li" v-for="item in commonMoudleUl">
   <router-link to="/homeChild">
   <img :src="item.img"/>
   <div >
   <p>{{item.area}}<b class="P-dot"></b>{{item.direct}}<b class="P-dot"></b>{{item.mark}}</p>
   <span>￥{{item.money}}/月</span>
    </div>
    </router-link>
   </li>
   <li class="zryj-li last-li" >
   <p></p>
   </li>
   </ul>
   </div>
</template>

<script>
export default {
  name: 'CommonUl1',
  props: ["commonMoudleTitle","commonMoudleUl"],//父组件的传值，告诉子组件要激活的选项
  data () {
    return {
      links: ['/home','/apartment','/postStacks','lifeService','/mine'],//导航的路由
      linkContent: ['合租/整租','自如寓','民宿/驿栈','生活服务','我的'],//导航栏文字说明
    }
    } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
 @import "../style/mixin.less";
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
          background:url(../page/home/images/rightArrow.png) no-repeat 5rem/@rootFontSize 6rem/@rootFontSize;
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
       .last-li{
         padding-left:11rem/@rootFontSize;
         padding-right:11rem/@rootFontSize;
         
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
</style>
