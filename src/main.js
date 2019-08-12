import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
import VueTouch from 'vue-touch'
import './assets/reset.css'
import './assets/iconfont/iconfont.css'


Vue.use(VueTouch, { name: 'v-touch' })
    // Vue.use(ElementUI);
VueTouch.config.swipe = {
    threshold: 10 //手指左右滑动距离
}
Vue.config.productionTip = false
Vue.use(iView);
/* eslint-disable no-new */

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})