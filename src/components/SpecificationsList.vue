<template>
<div class="specification-list">
  <h3 class="list-title">{{list.listName}}</h3>
    <specification-item
      v-for="specification in list.specifications"
      :key="specification.id"
      :propSpecification="specification"
      :listId="list.id"
      @editSpecification="editSpecification"
      @remove="removeSpecification"
    />
  <specification-form
    :listId="list.id"
    @create="createSpecification"
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
    createSpecification (listId, specification) {
      this.$emit('create', listId, specification)
    },
    removeSpecification (listId, specification) {
      this.$emit('remove', listId, specification)
    },
    editSpecification (listId, specification) {
      this.$emit('editSpecification', listId, specification)
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
