import Vue from 'vue'
import App from './App.vue'
import {router} from '@/router/index.js'
// import VueAwesomeSwiper from 'vue-awesome-swiper'
import api from '@/axios/api'
import 'swiper/dist/css/swiper.css'
// 引入工具文件
import '@/utils/tool.js'
// 按需引入ant组件
import 'ant-design-vue/dist/antd.css'
import { Message } from 'ant-design-vue';
Vue.use(Message);
Vue.prototype.$message = Message
// Vue.use(VueAwesomeSwiper)
Vue.prototype.$api = api; // 将api挂载到vue的原型上

// 全局注册header
import headerAsideMenu from './components/asideMenu/headerAsideMenu.vue'
Vue.component('headerAsideMenu', headerAsideMenu)

// 全局注册footer
import tail from './components/tail/tail.vue'
Vue.component('tail', tail)

// 全局注册回到顶部组件
import backTop from './components/backTop/backTop.vue'
Vue.component('backTop', backTop) 

import partTitle from './components/partTitle/partTitle.vue'
Vue.component('partTitle', partTitle) 

const base = 'http://182.148.48.236:54321/source/images/'
// const base = 'http://huangqinchao.host3v.vip/yazhuo/'
Vue.prototype.base = base
console.log(base)

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app')
