import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
// import store from './vuex/store'
import router from './router/router'
import ymapPlugin from 'vue-yandex-maps';

Vue.use(ymapPlugin)
Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  // store
}).$mount('#app')

// const settings = {
//   apiKey: '',
//   lang: 'ru_RU',
//   coordorder: 'latlong',
//   version: '2.1'
// }
