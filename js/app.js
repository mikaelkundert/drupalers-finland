import Vue from 'vue'
import Vuetify from 'vuetify'
import App from '../components/Company.vue'

Vue.use(Vuetify)

new Vue({
  el: '#app',
  render: h => h(App)
})
