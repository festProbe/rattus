<template>
  <div class="wrapper">
    <specifications-lists
      :lists="lists"
      @create="createPost"
      @remove="removePost"
      @createList="createList"
    />
  </div>
</template>

<script>
import SpecificationsLists from './components/SpecificationsLists'
export default {
  components: {
    SpecificationsLists
  },
  data () {
    return {
      lists: [{
        id: Date.now().toString(),
        listName: 'Требования для очень продуктивной компании',
        specifications: [{ id: 1, specification: 'Возможность добавлять галочку' }]
      }]
    }
  },
  methods: {
    createPost (listId, post) {
      this.lists.forEach((list) => {
        if (list.id === listId) {
          list.specifications.push(post)
        }
      })
    },
    removePost (listId, post) {
      this.lists.forEach((list) => {
        if (list.id === listId) {
          list.specifications = list.specifications.filter(p => p.id !== post.id)
        }
      })
    },
    createList (list) {
      this.lists.push(list)
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  font-family: sans-serif;
  font-size: 14px;
}

.wrapper {
  margin: 0 auto;
  width: 600px;
}
</style>
