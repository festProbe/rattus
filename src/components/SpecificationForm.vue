<template>
  <form @submit.prevent>
    <div class="new-specification-form">
      <input @keydown="createSpecificationOnEnter" class="new-specification-text" v-model="specification.title" type="text" placeholder="specification">
      <font-awesome-icon class="btn" @click="createSpecification" :icon="['fas', 'plus']" />
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'SpecificationForm.vue',
  props: {
    listId: {
      type: String
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
          text: ''
        }
      }
      this.$emit('hideAddSpecification')
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
