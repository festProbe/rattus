<template>
  <div class="post">
    <div class="specification">
      {{ post.specification }}
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
  .icon:hover {
    color: #fff;
  }
</style>
