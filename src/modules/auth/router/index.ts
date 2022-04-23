import { RouteComponent } from 'vue-router'

export default {
	name: 'auth',
	component: (): Promise<RouteComponent> => import('../layouts/AuthLayout.vue'),
	children: [
		{
			path: '',
			name: 'log-in',
			component: (): Promise<RouteComponent> => import('../views/LogInView.vue')
		},
		{
			path: 'sign-up',
			name: 'sign-up',
			component: (): Promise<RouteComponent> => import('../views/SignUpView.vue')
		}
	]
}
