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
    class="specification-form"
    :class="{ hidden: isHidden }"
    :listId="list.id"
    @hideAddSpecification="hideAddSpecification"
    @create="createSpecification"
  />
  <font-awesome-icon
    class="add-icon"
    :class="{ hidden: !isHidden }"
    :icon="['fas', 'plus']"
    @click="showAddSpecification"
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
  data () {
    return {
      isHidden: true
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
    },
    showAddSpecification () {
      this.isHidden = !this.isHidden
      document.addEventListener('keydown', this.handleHideAddSpecification)
    },
    hideAddSpecification () {
      this.isHidden = !this.isHidden
      document.removeEventListener('keydown', this.handleHideAddSpecification)
    },
    handleHideAddSpecification (event) {
      if (event.key === 'Esc' || event.key === 'Escape') {
        this.hideAddSpecification()
      }
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
  .add-icon {
    border: 1px solid teal;
    color: teal;
  }
</style>
