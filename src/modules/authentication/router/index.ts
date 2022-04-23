import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

//view imports
import AccessComponent from '@/components/views/log/AccessComponent.vue';
//

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'AccessComponent',
    component: AccessComponent
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