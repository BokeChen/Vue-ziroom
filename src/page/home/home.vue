<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '../../components/Footer.vue';
export default {
  name: 'home',
  data () {
    return {
      msg: 'Home pages'
    }
  },
  components:{
        Footer
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
