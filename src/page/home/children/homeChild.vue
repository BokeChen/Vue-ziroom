<template>
  <div class="homeChild">
    <h1>{{ msg }}</h1>
    
  </div>
</template>
<script>
import Footer from '../../../components/Footer.vue';
export default {
  name: 'homeChild',
  data () {
    return {
      msg: '子页面 '
    }
  },
  components:{
        Footer,//子组件声明
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
