<template>
  <div class="main">
  <Header bannerScrollTop="0" searchInputShow="1" province="北京"></Header>
    <div>
    <img src="" alt="首页宣传海报"/>
      <ul>
      <li> 我要租房</li>
       <li>房屋委托</li>
      </ul>
      <button></button>
    </div>
    <div>
     <h4>租房情报局</h4>
     <p>带你发现居住的另一种选择</p>
    <ul>
    <li>
      <img/>
      <div>
       <p>都市租客图鉴</p>
       <span>助力毕业生找室友</span>
      </div>
    </li>
     <li>
      <img/>
      <div>
       <p>自如惠蕾计划</p>
       <span>实习生租房1470</span>
      </div>
    </li>
    </ul>
    </div>
  

   <div>
   <h3>自如友家 <span>查看更多</span></h3>
   <p>百万自如客的品质合租公寓</p>
   <ul>
   <img/>
   <span>石景山<b></b> 朝南<b></b>独立卫生间</span>
   <p>￥3990/月</p>
   </ul>
   </div>
  <div>
   <ul>
   <li><img/></li>
   </ul>
   <ul><li></li></ul>
  </div>

   <div>
   <h3>自如客转租<span>查看更多</span></h3>
   <span>传递你我的自如生活</span>
   <ul>
    <li>
      <div>
      <img/> <span></span>
       <p>屋子有超大的阳台，差不多20平</p>
      </div>
      <img/>
      <p></p>
      <p></p>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
