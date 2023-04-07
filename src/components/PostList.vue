<template>
  <div class="posts">
    <post-item
      v-for="post in posts"
      :key="post.id"
      :propPost="post"
      @remove="$emit('remove', post)"
    />
  </div>
</template>

<script>
import PostItem from './PostItem'
export default {
  name: 'PostList',
  components: {
    PostItem
  },
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.posts {

}

.header {
  margin: 10px 0 20px 0;
  align-self: center;
}
</style>
