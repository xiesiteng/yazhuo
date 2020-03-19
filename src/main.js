import Vue from 'vue'
import App from './App.vue'
import {router} from '@/router/index.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// 引入工具文件
// hello
import '@/utils/tool.js'
Vue.use(VueAwesomeSwiper)

// 全局注册header
import headerAsideMenu from './components/asideMenu/headerAsideMenu.vue'
Vue.component('headerAsideMenu', headerAsideMenu)

// 全局注册footer
import tail from './components/tail/tail.vue'
Vue.component('tail', tail)

// 全局注册回到顶部组件
import backTop from './components/backTop/backTop.vue'
Vue.component('backTop', backTop) 

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app')
