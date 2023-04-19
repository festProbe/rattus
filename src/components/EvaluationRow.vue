<template>
  <tr>
    <td>
      {{ specification.title }}
    </td>
    <td>
      <select @change="changeStatus" :value="specification.status">
        <option value="COMPLETED">Выполнено</option>
        <option value="REQUIRES_IMPROVEMENT">Требует доработки</option>
        <option value="NOT_COMPLETED">Не выполнено</option>
      </select>
    </td>
    <td>
      <textarea
        @input="changeComment"
        :value="specification.comment"
      ></textarea>
    </td>
  </tr>
</template>

<script>
import { Specification } from '@/interfaces/specificationsListsModules'
import { mapMutations } from 'vuex'

export default {
  name: 'EvaluationRow',
  props: {
    specification: {
      type: Specification
    },
    listId: {
      type: Number
    }
  },
  methods: {
    ...mapMutations({
      setSpecificationComment: 'specificationsLists/setSpecificationComment',
      setSpecificationStatus: 'specificationsLists/setSpecificationStatus'
    }),
    resize (e) {
      e.target.style.height = 'auto'
      e.target.style.height = `${this.scrollHeight}px`
    },
    changeComment (e) {
      this.resize(e)
      this.setSpecificationComment({
        listId: this.listId,
        specificationId: this.specification.id,
        comment: e.target.value
      })
    },
    changeStatus (e) {
      this.setSpecificationStatus({
        listId: this.listId,
        specificationId: this.specification.id,
        status: e.target.value
      })
    }
  }
}
</script>

<style scoped>
tr {
  display: grid;
  grid-template-columns: 1fr 170px 1fr;
  align-items: center;
  border: 1px solid black;
  border-top: none;
  border-right: none;
}

td {
  min-height: 25px;
  padding: 5px;
  border-right: 1px solid black;
  display: flex;
  justify-content: center;
  align-content: center;
  align-self: center;
}

select {
  min-height: 20px;
  display: grid;
  line-height: 1.5em;
  padding: 0.25em 0.2em 0.25em 0.2em;
  margin: 0;
  border-radius: 4px;
}

textarea {
  padding: 5px 10px;
  border: none;
  width: 100%;
  min-height: 20px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  resize: none;
  overflow: hidden;
  outline: none;
  box-shadow: none;
}

textarea:focus textarea:active {
  border: none;
}
</style>
