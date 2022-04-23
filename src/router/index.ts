import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import authRouter from '../modules/auth/router'

const routes: Array<RouteRecordRaw> = [
	{
		path: '',
		...authRouter
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router
