<template>
  <div class="specifications-lists">
    <specifications-list
      v-for="list in lists"
      :key="list.id"
      :list="list"
      @create="createPost"
      @remove="removePost"
    />
    <specifications-list-from
      @createList="createList"
    />
  </div>
</template>

<script>
import SpecificationsList from './SpecificationsList'
import SpecificationsListFrom from './SpecificationsListForm.vue'
export default {
  name: 'SpecificationsLists',
  components: { SpecificationsList, SpecificationsListFrom },
  props: {
    lists: {
      type: Array
    }
  },
  methods: {
    createPost (listId, post) {
      this.$emit('create', listId, post)
    },
    removePost (listId, post) {
      this.$emit('remove', listId, post)
    },
    createList (list) {
      this.$emit('createList', list)
    }
  }
}
</script>

<style scoped>
  .specifications-lists {
    margin-top: 15px;
    padding: 15px;
    flex-direction: column;
  }
</style>
