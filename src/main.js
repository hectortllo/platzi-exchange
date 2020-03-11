//Importar la librería (es una librería, porque no tiene extensión)
import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";

Vue.config.productionTip = false;

//La instancia de Vue
new Vue({
  render: h => h(App)
}).$mount("#app");
