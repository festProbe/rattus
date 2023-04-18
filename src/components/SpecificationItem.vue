<template>
  <div class="post">
    <div
      v-if="!isShowEditInput"
      class="specification"
    >
      {{ specification.title }}
    </div>
    <input
      v-else
      v-focus
      @blur="() => (this.isShowEditInput = false)"
      @keydown="handleChangeElementOnKey"
      class="new-specification"
      v-model="updatedSpecification"
      type="text"
    >
    <div class="buttons">
      <button
        class="btn"
        @click="showEditForm"
      >
        <font-awesome-icon
          class="icon"
          icon="fa-regular fa-pen-to-square"
        />
      </button>
      <button
        class="btn"
        @click="removeSpecification"
      >
        <font-awesome-icon
          class="icon"
          icon="fa-regular fa-trash-can"
        />
      </button>
    </div>
  </div>
</template>

<script>
import { Specification } from '@/interfaces/specificationsListsModules'
import { mapActions } from 'vuex'
export default {
  name: 'SpecificationItem',
  props: {
    propSpecification: {
      type: Specification
    },
    listId: {
      type: Number
    }
  },
  data () {
    return {
      specification: this.propSpecification,
      updatedSpecification: '',
      isShowEditInput: false
    }
  },
  methods: {
    ...mapActions({
      editSpecification: 'specificationsLists/editSpecification',
      deleteSpecification: 'specificationsLists/deleteSpecification'
    }),
    showEditForm () {
      this.updatedSpecification = this.specification.title
      this.isShowEditInput = !this.isShowEditInput
    },
    handleChangeElementOnKey (event) {
      if (event.key === 'Enter' || event.key === 'Esc' || event.key === 'Escape') {
        this.handleChangeElement()
      }
    },
    handleChangeElement () {
      this.isShowEditInput = !this.isShowEditInput
      if (this.updatedSpecification && this.updatedSpecification !== this.specification.title) {
        this.editSpecification({
          listId: this.listId,
          specification: {
            ...this.specification,
            title: this.updatedSpecification
          }
        })
      }
      this.isShowEditInput = !this.isShowEditInput
    },
    removeSpecification () {
      this.deleteSpecification({ listId: this.listId, specificationId: this.specification.id })
    }
  }
}
</script>

<style scoped>
.post {
  display: grid;
  grid-template-columns: 80% 20%;
}
.specification {
  width: 50%;
}
.buttons {
  margin-left: auto;
  display: flex;
  gap: 7px;
}
.btn {
  align-self: center;
}
.icon {
  color: teal;
}
.icon:hover {
  color: #fff;
}
</style>
