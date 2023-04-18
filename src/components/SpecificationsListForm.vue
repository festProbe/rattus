<template>
  <form @submit.prevent>
    <div>
      <span>Введите название списка</span>
      <input ref="refListName" v-model="listName" type="text"/>
      <button @click="createList">Добавить</button>
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      listName: ''
    }
  },
  methods: {
    ...mapActions({
      fetchAndCreateNewList: 'specificationsLists/fetchAndCreateNewList'
    }),
    createList () {
      if (!this.listName) {
        this.fetchAndCreateNewList(this.listName)
        return
      }
      this.listName = ''
    }
  }
}
</script>

<style>

</style>
