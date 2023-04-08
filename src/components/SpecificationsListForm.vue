<template>
  <form @submit.prevent>
    <div>
      <span>Введите название списка</span>
      <input v-model="listName" type="text"/>
      <button @click="createList">Добавить</button>
    </div>
  </form>
</template>

<script>
export default {
  data () {
    return {
      listName: ''
    }
  },
  methods: {
    createList () {
      const list = {
        id: Date.now().toString(),
        listName: this.listName,
        specifications: []
      }
      this.$emit('createList', list)
      this.listName = ''
    }
  }
}
</script>

<style>

</style>
