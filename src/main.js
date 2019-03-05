import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import app from './app.vue'

// 导入mint-ui 
import { Header, Swipe, SwipeItem} from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

// 导入MUI 样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
import './lib/mui/fonts/mui-icons-extra.ttf'
import router from './router.js'
const vm = new Vue({
    el: '#app',
    render: r => r(app),
    router
})