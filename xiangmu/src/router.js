import Vue from 'vue'
import Router from 'vue-router'
import test from './views/test.vue'
import hualang from './views/hualang.vue'
import about from './views/about.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
  {path:'/test',component:test},
  {path:'/hualang',component:hualang},
  {path:'/about',component:about}
  ]
})
