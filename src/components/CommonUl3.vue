<template>
   <!-- 通用模块3 -->
  <div class="banner">
   <ul class="banner-ul">
   
   <li class="banner-li" v-for="item in imgList ">
   <router-link to="/homeChild">
   <img :src="item"/>
    </router-link>
   </li>
  
   </ul>
   <ul class="banner-dot"><li v-for="item in imgList"></li></ul>
  </div>
</template>

<script>
export default {
  name: 'CommonUl3',
   props: ["imgList"],//父组件的传值，告诉子组件要激活的选项
  data () {
    return {
   
    }
    } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
 @import "../style/mixin.less";
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
    .banner-li{
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
</style>
