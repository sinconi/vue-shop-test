import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import Dashboard from '@/components/Dashboard'
import Login from '@/components/pages/Login'
import Products from '@/components/pages/Products'



Vue.use(Router)

export default new Router({
  routes: [
    {
      //如果客人亂按
      path: '*',
      redirect: 'login'
    },
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld,
    //   //需要驗證
    //   meta: { requiresAuth: true },
    // },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin',
      name: 'Dashboard',
      component: Dashboard,
      
      children:[
        {
          path: 'products',
          name: 'Products',
          component: Products,
          //需要驗證
          meta: { requiresAuth: true },
        }
      ]
    }
  ]
})
