//Importar la librería (es una librería, porque no tiene extensión)
import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'
import Chart from 'chart.js'
import Chartick from 'vue-chartkick'
import { VueSpinners } from '@saeris/vue-spinners'

//Importando el router para utilizar la funcionalidad SPA
import router from '@/router'
import { dollarFilter, percentFilter } from '@/filters'

Vue.use(VueSpinners)
Vue.use(Chartick.use(Chart))
Vue.filter('dollar', dollarFilter)
Vue.filter('percent', percentFilter)
Vue.config.productionTip = false

//La instancia de Vue
new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
