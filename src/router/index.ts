import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import authRouter from '../modules/auth/router';
import homeRouter from '../modules/home/router';
import isAuthGuard from '../modules/auth/router/authGuard';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/auth',
		...authRouter
	},
	{
		path: '',
		beforeEnter: [ isAuthGuard ],
		...homeRouter
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router
