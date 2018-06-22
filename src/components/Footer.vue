<template>
  <div class="footer">
     <ul class="footer-ul">
      <li v-for="(item ,index) in links">
      
        <router-link v-bind:to="item" v-bind:class="(index==activeTapIndex)?('activeColor'+index):''">
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
   props: ["activeTapIndex"],//父组件的传值，告诉子组件要激活的选项
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
  @import '../style/mixin.less';//引进@rootFontSize等一些基本设定值
  .footer{
      height:120rem/@rootFontSize;
      width:100%;
      background-color:white;
     ul{
         display:flex;
         justify-content: space-between;
           p{color:@comonColorGray;}
      }

        //li 单独放出来了是为了缩减选择器的层级，推荐选择器的层级最好不大于3级
         li{
            padding-top:24rem/@rootFontSize;
            width:20%;
            text-align: center;
            .footer-Icon{
              display:inline-block;
              width:49rem/@rootFontSize;
              height:45rem/@rootFontSize;
              background:url(../assets/IconList1.png) no-repeat 0 0;
              background-size:@IconListWidth @IconListheight; //限制背景图的大小
            }
          }
         li:nth-child(1) .footer-Icon{
           background-position: 0 0;//雪碧图的取图方法
         }
         li:nth-child(2) .footer-Icon{
           background-position: -149rem/@rootFontSize 0;//雪碧图的取图方法
       
         }
         li:nth-child(3) .footer-Icon{
           background-position: -299rem/@rootFontSize 0;//雪碧图的取图方法
         }
         li:nth-child(4) .footer-Icon{
           background-position: -446rem/@rootFontSize 0;//雪碧图的取图方法
         }
         li:nth-child(5) .footer-Icon{
           background-position: -594rem/@rootFontSize 0;//雪碧图的取图方法
         }
     

     .activeColor0{
        p{color:@comonColorBlack;}//被激活的菜单，字体变黑显示
        .footer-Icon{
           background-position: 5rem/@rootFontSize -70rem/@rootFontSize !important;//雪碧图的取图方法
        }}
         .activeColor1{
        p{color:@comonColorBlack;}//被激活的菜单，字体变黑显示
        .footer-Icon{
           background-position: -149rem/@rootFontSize -70rem/@rootFontSize !important;//雪碧图的取图方法
        }}
         .activeColor2{
        p{color:@comonColorBlack;}//被激活的菜单，字体变黑显示
        .footer-Icon{
           background-position: -299rem/@rootFontSize -70rem/@rootFontSize !important;//雪碧图的取图方法
        }}
         .activeColor3{
        p{color:@comonColorBlack;}//被激活的菜单，字体变黑显示
        .footer-Icon{
           background-position: -446rem/@rootFontSize -74rem/@rootFontSize !important;//雪碧图的取图方法
        }}
         .activeColor4{
        p{color:@comonColorBlack;}//被激活的菜单，字体变黑显示
        .footer-Icon{
           background-position: -594rem/@rootFontSize -74rem/@rootFontSize !important;//雪碧图的取图方法
        }}
  }
</style>
