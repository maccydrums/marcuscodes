import Vue from 'vue'
import App from './App.vue'
import VueTypedJs from 'vue-typed-js'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faInstagram, faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';  
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import VueLazyload from 'vue-lazyload';
import VueScrollTo from 'vue-scrollto';

import VueAnalytics from 'vue-analytics'

 
library.add(
  faInstagram,
  faLinkedin,
  faGithub,
  faEnvelope,
  faTwitter
)

Vue.use(VueLazyload);
Vue.use(VueTypedJs);
Vue.use(VueAnalytics, {
  id: 'UA-153117821-1'
})
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.component('zap-slideout', {
  template: '#zap-slideout',
  data: () => ({
    openerText: 'Open',
    isOpen: false,
    menu: [ 'Home', 'Work', 'Contact' ]
  }),
  methods: {
    open() {
      this.openerText = 'Close';
      this.isOpen = true;
    },
    close() {
      this.openerText = 'Open';
      this.isOpen = false;
    },
    toggle() {
      if (this.isOpen) {
        this.close();
      } else {
        this.open();
      }
    }
  }
});

Vue.use(VueScrollTo, {
  container: "body",
  duration: 600,
  easing: "ease-in-out",
  offset: -70,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
