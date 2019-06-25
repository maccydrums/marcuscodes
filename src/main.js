import Vue from 'vue'
import App from './App.vue'
import VueTypedJs from 'vue-typed-js'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faInstagram, faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';  
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import VueLazyload from 'vue-lazyload'
 
library.add(
  faInstagram,
  faLinkedin,
  faGithub,
  faEnvelope,
  faTwitter
)

Vue.use(VueLazyload)
Vue.use(VueTypedJs);
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
