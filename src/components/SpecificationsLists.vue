<template>
  <div class="specifications-lists">
    <specifications-list
      v-for="list in lists"
      :key="list.id"
      :list="list"
    />
  </div>
</template>

<script>
import SpecificationsList from './SpecificationsList'
export default {
  name: 'SpecificationsLists',
  components: { SpecificationsList },
  props: {
    lists: {
      type: Array
    }
  }
}
</script>

<style scoped>
  .specifications-lists {
    margin-top: 15px;
    padding: 15px;
    border: 2px solid teal;
    display: flex;
    flex-direction: column;
  }
</style>
