import Vue from 'vue'
import App from './App.vue'
import VueTypedJs from 'vue-typed-js'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faInstagram, faLinkedinIn, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(
  faInstagram,
  faLinkedinIn,
  faGithub,
  faEnvelope,
  faTwitter
)
 
Vue.use(VueTypedJs);
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
