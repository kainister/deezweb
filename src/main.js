import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter) // On enregistre le plugin dans Vue

import Home from '@/components/Home.vue'
import Search from '@/components/Search.vue'
import Fav from '@/components/Fav.vue'

const router = new VueRouter({
  routes: [
    // Configuration des routes de l'application
    { name: 'home', path: '/', component: Home },
    { name: 'search', path: '/search', component: Search },
    { name: 'fav', path: '/fav', component: Fav }
  ]
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
