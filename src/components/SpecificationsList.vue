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
    :listId="list.id"
    @hideAddSpecification="hideAddSpecification"
    @create="createSpecification"
    hidden
  />
  <font-awesome-icon class="add-icon" :icon="['fas', 'plus']" @click="showAddSpecification"/>
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
    },
    showAddSpecification () {
      const form = document.querySelector('.specification-form')
      const addIcon = document.querySelector('.add-icon')
      if (form.hasAttribute('hidden')) {
        form.removeAttribute('hidden')
        document.querySelector('.new-specification-text').focus()
        addIcon.style.display = 'none'
      }
      document.addEventListener('keydown', this.handleHideAddSpecification)
    },
    hideAddSpecification () {
      const form = document.querySelector('.specification-form')
      const addIcon = document.querySelector('.add-icon')
      if (!form.hasAttribute('hidden')) {
        form.setAttribute('hidden', 'hidden')
        addIcon.style.display = 'inline-block'
      }
      document.removeEventListener('keydown', this.handleHideAddSpecification)
    },
    handleHideAddSpecification (event) {
      if (event.key === 'Enter' || event.key === 'Esc' || event.key === 'Escape') {
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
