import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Preload from './views/Preload.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "preload",
      component: Preload
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    }
  ]
})
