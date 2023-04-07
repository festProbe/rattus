<template>
  <form class="input" @submit.prevent>
    <div><strong>Specification:</strong> <input class="text-box" v-model="post.specification" type="text" placeholder="specification">
    </div>
    <button class="btn" @click="createPost"><span>Добавить</span></button>
  </form>
</template>

<script>
export default {
  name: 'PostForm.vue',
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
      this.$emit('create', this.post)
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
  border: 2px solid teal;
  width: 100%;
}
.input > div {

}
.btn {
  margin-top: 15px;
}
.text-box {
}
</style>
