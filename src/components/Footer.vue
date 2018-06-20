<template>
  <div class="footer">
     <ul class="footer-ul">
      <li v-for="(item ,index) in links">
        <router-link v-bind:to="item" v-bind:class="{activeColor1:activeTapIndex}">
         <i class="footer-Icon"></i>
         <p> {{linkContent[index]}}</p>
        </router-link>
      </li>
     </ul>
  </div>
</template>

<script>
export default {
  name: 'Footer',
   props: ["activeTapIndex"],
  data () {
    return {
      links: ['/home','/apartment','/postStacks','lifeService','/main'],
      linkContent: ['合租/整租','自如寓','民宿/驿栈','生活服务','我的']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import '../style/mixin.less';
  .footer{
      height:120rem/@rootFontSize;
      width:100%;
      background-color:white;
     ul{
         display:flex;
         justify-content: space-between;
         li{
            padding-top:24rem/@rootFontSize;
            width:20%;
            text-align: center;
            
            .footer-Icon{
              display:inline-block;
              width:49rem/@rootFontSize;
              height:45rem/@rootFontSize;
              background:url(../assets/IconList1.png) no-repeat 0 0;
              background-size:736rem/@rootFontSize 518rem/@rootFontSize;
            }
            p{color:@comonColorGray;}
         }
         li:nth-child(1) .footer-Icon{
           background-position: 0 0;
         }
         li:nth-child(2) .footer-Icon{
           background-position: -149rem/@rootFontSize 0;
       
         }
         li:nth-child(3) .footer-Icon{
           background-position: -299rem/@rootFontSize 0;
         }
         li:nth-child(4) .footer-Icon{
           background-position: -446rem/@rootFontSize 0;
         }
         li:nth-child(5) .footer-Icon{
           background-position: -594rem/@rootFontSize 0;
         }
     }

     .activeColor1{
        p{color:@comonColorblack;}
     }
     .activeColor2{
        p{color:@comonColorblack;}
     }
     .activeColor3{
        p{color:@comonColorblack;}
     }
     .activeColor4{
        p{color:@comonColorblack;}
     }
     .activeColor5{
        p{color:@comonColorblack;}
     }
  }
</style>
