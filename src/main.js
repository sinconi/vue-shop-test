// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App'
import router from './router'

Vue.config.productionTip = false
//調用
Vue.use(VueAxios, axios)

axios.defaults.withCredentials = true; 

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});

router.beforeEach((to,from,next) => {
  console.log('to',to , 'from', from , 'next', next);
  
  if(to.meta.requiresAuth){
    const api = `${process.env.APIPATH}/api/user/check`;
    //this.$http 只能在vue的元件內使用
    axios.post(api).then((response) => {
    console.log(response.data);
      if(response.data.success){
        next();
      }else{
        next({
          path:'/login'
        })
      }
    })
  }else{
    next();

  }
})
