import VueRouter from 'vue-router'
import HomeContainer from './components/tabbar/Homecontainer.vue'
import MemberContainer from './components/tabbar/Membercontainer.vue'
import ShopCarContainer from './components/tabbar/Shopcarcontainer.vue'
import SearchContainer from './components/tabbar/Searchcontainer.vue'

const router = new VueRouter({
	routes: [{
			path: '/',
			redirect: '/home'
		},
		{
			path: '/home',
			component: HomeContainer
		},
		{
			path: '/member',
			component: MemberContainer
		},
		{
			path: '/shopcar',
			component: ShopCarContainer
		},
		{
			path: '/search',
			component: SearchContainer
		},
	],
	linkActiveClass: ' mui-active' //设置路由高亮类名
})

export default router