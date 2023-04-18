import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTrashCan, faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faPlus, faSortDown } from '@fortawesome/free-solid-svg-icons'
import router from '@/router/router'
import store from '@/store/index'
import directives from '@/directives'

library.add(faTrashCan, faPenToSquare, faPlus, faSortDown)

const app = createApp(App)

directives.forEach((directive) => {
  app.directive(directive.name, directive)
})

app
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(router)
  .use(store)
  .mount('#app')
