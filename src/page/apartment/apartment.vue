<template>
  <div class="apartment">
    <h1>{{ msg }}</h1>
    <Footer activeTapIndex="1"></Footer>
  </div>
</template>
<script>
import Footer from '../../components/Footer.vue';
export default {
  name: 'apartment',
  data () {
    return {
      msg: 'apartment pages'
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
