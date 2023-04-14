<template>
  <div class="specifications-lists">
    <specifications-lists-control-panel
      v-if="needShowControlPanel"
      :needShowChangeName="needShowChangeName"
    />
    <specifications-list
      v-for="list in lists"
      :key="list.id"
      :list="list"
      @create="createSpecification"
      @editSpecification='editSpecification'
      @remove="removeSpecification"
      @checkList="checkList"
    />
    <specifications-list-form
      v-if="isShowSpecificationForm"
      :needFocus="needFocus"
      @createList="createList"
      @hideAddListFrom="hideAddListFrom"
    />
    <font-awesome-icon
      class="add-list-icon"
      v-if="!isShowSpecificationForm"
      :icon="['fas', 'plus']"
      @click="showCreateListForm"
    />
  </div>
</template>

<script>
import SpecificationsList from './SpecificationsList'
import SpecificationsListForm from './SpecificationsListForm.vue'
import SpecificationsListsControlPanel from './SpecificationsListsControlPanel'
export default {
  name: 'SpecificationsLists',
  components: { SpecificationsListsControlPanel, SpecificationsList, SpecificationsListForm },
  props: {
    lists: {
      type: Array
    }
  },
  data () {
    return {
      isShowSpecificationForm: false,
      needFocus: false,
      needShowChangeName: false,
      checkedLists: [],
      needShowControlPanel: false
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
      this.isShowSpecificationForm = !this.isShowSpecificationForm
      this.$emit('createList', list)
    },
    editSpecification (listId, specification) {
      this.$emit('editSpecification', listId, specification)
    },
    showCreateListForm () {
      this.isShowSpecificationForm = !this.isShowSpecificationForm
    },
    hideAddListFrom () {
      this.isShowSpecificationForm = !this.isShowSpecificationForm
    },
    checkList (listId) {
      if (this.checkedLists.includes(listId)) {
        this.checkedLists = this.checkedLists.filter(id => id !== listId)
      } else {
        this.checkedLists.push(listId)
      }
      if (this.checkedLists.length) {
        this.needShowControlPanel = true
      } else {
        this.needShowControlPanel = false
      }
      if (this.checkedLists.length === 1) {
        this.needShowChangeName = true
      } else {
        this.needShowChangeName = false
      }
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
  .add-list-icon {
    height: 25px;
    color: teal;
    border: 2px solid teal;
  }
</style>
