import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'MainPage',
    component: () => import('@/modules/mainPage/layouts/MainPage.vue')
  },
//   {
//     path: '/:id',
//     name: 'PokemonInfoView',
//     component: PokemonInfoView
//   }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router