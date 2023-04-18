<template>
  <specifications-lists
    @create="createSpecification"
    @editSpecification="editSpecification"
    @remove="removeSpecification"
    @createList="createList"
  />
</template>

<script>
import SpecificationsLists from '@/components/SpecificationsLists'

export default {
  name: 'EditPage',
  components: {
    SpecificationsLists
  },
  props: {
    lists: {
      type: Array
    }
  },
  methods: {
    createSpecification (listId, specification) {
      this.$emit('create', listId, specification)
    },
    removeSpecification (listId, specification) {
      this.$emit('remove', listId, specification)
    },
    createList (list) {
      this.$emit('createList', list)
    },
    editSpecification (listId, specification) {
      this.$emit('editSpecification', listId, specification)
    }
  }
}
</script>

<style scoped>

</style>
