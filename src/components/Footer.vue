<template>
  <div class="footer">
     <ul>
      <li v-for="item in links">
        {{item}}
      </li>
     </ul>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      links: ['/home','/apartment','/postStacks','lifeService','/main']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import '../style/mixin.less';
  .footer{
      height:120rem/@rootFontSize;
  }
</style>
