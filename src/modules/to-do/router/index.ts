import { RouteComponent } from 'vue-router'

export default {
	name: 'todo',
	component: (): Promise<RouteComponent> => import('../layouts/MainPage.vue'),
	children: [
		
	]
}
