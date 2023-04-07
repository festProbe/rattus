<template>
  <div class="post">
    <div class="specification">
      <div>{{ post.specification }}</div>
    </div>
    <div class="buttons">
      <button class="btn"><span>Изменить</span></button>
      <button class="btn" @click="$emit('remove', post)"><span>Удалить</span></button>
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
.specification {
}
.buttons {
  display: flex;
}
</style>
