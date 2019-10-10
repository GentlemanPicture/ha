import Vue from 'vue'
import Router from 'vue-router'
import shop from '../components/Shop_w'

Vue.use(Router)

export default new Router({
  routes: [
    {
path:"/shop",component:shop
    }
  ]
})
