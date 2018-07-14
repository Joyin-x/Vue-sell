// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import goods from './components/goods/goods.vue'
import ratings from './components/ratings/ratings.vue'
import seller from './components/seller/seller.vue'


Vue.use(VueRouter)
Vue.use(VueResource)
/*：2.0已经没有map这个方法了，只有1.0兼容该方法。下面是1.0的方法
let router=new VueRouter();
let app=Vue.extend(App);
router.map({
  '/goods':{
    component:goods
  },
  '/seller':{
    component:seller
  },
  '/ratings':{
    component:ratings
  }

});
router.start(app,'#app')*/
const routes=[
  {path:'/goods',component:goods},
  {path:'/ratings',component:ratings},
  {path:'/seller',component:seller}
];
const router=new VueRouter({
  routes
})
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
router.push('/goods')

