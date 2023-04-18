import { createStore } from 'vuex'
import { specificationsListsModule } from '@/store/specificationsListsModule'

export default createStore({
  modules: {
    specificationsLists: specificationsListsModule
  }
})
