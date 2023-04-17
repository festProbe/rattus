<template>
<div
  class="specification-list"
>
  <h3 class="list-title">{{list.listName}} <input class="check-list" type="checkbox" @click="checkList"></h3>
  <transition-group name="specifications">
    <specification-item
      v-for="specification in list.specifications"
      :key="specification.id"
      :propSpecification="specification"
      :listId="list.id"
      @editSpecification="editSpecification"
      @remove="removeSpecification"
    />
  </transition-group>
  <specification-form
    class="specification-form"
    v-if="isShowSpecificationForm"
    :listId="list.id"
    :needFocus="needFocus"
    @hideAddSpecification="hideAddSpecification"
    @create="createSpecification"
  />
  <font-awesome-icon
    class="add-icon"
    v-if="!isShowSpecificationForm"
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
      isShowSpecificationForm: false,
      needFocus: false
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
      this.isShowSpecificationForm = !this.isShowSpecificationForm
      document.addEventListener('keydown', this.handleHideAddSpecification)
    },
    hideAddSpecification () {
      this.isShowSpecificationForm = !this.isShowSpecificationForm
      document.removeEventListener('keydown', this.handleHideAddSpecification)
    },
    handleHideAddSpecification (event) {
      if (event.key === 'Esc' || event.key === 'Escape') {
        this.hideAddSpecification()
      }
    },
    checkList () {
      this.$emit('checkList', this.list.id)
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
  .check-list {
    margin-left: auto;
  }
  .list-title {
    font-size: 16px;
    align-self: center;
  }
  .add-icon {
    border: 1px solid teal;
    color: teal;
  }
  .specifications-item {
    display: inline-block;
    margin-right: 10px;
  }
  .specifications-enter-active,
  .specifications-leave-active {
    transition: all 0.4s ease;
  }
  .specifications-enter-from,
  .specifications-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
</style>
