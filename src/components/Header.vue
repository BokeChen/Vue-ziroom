<template>
  <header class="header">
     <p v-if="bannerScrollTop<50">
      <img class="header-logo" v-bind:src="require('../assets/ziroomlogo.png')"/>
      <span class="header-province">{{province}}</span>
     </p>
     <p v-else>
     <i class="header-serchIcon"></i>
      <input class="header-searchInp" type="text"  />
     </p>
     
      <span class="header-msgTip"></span>
  </header>
</template>

<script>
export default {
  name: 'Header',
   props: ["bannerScrollTop","searchInputShow","province"],//父组件的传值，告诉子组件要激活的选项
  data () {
    return {
   
    }
    } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import '../style/mixin.less';//引进@rootFontSize等一些基本设定值
  .header{
    width:100%;
    height:76rem/@rootFontSize;
    line-height:70rem/@rootFontSize;
    background-color:@comonColorWhite;
    position:relative;
    p{height:100%;line-height:76rem/@rootFontSize;}
    .header-logo{
     padding-left:28rem/@rootFontSize;
     padding-right:30rem/@rootFontSize;
     padding-top:19rem/@rootFontSize;
    }
    .header-province{
      font-size:24rem/@rootFontSize;
      padding-right:24rem/@rootFontSize;
      
      background:url(../assets/IconList1.png) no-repeat -43rem/@rootFontSize -138rem/@rootFontSize;
      background-size:@IconListWidth @IconListheight;
    }
    .header-msgTip{
      position:absolute;
      top:19rem/@rootFontSize;
      right:26rem/@rootFontSize;
      width:38rem/@rootFontSize;
      height:38rem/@rootFontSize;
      background:url(../assets/IconList1.png) no-repeat 0rem/@rootFontSize -139rem/@rootFontSize;
      background-size:@IconListWidth @IconListheight;

    }
    .header-searchInp{
      width:631rem/@rootFontSize;
      height:61rem/@rootFontSize;
      border-radius:63rem/@rootFontSize;
      font-size:28rem/@rootFontSize;
      border:none;
      outline:none;
      background-color:@comonColorGray;
      margin-left:29rem/@rootFontSize;
      padding-left:70rem/@rootFontSize;
      padding-right:30rem/@rootFontSize;
    }
    .header-serchIcon{
      position:absolute;
      top:23rem/@rootFontSize;
      left:54rem/@rootFontSize;
      width:32rem/@rootFontSize;
      height:32rem/@rootFontSize;
      background:url(../assets/IconList1.png) no-repeat -156rem/@rootFontSize -146rem/@rootFontSize;
      background-size:@IconListWidth @IconListheight;

    }
  }
</style>
