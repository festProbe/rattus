import { Specification, SpecificationsList, SpecificationsListsState } from '@/interfaces/specificationsListsModules'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { Module } from 'vuex'

const BASE_URL = 'http://localhost:8080/rest/'

export const specificationsListsModule: Module<SpecificationsListsState, any> = {
  state: () => ({
    lists: [],
    checkedLists: [],
    needShowControlPanel: false,
    isShowListForm: false,
    selectedList: 0
  }),
  getters: {
    getListBySelected (state) {
      return state.lists.filter((list) => list.id === state.selectedList)[0]
    }
  },
  mutations: {
    setLists (state, lists: SpecificationsList[]) {
      state.lists = lists
    },
    setShowSpecificationForm (state) {
      state.lists = state.lists.map((list) => ({
        ...list,
        isShowSpecificationForm: false
      }))
    },
    setSelectedList (state, listId: number) {
      state.selectedList = listId
    },
    pushToCheckedLists (state, listId: number) {
      state.checkedLists.push(listId)
      state.checkedLists.length
        ? state.needShowControlPanel = true
        : state.needShowControlPanel = false
    },
    removeFromCheckedLists (state, listId: number) {
      state.checkedLists = state.checkedLists.filter(id => id !== listId)
      state.checkedLists.length
        ? state.needShowControlPanel = true
        : state.needShowControlPanel = false
    },
    showListForm (state) {
      state.isShowListForm = true
    },
    hideListForm (state) {
      state.isShowListForm = false
    },
    showSpecificationForm (state, listId: number) {
      state.lists = state.lists.map((list) => {
        if (list.id === listId) {
          return {
            ...list,
            isShowSpecificationForm: true
          }
        }
        return list
      })
    },
    hideSpecificationForm (state, listId: number) {
      state.lists = state.lists.map((list) => {
        if (list.id === listId) {
          return {
            ...list,
            isShowSpecificationForm: false
          }
        }
        return list
      })
    }
  },
  actions: {
    async fetchLists ({ commit }) {
      const lists = [
        {
          id: 10,
          name: 'Список замечательных идей',
          specifications: [
            {
              id: 101,
              title: 'Идея №1, лучшая на свете',
              done: true,
              comment: 'НУУУУУУУУУУУ'
            },
            {
              id: 102,
              title: 'Идея №2, ну такая себе',
              done: true,
              comment: 'Во истину!'
            },
            {
              id: 103,
              title: 'Идея №3, Стрёмная идея кароч',
              done: true,
              comment: 'Параша полнейшая'
            }
          ]
        },
        {
          id: 11,
          name: 'Список стрёмных идей',
          specifications: [
            {
              id: 111,
              title: 'Идея №1, стрёмная шо ппц',
              done: true,
              comment: 'НУУУУУУУУУУУ'
            },
            {
              id: 112,
              title: 'Идея №2, ну такая себе',
              done: true,
              comment: 'Во истину!'
            },
            {
              id: 113,
              title: 'Идея №3, Стрёмная идея кароч',
              done: true,
              comment: 'Параша полнейшая'
            }
          ]
        }
      ]
      commit('setLists', lists)
      commit('setShowSpecificationForm')
      commit('setSelectedList', lists[0].id)
      // try {
      //   const response = await axios.get<any, AxiosResponse<SpecificationsList[]>, AxiosRequestConfig>(`${BASE_URL}lists`, {
      //     headers: {
      //       'Access-Control-Allow-Origin': '*'
      //     }
      //   })
      //   console.log(response)
      //   const lists = response.data
      //   commit('setLists', lists)
      // } catch (e) {
      //   console.log(e)
      // }
    },
    async fetchAndCreateNewList ({
      dispatch
    }, payload: string) {
      try {
        await axios.post(`${BASE_URL}lists/save`, {
          name: payload,
          specifications: []
        })
      } catch (e) {
        console.log(e)
      }
      await dispatch('fetchLists')
    },
    async addNewSpecification ({
      state
    }, payload: {
      listId: number;
      specification: Specification
    }) {
      try {
        const { listId, specification } = payload
        const changedList = state.lists.filter((list) => list.id === listId)[0]
        changedList.specifications.push(specification)
        await axios.put(`${BASE_URL}lists/${listId}`, changedList)
      } catch (e) {
        console.log(e)
      }
    },
    async deleteSpecification ({
      state
    }, payload: {
      listId: number;
      specificationId: number
    }) {
      try {
        const { listId, specificationId } = payload
        const changedList = state.lists.filter(list => listId === list.id)[0]
        changedList.specifications = changedList.specifications.filter(spec => spec.id !== specificationId)
        await axios.put(`${BASE_URL}lists/${listId}`, changedList)
      } catch (e) {
        console.log(e)
      }
    },
    async editSpecification ({
      state
    }, payload: {
      listId: number;
      specification: Specification
    }) {
      try {
        const { listId, specification } = payload
        const changedList = state.lists.filter((list) => list.id === listId)[0]
        const changedListWithEditedSpec = changedList.specifications.map((spec) => {
          if (spec.id === specification.id) {
            return specification
          }
          return spec
        })
        await axios.put(`${BASE_URL}lists/${listId}`, changedListWithEditedSpec)
      } catch (e) {
        console.log(e)
      }
    },
    async removeLists ({ state, commit, dispatch }) {
      if (state.checkedLists.length) {
        for (const listId of state.checkedLists) {
          await axios.delete(`${BASE_URL}lists/${listId}`)
          commit('removeFromCheckedLists', listId)
        }
      }
      await dispatch('fetchLists')
    },
    async changeListName ({ state }, payload: { listId: number; name: string }) {
      const { listId, name } = payload
      const changedList = state.lists.filter((list) => list.id === listId)[0]
      try {
        await axios.put(`${BASE_URL}lists/${listId}`, {
          ...changedList,
          name
        })
      } catch (e) {
        console.log(e)
      }
    },
    async saveChangedList ({ state }, payload: SpecificationsList) {
      try {
        await axios.put(`${BASE_URL}lists/${payload.id}`, payload)
      } catch (e) {
        console.log(e)
      }
    }
  },
  namespaced: true
}
