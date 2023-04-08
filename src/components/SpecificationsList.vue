<template>
  <h3>{{list.listName}}</h3>
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

</style>
