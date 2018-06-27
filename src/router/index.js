import Vue from 'vue';
import Router from 'vue-router';
import home from '../page/home/home.vue';
Vue.use(Router);
//组件懒加载，require.ensure
const apartment = r => require.ensure([], () => r(require('../page/apartment/apartment.vue')), 'apartment');
const postStacks = r => require.ensure([], () => r(require('../page/postStacks/postStacks.vue')), 'postStacks');
const lifeService = r => require.ensure([], () => r(require('../page/lifeService/lifeService.vue')), 'lifeService');
const mine = r => require.ensure([], () => r(require('../page/mine/mine.vue')), 'mine');
const homeChild = r => require.ensure([], () => r(require('../page/home/children/homeChild.vue')), 'homeChild');

export default new Router({
  routes: [
    {
      path: '/home',
      name:"home",
      component: home,
    },
    {
      path: '/apartment',
      name:"apartment",
      component: apartment,
    },
    {
      path: '/postStacks',
      name:"postStacks",
      component: postStacks,
    },
    {
      path: '/mine',
      name:"mine",
      component: mine,
    },
    {
      path: '/lifeService',
      name:"lifeService",
      component: lifeService,
    },
    {
      path: '/homeChild',
      name:"homeChild",
      component: homeChild,
    },
    {
      path:'',
      redirect: '/home',
    }
  ]
})
