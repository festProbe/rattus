<template>
  <div class="wrapper">
    <specifications-lists
      :lists="lists"
      @remove="removePost"
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
        id: Date.now(),
        listName: 'Требования для очень продуктивной компании',
        specifications: [{ id: 1, specification: 'Возможность добавлять галочку' }]
      }]
    }
  },
  methods: {
    createPost (post) {
      this.posts.push(post)
    },
    removePost (post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
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
  font-size: 20px;
}

.wrapper {
  margin: 0 auto;
  width: 600px;
}
</style>
