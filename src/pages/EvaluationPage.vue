<template>
  <evaluation-table
    :lists="lists"
  />
</template>

<script>
import EvaluationTable from '@/components/EvaluationTable'

export default {
  name: 'EvaluationPage',
  components: {
    EvaluationTable
  },
  props: {
    lists: {
      type: Array
    }
  }
}
</script>

<style scoped>

</style>
