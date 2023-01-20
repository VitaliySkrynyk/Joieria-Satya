import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/CollarsView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Collars',
    name: '../views/CollarsView.vue',
    component: HomeView
  },
  {
    path: '/Polseres',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PolseresView.vue')
  },
  {
    path: '/Anells',
    name: 'Anells',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AnellsView.vue')
  }
    
  
]

const router = new VueRouter({
  routes
})

export default router
