<template>
   <!-- 通用模块4 -->
     <div class="zrkzz">
   <h3>自如客转租<span>查看更多<i></i></span></h3>
   <p class="zrkzz-title-p">传递你我的自如生活</p>
   <ul class="zrkzz-ul">
    <li class="zrkzz-li">
      <div class="zrkzz-profile">
      <img src="../page/home/images/leiyang.png"/> <span>雷扬</span>
       <p  >屋子有超大的阳台，差不多20平，因为工作原因转租出去，出门就有918路公交车</p>
      </div>
      <img class="zrkzz-img" src="../page/home/images/leiyang_1.png"/>
      <p class="zrkzz-des">顺义城<b class="P-dot"></b>裕龙一区3居室<b class="P-dot"></b>南卧</p>
      <p class="zrkzz-m">￥2160/月</p>
    </li>
      <li class="zrkzz-li">
      <div class="zrkzz-profile">
      <img src="../page/home/images/leiyang.png"/> <span>雷扬</span>
       <p  >屋子有超大的阳台，差不多20平，因为工作原因转租出去，出门就有918路公交车</p>
      </div>
      <img class="zrkzz-img" src="../page/home/images/leiyang_1.png"/>
      <p class="zrkzz-des">顺义城<b class="P-dot"></b>裕龙一区3居室<b class="P-dot"></b>南卧</p>
      <p class="zrkzz-m">￥2160/月</p>
    </li>
   </ul>
   </div>

</template>

<script>
export default {
  name: 'CommonUl4',
   props: [],//父组件的传值，告诉子组件要激活的选项
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
          background:url(../page/home/images/rightArrow.png) no-repeat 5rem/@rootFontSize 6rem/@rootFontSize;
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
</style>
