//Acá se especifican todas las rutas que tendrá la SPA
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'
import Error from '@/views/Error'

//Nos permite instalar plugins que tiene la librería
Vue.use(Router)

export default new Router({
  //Configurar las rutas
  mode: 'history', //Usar el history mode de HTML
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '*',
      name: 'Error',
      component: Error
    }
  ]
})
