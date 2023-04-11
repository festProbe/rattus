<template>
  <div class="post">
    <div
      :class="{ hidden: isHidden }"
      class="specification"
    >
      {{ specification.text }}
    </div>
    <input
      :class="{ hidden: !isHidden }"
      @keydown="handleChangeElementOnKey"
      class="new-specification"
      v-model="updatedSpecification"
      type="text"
    >
    <div class="buttons">
      <button
        class="btn"
        @click="editSpecification"
      >
        <font-awesome-icon
          class="icon"
          icon="fa-regular fa-pen-to-square"
        />
      </button>
      <button
        class="btn"
        @click="$emit('remove', listId, specification)"
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
      updatedSpecification: '',
      isHidden: false
    }
  },
  methods: {
    editSpecification () {
      this.updatedSpecification = this.specification.text
      this.isHidden = !this.isHidden
    },
    handleChangeElementOnKey (event) {
      if (event.key === 'Enter' || event.key === 'Esc' || event.key === 'Escape') {
        this.handleChangeElement()
      }
    },
    handleChangeElement () {
      this.isHidden = !this.isHidden
      if (this.updatedSpecification !== this.specification.text) {
        this.$emit('editSpecification', this.listId, {
          ...this.specification,
          text: this.updatedSpecification
        })
      }
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
