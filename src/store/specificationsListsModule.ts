import { SpecificationsList, SpecificationsListsState } from '@/interfaces/specificationsListsModules'
import axios from 'axios'
import { Module } from 'vuex'

export const specificationsListsModule: Module<SpecificationsListsState, any> = {
  state: () => ({
    lists: []
  }),
  getters: {

  },
  mutations: {
    setLists (state, lists: SpecificationsList[]) {
      state.lists = lists
    }
    // createSpecification (state, specification) {
    //   state.lists.forEach((list) => {
    //     if (list.id === listId) {
    //       list.specifications.push(specification)
    //     }
    //   })
    // },
    // editSpecification (listId, specification) {
    //   this.lists.forEach((list) => {
    //     if (list.id === listId) {
    //       list.specifications.forEach((specif) => {
    //         if (specif.id === specification.id) {
    //           specif.text = specification.text
    //         }
    //       })
    //     }
    //   })
    // },
    // removeSpecification (listId, specification) {
    //   this.lists.forEach((list) => {
    //     if (list.id === listId) {
    //       list.specifications = list.specifications.filter(p => p.id !== specification.id)
    //     }
    //   })
    // },
    // createList (list) {
    //   this.lists.push(list)
    // }
  },
  actions: {
    async fetchLists ({ commit }) {
      try {
        const response = await axios.get<Array<{ id: number; body: string }>>('https://jsonplaceholder.typicode.com/posts?_limit=3')
        console.log(response)
        const specifications = response.data.map(post => {
          return {
            id: post.id,
            text: post.body
          }
        })
        const lists = [{
          id: Date.now(),
          listName: 'Требования для очень продуктивной компании',
          specifications
        }]
        commit('setLists', lists)
      } catch (e) {
        console.log(e)
      }
    },
    async fetchAndCreateNewList ({
      dispatch
    }, payload: string) {
      try {
        await axios.post('https://jsonplaceholder.typicode.com/posts', {
          listName: payload,
          specifications: []
        })
      } catch (e) {
        console.log(e)
      }
      await dispatch('fetchLists')
    }
  },
  namespaced: true
}
