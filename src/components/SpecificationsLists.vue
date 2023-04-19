<template>
  <div class="specifications-lists">
    <specifications-lists-control-panel
      class="controls"
      v-if="needShowControlPanel"
    />
    <div class="specifications-main">
      <transition-group name="lists">
        <specifications-list
          v-for="list in lists"
          :key="list.id"
          :list="list"
        />
      </transition-group>
      <specifications-list-form
        v-if="isShowListForm"
      />
      <font-awesome-icon
        class="add-list-icon"
        v-else
        :icon="['fas', 'plus']"
        @click="showListForm"
      />
    </div>
  </div>
</template>

<script>
import SpecificationsList from './SpecificationsList'
import SpecificationsListForm from './SpecificationsListForm.vue'
import SpecificationsListsControlPanel from './SpecificationsListsControlPanel'
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'SpecificationsLists',
  components: { SpecificationsListsControlPanel, SpecificationsList, SpecificationsListForm },
  methods: {
    ...mapMutations({
      showListForm: 'specificationsLists/showListForm'
    })
  },
  computed: {
    ...mapState({
      lists: state => state.specificationsLists.lists,
      checkedLists: state => state.specificationsLists.checkedLists,
      needShowControlPanel: state => state.specificationsLists.needShowControlPanel,
      isShowListForm: state => state.specificationsLists.isShowListForm
    })
  }
}
</script>

<style scoped>
.specifications-lists {
  margin: 0 auto;
  width: 600px;
}
.specifications-main {
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.controls {
  position: fixed;
  top: 0;
  height: 20px;
  min-width: 600px;
}
.add-list-icon {
  height: 25px;
  color: teal;
  border: 2px solid teal;
}
.lists-item {
  display: inline-block;
  margin-right: 10px;
}
.lists-enter-active,
.lists-leave-active {
  transition: all 0.4s ease;
}
.lists-enter-from,
.lists-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
