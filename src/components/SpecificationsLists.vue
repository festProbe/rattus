<template>
  <div class="specifications-lists">
    <specifications-lists-control-panel
      class="controls"
      v-if="needShowControlPanel"
      :needShowChangeName="needShowChangeName"
    />
    <div class="specifications-main">
      <transition-group name="lists">
        <specifications-list
          v-for="list in lists"
          :key="list.id"
          :list="list"
          @checkList="checkList"
        />
      </transition-group>
      <specifications-list-form
        v-if="isShowSpecificationForm"
        :needFocus="needFocus"
        @hideAddListFrom="hideAddListFrom"
      />
      <font-awesome-icon
        class="add-list-icon"
        v-if="!isShowSpecificationForm"
        :icon="['fas', 'plus']"
        @click="showCreateListForm"
      />
    </div>
  </div>
</template>

<script>
import SpecificationsList from './SpecificationsList'
import SpecificationsListForm from './SpecificationsListForm.vue'
import SpecificationsListsControlPanel from './SpecificationsListsControlPanel'
import { mapState } from 'vuex'
export default {
  name: 'SpecificationsLists',
  components: { SpecificationsListsControlPanel, SpecificationsList, SpecificationsListForm },
  data () {
    return {
      isShowSpecificationForm: false,

      checkedLists: []
    }
  },
  methods: {
    showCreateListForm () {
      this.isShowSpecificationForm = !this.isShowSpecificationForm
    },
    hideAddListFrom () {
      this.isShowSpecificationForm = !this.isShowSpecificationForm
    }
  },
  computed: {
    ...mapState({
      lists: state => state.specificationsLists.lists,
      checkedLists: state => state.specificationsLists.checkedLists,
      needShowControlPanel: state => state.specificationsLists.needShowControlPanel
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
