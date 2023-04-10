<template>
  <form class="input" @submit.prevent>
    <div><input class="new-specification-text" v-model="specification.text" type="text" placeholder="specification">
    <button class="btn" @click="createSpecification"><span>Добавить</span></button>
    </div>
  </form>
</template>

<script>
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
        text: ''
      }
    }
  },
  methods: {
    createSpecification () {
      if (this.specification.text) {
        this.specification.id = Date.now()
        this.$emit('create', this.listId, this.specification)
        this.specification = {
          text: ''
        }
      }
      this.$emit('hideAddSpecification')
    }
  }
}
</script>

<style scoped>
</style>
