import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import { Field, Input } from 'buefy/dist/components'
import VueWorker from 'vue-worker'


Vue.config.productionTip = false
Vue.use(Buefy);
Vue.use(VueWorker)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
