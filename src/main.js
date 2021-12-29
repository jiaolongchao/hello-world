import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Notice from '@/components/Notice.vue';
Vue.use(Notice)
Vue.prototype.$notice = Notice;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
