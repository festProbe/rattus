<template>
  <h3>{{list.listName}}</h3>
  <post-list
    :posts="list.specifications"
  />
  <post-form
    @create="createPost"
  />
</template>

<script>
import PostList from './PostList'
import PostForm from './PostForm'
export default {
  name: 'SpecificationsList',
  components: { PostForm, PostList },
  props: {
    list: {
      type: Object
    }
  }
}
</script>

<style scoped>

</style>
