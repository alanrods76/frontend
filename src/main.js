import Vue from 'vue'
import App from './App.vue'
import {router} from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'


const base =axios.create({
  // baseURL : 'https://glacial-everglades-74306.herokuapp.com'
  baseURL : 'http://localhost:3000/'
})

Vue.prototype.peticion = base;


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
