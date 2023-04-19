<template>
<div
  class="specification-list"
>
  <div class="list-title">
    <div class="list-name">
      <h3 v-if="!isNameEditing">{{list.name}}</h3>
      <input
        v-else
        v-focus
        @keydown="editNameOnKeydown"
        @blur="() => (this.isNameEditing = false)"
        class="edit-list-name"
        v-model="editedName"
        type="text"
      >
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
    />
  </transition-group>
  <specification-form
    class="specification-form"
    v-if="list.isShowSpecificationForm"
    :listId="list.id"
  />
  <font-awesome-icon
    class="add-icon"
    v-else
    :icon="['fas', 'plus']"
    @click="() => this.showSpecificationForm(list.id)"
  />
</div>
</template>

<script>
import SpecificationForm from './SpecificationForm'
import SpecificationItem from './SpecificationItem'
import { mapActions, mapMutations } from 'vuex'
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
      editedName: '',
      isNameEditing: false
    }
  },
  methods: {
    ...mapMutations({
      pushToCheckedLists: 'specificationsLists/pushToCheckedLists',
      removeFromCheckedLists: 'specificationsLists/removeFromCheckedLists',
      showSpecificationForm: 'specificationsLists/showSpecificationForm',
      hideSpecificationForm: 'specificationsLists/hideSpecificationForm'
    }),
    ...mapActions({
      editListName: 'specificationsLists/changeListName'
    }),
    editNameOnKeydown (e) {
      if (e.key === 'Enter') {
        this.editListName({
          listId: this.list.id,
          name: this.editedName
        })
        this.editedName = ''
        this.isNameEditing = false
      }
    },
    showEditForm () {
      this.isNameEditing = true
      this.editedName = this.list.name
    },
    checkList (e) {
      console.log(e)
      if (e.target.checked) {
        this.pushToCheckedLists(this.list.id)
      } else {
        this.removeFromCheckedLists(this.list.id)
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
