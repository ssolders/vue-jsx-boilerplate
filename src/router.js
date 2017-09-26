
import VueRouter from 'vue-router'
import Vue from 'vue'
import Index from '~/views/Index'
import About from '~/views/About'

const routes = [
  { path: '/', name: 'index', component: Index },
  { path: '/about', name: 'about', component: About }
]

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition
  } else {
    const position = {}
    // new navigation.
    // scroll to anchor by returning the selector
    if (to.hash) {
      position.selector = to.hash
    } else {
      position.x = 0
      position.y = 0
    }
    return position
  }
}

Vue.use(VueRouter)
var router = new VueRouter({
  mode: 'history',
  scrollBehavior,
  routes,
  linkActiveClass: 'active'
})

export default router
