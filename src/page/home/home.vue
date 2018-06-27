<template>
  <div class="main"  v-on:touchmove="touchmoveHandle" v-on:touchend="touchendHandle">
  <Header :bannerScrollTop="bannerScrollTop" searchInputShow="1" province="北京"></Header>
    <div class="main-ad">
    <img src="./images/mainAd1.png" alt="首页宣传海报"/>
      <ul class="main-ad-nav">
      <li > 我要租房</li>
       <li class="rightLiGrayBg">房屋委托</li>
      </ul>
      <router-link to="/homeChild">
      <button class="main-ad-searchBtn" v-bind:style="{opacity:opacity,bottom:searchBtnToBtmDistance}"></button>
      </router-link>
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
       let rootFontSize=10*document.documentElement.clientWidth/320;//获取跟字体的大小
       let searchBtnToBtmDistance = 43/rootFontSize+"rem";//设定搜索按钮bottom的初始值
    return {
      //子组件的数据
      //租房情报局 模块的数据
      renInfoTitle:["租房情报局","带你发现居住的另一种选择"],
      renInfoUl: [{'img':"/static/images/rentInfo1.png","title":"都市租客图鉴","des":"助力毕业生找室友","link":""},
      {'img':"/static/images/rentInfo2.png","title":"自如惠蕾计划","des":"实习生租房1470","link":""},
      {'img':"/static/images/rentInfo2.png","title":"自如惠蕾计划","des":"实习生租房1470","link":""},
      {'img':"/static/images/rentInfo2.png","title":"自如惠蕾计划","des":"实习生租房1470","link":""},
      ],
      //自如友家 模块的数据
      zryjTitle:["自如友家","百万自如客的品质合租公寓"],
      zryjUl: [{'img':"/static/images/zryj_01.png","area":"石景山","direct":"朝南","mark":"独立卫生间","money":"3990","link":""},
      {'img':"/static/images/zryj_01.png","area":"石景山","direct":"朝南","mark":"独立卫生间","money":"3990","link":""},
      {'img':"/static/images/zryj_01.png","area":"石景山","direct":"朝南","mark":"独立卫生间","money":"3990","link":""}
      ],
      //banner模块的 图片数据
      bannerList:["/static/images/banner1.png","/static/images/banner2.png"],
      //自如客转租 模块的数据
      zrkzzTitle:["自如客转租","传递你我的自如生活"],
      zrkzzUl:[{"profile":"/static/images/circleBtn.png","name":"雷杨","des":"屋子有超大的阳台，差不多20平，因为工作原因转租出去，出门有918路公交车","img":"/static/images/leiyang_1.png","area":"顺义城","direct":"裕龙一区3居室","mark":"南卧","money":"2160","link":""},
      {"profile":"/static/images/circleBtn.png","name":"雷杨","des":"屋子有超大的阳台，差不多20平，因为工作原因转租出去，出门有918路公交车","img":"/static/images/leiyang_1.png","area":"顺义城","direct":"裕龙一区3居室","mark":"南卧","money":"2160","link":""}
      ],
      opacity:1,//设定搜索按钮在页面滚动距离到200 的距离完全透明
      searchBtnToBtmDistance:searchBtnToBtmDistance,//设置收索按钮距离底部的高度
      bannerScrollTop:0//页面滚动到一定距离，header开始显示搜索框
    }
    
  },
  created:function(){
     
     
  },
  methods:{
    //监控首页的滑动事件，然后处理搜索按钮的透明度和header的显示内容
    touchmoveHandle:function(){
       //变透明
       var body = document.getElementsByTagName ("body");
       let opacity =1-(body[0].scrollTop/200);
       this.opacity=opacity<0?0:opacity>1?1:opacity;
       //位置上移
       //43rem/@rootFontSize
       let rootFontSize=10*document.documentElement.clientWidth/320;
       let searchBtnToBtmDistance = (body[0].scrollTop*1.1 +43) /rootFontSize +"rem";
       this.searchBtnToBtmDistance =searchBtnToBtmDistance;
       this.bannerScrollTop= body[0].scrollTop<0?0:body[0].scrollTop;
    },
    //辅助监控滑动的最后的位置
    touchendHandle:function(){
       var body = document.getElementsByTagName ("body");
       let opacity =1-(body[0].scrollTop/200);
       this.opacity=opacity<0?0:opacity>1?1:opacity;
       let rootFontSize=10*document.documentElement.clientWidth/320;//获取跟字体的大小
       let diff=(body[0].scrollTop*1.1)<0?0:(body[0].scrollTop*1.1);
       let searchBtnToBtmDistance = (diff +43) /rootFontSize +"rem";
       this.searchBtnToBtmDistance =searchBtnToBtmDistance;
       this.bannerScrollTop= body[0].scrollTop<0?0:body[0].scrollTop;
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
       width:129rem/@rootFontSize;
       height:129rem/@rootFontSize;
      background:url(./images/circleBtn.png) no-repeat 0rem/@rootFontSize 0rem/@rootFontSize ;
      background-size:100% 100%;
      position:absolute;
       right:44rem/@rootFontSize;
       bottom:43rem/@rootFontSize;
    }
  }

</style>
