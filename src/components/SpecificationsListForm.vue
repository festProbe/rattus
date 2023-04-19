<template>
  <form @submit.prevent>
    <div>
      <span>Введите название списка</span>
      <input
        v-focus
        @blur="hideListForm"
        ref="refListName"
        v-model="name"
        type="text"
      />
      <button @click="createList">Добавить</button>
    </div>
  </form>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'

export default {
  data () {
    return {
      name: ''
    }
  },
  methods: {
    ...mapMutations({
      hideListForm: 'specificationsLists/hideListForm'
    }),
    ...mapActions({
      fetchAndCreateNewList: 'specificationsLists/fetchAndCreateNewList'
    }),
    createList () {
      this.fetchAndCreateNewList(this.name)
      this.name = ''
    }
  }
}
</script>

<style>

</style>
