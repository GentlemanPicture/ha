import Vue from 'vue'
import Router from 'vue-router'
import shop from '../components/Shop_w'
import shopCart from '../components/Shop_y'
import phone from '../components/Pone_w'
Vue.use(Router)

export default new Router({
  routes: [
    {path:"/shop",component:shop},
    {path:"/shopcart",component: shopCart},
    {path:"/phone",component: phone}
  ]
})
