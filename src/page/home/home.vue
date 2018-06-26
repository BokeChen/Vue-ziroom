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
    <CommonUl1 :commonMoudleTitle="renInfoTitle" :commonMoudleUl="renInfoUl"></CommonUl1>
    <!-- 通用模块2 -->
    <CommonUl2 :commonMoudleTitle="zryjTitle" :commonMoudleUl="zryjUl"></CommonUl2>
    <!-- 通用模块3 -->
    <CommonUl3 :imgList="bannerList" ></CommonUl3>
    <!-- 通用模块4 -->
    <CommonUl4 :commonMoudleTitle="zrkzzTitle" :commonMoudleUl="zrkzzUl" ></CommonUl4>
    <Footer activeTapIndex="0"></Footer>
  </div>
</template>
<script>
import Footer from '../../components/Footer.vue';
import Header from '../../components/Header.vue';
import CommonUl1 from '../../components/CommonUl1.vue';
import CommonUl2 from '../../components/CommonUl2.vue';
import CommonUl3 from '../../components/CommonUl3.vue';
import CommonUl4 from '../../components/CommonUl4.vue';
export default {
  name: 'home',
  data () {
    return {
      renInfoTitle:["租房情报局","带你发现居住的另一种选择"],
      renInfoUl: [{'img':"/static/images/rentInfo1.png","title":"都市租客图鉴","des":"助力毕业生找室友","link":""},{'img':"/static/images/rentInfo2.png","title":"自如惠蕾计划","des":"实习生租房1470","link":""}],
      zryjTitle:["自如友家","百万自如客的品质合租公寓"],
      zryjUl: [{'img':"/static/images/zryj_01.png","area":"石景山","direct":"朝南","mark":"独立卫生间","money":"3990","link":""},{'img':"/static/images/zryj_01.png","area":"石景山","direct":"朝南","mark":"独立卫生间","money":"3990","link":""}],
      bannerList:["/static/images/banner1.png","/static/images/banner2.png"],
      zrkzzTitle:["自如客转租","传递你我的自如生活"],
      zrkzzUl:[{"profile":"/static/images/circleBtn.png","name":"雷杨","des":"屋子有超大的阳台，差不多20平，因为工作原因转租出去，出门有918路公交车","img":"/static/images/leiyang_1.png","area":"顺义城","direct":"裕龙一区3居室","mark":"南卧","money":"2160","link":""},
      {"profile":"/static/images/circleBtn.png","name":"雷杨","des":"屋子有超大的阳台，差不多20平，因为工作原因转租出去，出门有918路公交车","img":"/static/images/leiyang_1.png","area":"顺义城","direct":"裕龙一区3居室","mark":"南卧","money":"2160","link":""}
      ]
    }
  },
  components:{
        Footer,//子组件声明
        Header,
        CommonUl1,
        CommonUl2,
        CommonUl3,
        CommonUl4
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
  }
</style>
