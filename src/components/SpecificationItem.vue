<template>
  <div class="post">
    <div class="specification">
      <div>{{ post.specification }}</div>
    </div>
    <div class="buttons">
      <button class="btn" @click="$emit('edit', listId, post)"><font-awesome-icon class="icon" icon="fa-regular fa-pen-to-square" /></button>
      <button class="btn" @click="$emit('remove', listId, post)"><font-awesome-icon class="icon" icon="fa-regular fa-trash-can" /></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostItem',
  props: {
    propPost: {
      type: Object,
      required: true
    },
    listId: {
      type: String
    }
  },
  data () {
    return {
      post: this.propPost
    }
  }
}
</script>

<style scoped>
.post {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.icon:hover {
  color: #fff;
}
.specification {
}
.buttons {
  display: flex;
}
</style>
