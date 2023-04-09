<template>
  <form class="input" @submit.prevent>
    <div><input class="text-box" v-model="specification.text" type="text" placeholder="specification">
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
      this.specification.id = Date.now()
      this.$emit('create', this.listId, this.specification)
      this.specification = {
        text: ''
      }
    }
  }
}
</script>

<style scoped>
.input {
  margin-top: 15px;
  padding: 15px;
}
.input > div {

}
.btn {
}
.text-box {
}
</style>
