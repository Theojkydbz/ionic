import IonicVue from '@ionic/vue'
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import Vue from 'vue'
import App from './App.vue'
import router from '@/routes'

Vue.config.productionTip = false

Vue.use(IonicVue)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
