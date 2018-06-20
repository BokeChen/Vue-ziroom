import Vue from 'vue';
import Router from 'vue-router';
import App from '../App';
import home from '../page/home/home.vue';
Vue.use(Router)
//组件懒加载，require.ensure
//const home = r => require.ensure([], () => r(require('../page/home/home.vue')), 'home');
export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      children:[
        {
          path: '', //空路径，直接调整到home页面。如果有登陆页面的话，这里需要先跳转到登陆页面
          redirect: '/home'
      },{
        path: '/home',
        name:"home",
        component: home
    }
      ]
    }
  ]
})
