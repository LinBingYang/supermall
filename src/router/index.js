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
import glxt from 'views/category/childComps/glxt'
import qhgb from 'views/category/childComps/qhgb'
import web from 'views/category/childComps/web'
import dmap from 'views/category/3DMap'
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
  },
  {
    path: '/dmap',
   component: dmap,
  },
  {
    path: '/glxt',
   component: glxt,
  },
  {
    path: '/qhgb',
   component: qhgb,
  },
  {
    path: '/web',
   component: web,
  }
  ],
mode:'history',
linkActiveClass:"active"
})
// .beforeEach((to, from, next) => { 
//   document.title=to.meta.title
//   next()
// })
