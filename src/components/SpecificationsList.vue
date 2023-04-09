<template>
<div class="specification-list">
  <h3 class="list-title">{{list.listName}}</h3>
    <specification-item
      v-for="post in list.specifications"
      :key="post.id"
      :propPost="post"
      :listId="list.id"
      @remove="removePost"
    />
  <specification-form
    :listId="list.id"
    @create="createPost"
  />
</div>
</template>

<script>
import SpecificationForm from './SpecificationForm'
import SpecificationItem from './SpecificationItem'
export default {
  name: 'SpecificationsList',
  components: { SpecificationForm, SpecificationItem },
  props: {
    list: {
      type: Object
    }
  },
  methods: {
    createPost (listId, post) {
      this.$emit('create', listId, post)
    },
    removePost (listId, post) {
      this.$emit('remove', listId, post)
    }
  }
}
</script>

<style scoped>
  .specification-list {
    padding: 15px;
    border: 2px solid teal;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .list-title {
    font-size: 16px;
    align-self: center;
  }
</style>
