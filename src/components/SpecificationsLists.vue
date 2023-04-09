<template>
  <div class="specifications-lists">
    <specifications-list
      v-for="list in lists"
      :key="list.id"
      :list="list"
      @create="createSpecification"
      @editSpecification='editSpecification'
      @remove="removeSpecification"
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
  .specifications-lists {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
</style>
