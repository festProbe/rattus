import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTrashCan, faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

library.add(faTrashCan, faPenToSquare, faPlus)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
