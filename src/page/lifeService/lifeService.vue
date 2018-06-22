<template>
  <div class="lifeService">
    <h1>{{ msg }}</h1>
    <Footer activeTapIndex="3"></Footer>
  </div>
</template>
<script>
import Footer from '../../components/Footer.vue';
export default {
  name: 'lifeService',
  data () {
    return {
      msg: 'lifeService pages'
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
