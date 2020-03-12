//Importar la librería (es una librería, porque no tiene extensión)
import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";

//Importando el router para utilizar la funcionalidad SPA
import router from '@/router'

Vue.config.productionTip = false;

//La instancia de Vue
new Vue({
  router: router,
  render: h => h(App)
}).$mount("#app");
