<template>
  <form @submit.prevent>
    <div class="new-specification-form">
      <input
        v-focus
        @keydown="createSpecificationOnEnter"
        class="new-specification-text"
        v-model="specification.title"
        type="text"
        placeholder="specification"
        @blur="() => this.hideSpecificationForm(listId)"
      >
      <font-awesome-icon class="btn" @click="createSpecification" :icon="['fas', 'plus']" />
    </div>
  </form>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'

export default {
  name: 'SpecificationForm.vue',
  props: {
    listId: {
      type: Number
    }
  },
  data () {
    return {
      specification: {
        title: '',
        done: false,
        comment: ''
      }
    }
  },
  methods: {
    ...mapMutations({
      hideSpecificationForm: 'specificationsLists/hideSpecificationForm'
    }),
    ...mapActions({
      addNewSpecification: 'specificationsLists/addNewSpecification'
    }),
    createSpecification () {
      if (this.specification.title) {
        this.addNewSpecification({
          listId: this.listId,
          specification: this.specification
        })
        this.specification = {
          title: ''
        }
      }
    },
    createSpecificationOnEnter (event) {
      if (event.key === 'Enter') {
        this.createSpecification()
      }
    }
  }
}
</script>

<style scoped>
.new-specification-form {
  display: grid;
  grid-template-columns: 80% 20%;
}
.btn {
  margin-left: auto;
  padding: 1px;
  border: 1px solid teal;
  color: teal;
}
</style>
