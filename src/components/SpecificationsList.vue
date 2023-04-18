<template>
<div
  class="specification-list"
>
  <div class="list-title">
    <div class="list-name">
      <h3>{{list.name}}</h3>
<!--      <input @keydown="createSpecificationOnEnter" class="new-specification-text" v-model="specification.title" type="text" placeholder="specification">-->
    </div>
    <button
      class="btn"
      @click="showEditForm"
    >
      <font-awesome-icon
        class="icon"
        icon="fa-regular fa-pen-to-square"
      />
    </button>
    <div class="check-list">
      <input type="checkbox" @change="checkList">
    </div>

  </div>
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
    v-if="this.isShowSpecificationForm"
    :listId="list.id"
    :needFocus="needFocus"
    @hideAddSpecification="hideAddSpecification"
    @create="createSpecification"
  />
  <font-awesome-icon
    class="add-icon"
    v-if="!this.isShowSpecificationForm"
    :icon="['fas', 'plus']"
    @click="showAddSpecification"
  />
</div>
</template>

<script>
import SpecificationForm from './SpecificationForm'
import SpecificationItem from './SpecificationItem'
import { mapMutations, mapState } from 'vuex'
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
    ...mapMutations({
      pushToCheckedLists: 'specificationsLists/pushToCheckedLists',
      removeFromCheckedLists: 'specificationsLists/removeFromCheckedLists'
    }),
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
    checkList (e) {
      console.log(e)
      if (e.target.checked) {
        this.pushToCheckedLists(this.list.id)
      } else {
        this.removeFromCheckedLists(this.list.id)
      }
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
  .list-title {
    font-size: 16px;
    display: flex;
    gap: 5px;
  }
  .list-title > h3 {
    align-self: center;
    justify-self: center;
  }
  .check-list {
    margin-left: auto;
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
