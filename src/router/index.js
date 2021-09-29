import Vue from 'vue'
import Router from 'vue-router'

// const mainhome = () => import('views/home/home')

import mainhome from 'views/home/home'
import maincart from 'views/cart/cart'
import maincategory from 'views/category/category'
import mainprofile from 'views/profield/profield'
import Detail from 'views/detail/Detail'
import newbeasier from 'views/category/newbeasier'
import newamap from 'views/category/newamap'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/mainhome'//重定向，默认展示
  },
  {
    path: '/mainhome',
   component: mainhome,
  },
  {
    path: '/maincategory',
   component: maincategory,
  },{
    path: '/maincart',
   component: maincart,
  },{
    path: '/mainprofile',
   component: mainprofile,
  },{
    path: '/detail/:id',
   component: Detail,
  },
  {
    path: '/newbeasier',
   component: newbeasier,
  },
  {
    path: '/newamap',
   component: newamap,
  }
  ],
mode:'history',
linkActiveClass:"active"
})
// .beforeEach((to, from, next) => { 
//   document.title=to.meta.title
//   next()
// })
