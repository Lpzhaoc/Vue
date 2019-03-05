import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import app from './app.vue'

// 导入mint-ui 
import { Header } from 'mint-ui'
Vue.component(Header.name, Header)

// 导入MUI 样式
import './lib/mui/css/mui.css'
import router from './router.js'
const vm = new Vue({
    el: '#app',
    render: r => r(app),
    router
})