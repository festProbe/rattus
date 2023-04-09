<template>
  <form class="input" @submit.prevent>
    <div><input class="text-box" v-model="post.specification" type="text" placeholder="specification">
    <button class="btn" @click="createPost"><span>Добавить</span></button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'PostForm.vue',
  props: {
    listId: {
      type: String
    }
  },
  data () {
    return {
      post: {
        specification: '',
        isDone: false,
        comment: ''
      }
    }
  },
  methods: {
    createPost () {
      this.post.id = Date.now()
      this.$emit('create', this.listId, this.post)
      this.post = {
        specification: '',
        isDone: false,
        comment: ''
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
