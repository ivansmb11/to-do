import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import authRouter from '../modules/auth/router'
import todoRouter from '../modules/to-do/router'

const routes: Array<RouteRecordRaw> = [
	{
		path: '',
		...authRouter
	},
	{
		path: '/todo',
		...todoRouter
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router
