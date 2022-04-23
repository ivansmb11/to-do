import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'



//view imports
//ts-ignore
import todoRouter from '../modules/mainPage/router';
import authRouter from '../modules/authentication/router';
//

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    // beforeEnter: [ isAuthenticated ],
    ...todoRouter
  },
  {
    path: 'auth',
    ...authRouter
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router