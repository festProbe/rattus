<template>
  <div class="post">
    <div class="specification">
      {{ specification.text }}
    </div>
    <input class="new-specification" v-model="updatedSpecification" type="text" disabled hidden>
    <div class="buttons">
      <button class="btn" @click="editSpecification"><font-awesome-icon class="icon" icon="fa-regular fa-pen-to-square" /></button>
      <button class="btn" @click="$emit('remove', listId, specification)"><font-awesome-icon class="icon" icon="fa-regular fa-trash-can" /></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SpecificationItem',
  props: {
    propSpecification: {
      type: Object,
      required: true
    },
    listId: {
      type: String
    }
  },
  data () {
    return {
      specification: this.propSpecification,
      updatedSpecification: ''
    }
  },
  methods: {
    editSpecification () {
      this.updatedSpecification = this.specification.text
      const oldSpecification = document.querySelector('.specification')
      const newSpecification = document.querySelector('.new-specification')
      oldSpecification.setAttribute('hidden', 'hidden')
      newSpecification.removeAttribute('hidden')
      newSpecification.removeAttribute('disabled')
      newSpecification.focus()
      newSpecification.addEventListener('blur', this.handleChangeElement)
      newSpecification.addEventListener('keydown', this.handleChangeElementOnKey)
    },
    handleChangeElementOnKey (event) {
      if (event.key === 'Enter' || event.key === 'Esc' || event.key === 'Escape') {
        this.handleChangeElement()
      }
    },
    handleChangeElement () {
      const oldSpecification = document.querySelector('.specification')
      const newSpecification = document.querySelector('.new-specification')
      if (this.updatedSpecification !== this.specification.text) {
        this.$emit('editSpecification', this.listId, {
          ...this.specification,
          text: this.updatedSpecification
        })
      }
      newSpecification.setAttribute('hidden', 'hidden')
      newSpecification.setAttribute('disabled', 'disabled')
      oldSpecification.removeAttribute('hidden')
      newSpecification.removeEventListener('blur', this.handleChangeTextElement)
      newSpecification.removeEventListener('keydown', this.handleChangeElementOnKey)
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
.icon:hover {
  color: #fff;
}
</style>
