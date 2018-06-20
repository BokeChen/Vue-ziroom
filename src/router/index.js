import Vue from 'vue';
import Router from 'vue-router';
import home from '../page/home/home.vue';
Vue.use(Router)
//组件懒加载，require.ensure
//const home = r => require.ensure([], () => r(require('../page/home/home.vue')), 'home');
export default new Router({
  routes: [
    {
      path: '/',
      name:"home",
      component: home,
    },
    {
      path:'',
      redirect: '/home',
    }
  ]
})
