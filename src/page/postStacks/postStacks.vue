<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Footer activeTapIndex="2"></Footer>
  </div>
</template>
<script>
import Footer from '../../components/Footer.vue';
export default {
  name: 'postStacks',
  data () {
    return {
      msg: 'postStacks pages'
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
