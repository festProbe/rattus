<template>
  <div class="controls">
    <button>Оценка текущих требований</button>
    <button v-if="needShowChangeName">Изменить название</button>
    <button>Удалить</button>
  </div>
</template>

<script>
export default {
  name: 'SpecificationsListsControlPanel',
  props: {
    needShowChangeName: {
      type: Boolean
    }
  }
}
</script>

<style scoped>
.controls {
  display: flex;
}
</style>
