import { RouteComponent } from 'vue-router'

export default {
	name: 'home',
	component: (): Promise<RouteComponent> => import('../layouts/HomeLayout.vue')
}
