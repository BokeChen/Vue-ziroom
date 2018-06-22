<template>
  <div class="mine">
    <h1>{{ msg }}</h1>
    <Footer activeTapIndex="4"></Footer>
  </div>
</template>
<script>
import Footer from '../../components/Footer.vue';
export default {
  name: 'mine',
  data () {
    return {
      msg: 'mine pages'
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
