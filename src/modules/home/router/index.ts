import { RouteComponent } from 'vue-router'

export default {
	name: 'home',
	component: (): Promise<RouteComponent> => import('../views/HomeView.vue')
}
