<template>
   <!-- 通用模块1 -->
    <div class="rentInfo">
     <h3>{{commonMoudleTitle[0]}}</h3>
     <p class="rentInfo-hTip">{{commonMoudleTitle[1]}}</p>
    
    <ul class="rentInfo-list">
    <li class="rentInfo-list-li" v-for="item in commonMoudleUl">
      <img :src="item.img"/>
      <div class="rentInfo-li-div">
       <p>{{item.title}}</p>
       <span class="ellipsis">{{item.des}}</span>
      </div>
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
    }
    } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
 @import "../style/mixin.less";
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
</style>
