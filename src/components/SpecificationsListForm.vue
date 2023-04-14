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
export default {
  props: {
    needFocus: {
      type: Boolean
    }
  },
  data () {
    return {
      listName: ''
    }
  },
  methods: {
    createList () {
      if (!this.listName) {
        this.$emit('hideAddListFrom')
        return
      }
      const list = {
        id: Date.now().toString(),
        listName: this.listName,
        specifications: []
      }
      this.$emit('createList', list)
      this.listName = ''
    },
    focusInput () {
      if (this.needFocus) {
        this.$refs.refListName.focus()
      }
    }
  }
}
</script>

<style>

</style>
