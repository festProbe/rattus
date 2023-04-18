import { Specification, SpecificationsList, SpecificationsListsState } from '@/interfaces/specificationsListsModules'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { Module } from 'vuex'

const BASE_URL = 'http://localhost:8080/rest/'

export const specificationsListsModule: Module<SpecificationsListsState, any> = {
  state: () => ({
    lists: [],
    checkedLists: [],
    needShowChangeName: false,
    needShowControlPanel: false
  }),
  getters: {},
  mutations: {
    setLists (state, lists: SpecificationsList[]) {
      state.lists = lists
    },
    pushToCheckedLists (state, listId: number) {
      state.checkedLists.push(listId)
      state.checkedLists.length
        ? state.needShowControlPanel = true
        : state.needShowControlPanel = false
      state.checkedLists.length === 1
        ? state.needShowChangeName = true
        : state.needShowChangeName = false
    },
    removeFromCheckedLists (state, listId: number) {
      state.checkedLists = state.checkedLists.filter(id => id !== listId)
      state.checkedLists.length
        ? state.needShowControlPanel = true
        : state.needShowControlPanel = false
      state.checkedLists.length === 1
        ? state.needShowChangeName = true
        : state.needShowChangeName = false
    }
  },
  actions: {
    async fetchLists ({ commit }) {
      try {
        const response = await axios.get<any, AxiosResponse<SpecificationsList[]>, AxiosRequestConfig>(`${BASE_URL}lists`, {
          headers: {
            'Access-Control-Allow-Origin': '*'
          }
        })
        console.log(response)
        const lists = response.data
        commit('setLists', lists)
      } catch (e) {
        console.log(e)
      }
    },
    async fetchAndCreateNewList ({
      state,
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
      state,
      dispatch
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
      state,
      dispatch
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
    async changeListName ({ state, commit }, payload: { listId: number; name: string }) {
      const { listId, name } = payload
      const changedList = state.lists.filter((list) => list.id === listId)[0]
      try {
        await axios.put(`${BASE_URL}lists/${listId}`, {
          ...changedList,
          name: payload
        })
      } catch (e) {
        console.log(e)
      }
    }
  },
  namespaced: true
}
