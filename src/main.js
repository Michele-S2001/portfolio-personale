import { createApp } from 'vue'
import { router } from './router'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faArrowTurnDown, faBars, faX } from '@fortawesome/free-solid-svg-icons'

library.add(faGithub, faLinkedin, faEnvelope, faInstagram, faArrowTurnDown, faBars, faX)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
