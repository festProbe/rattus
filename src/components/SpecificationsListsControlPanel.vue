<template>
  <div class="controls">
    <button class="control-btn">Оценка текущих требований</button>
    <button class="control-btn" v-if="needShowChangeName">Изменить название</button>
    <button class="control-btn" @click="removeLists">Удалить</button>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'SpecificationsListsControlPanel',
  methods: {
    ...mapActions({
      removeLists: 'specificationsLists/removeLists'
    })
  },
  computed: {
    ...mapState({
      needShowChangeName: state => state.specificationsLists.needShowChangeName
    })
  }
}
</script>

<style scoped>
.controls {
  display: flex;
  justify-content: space-between;
}
.control-btn {
  border: 2px solid black;
  border-radius: 7px;
  flex: 1;
  background-color: teal;
  color: white;
}
</style>
