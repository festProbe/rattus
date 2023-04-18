<template>
  <tr>
    <td>
      {{ specification.title }}</td>
    <td>
      <select>
        <option value="success">Выполнено</option>
        <option value="needsRefinement">Требует доработки</option>
        <option value="fail">Не выполнено</option>
      </select>
    </td>
    <td><textarea v-model="comment" @input="resize($event)"></textarea></td>
  </tr>
</template>

<script>
import { Specification } from '@/interfaces/specificationsListsModules'
export default {
  name: 'EvaluationRow',
  props: {
    specification: {
      type: Specification
    }
  },
  data () {
    return {
      status: '',
      comment: ''
    }
  },
  methods: {
    resize (e) {
      e.target.style.height = 'auto'
      e.target.style.height = `${this.scrollHeight}px`
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
  resize:none;
  overflow: hidden;
  outline: none;
  box-shadow: none;
}
textarea:focus textarea:active {
  border: none;
}
</style>
