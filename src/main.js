import Vue from 'vue'
import App from './App.vue'
import {router} from '@/router/index.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// 引入工具文件
import '@/utils/tool.js'
Vue.use(VueAwesomeSwiper)

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app')
