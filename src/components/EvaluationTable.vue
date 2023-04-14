<template>
  <div class="wrapper">
    <table class="evaluation-table" v-for="list in lists" :key="list.id">
      <tr>
        <th class="evaluation-table__list-title">{{ list.listName }}</th>
      </tr>
      <tr>
        <td>Требование</td>
        <td>Результаты проверки</td>
        <td>Комментарий</td>
      </tr>
      <tr v-for="specification in list.specifications" :key="specification.id">
        <td>
          {{ specification.text }}</td>
        <td>
          <select>
            <option value="success">Выполнено</option>
            <option value="needsRefinement">Требует доработки</option>
            <option value="fail">Не выполнено</option>
          </select>
        </td>
        <td><textarea></textarea></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'EvaluationList',
  props: {
    lists: {
      type: Array
    }
  }
}
</script>

<style scoped>
.wrapper {
  size: 21cm 29.7cm;
  margin: 30mm 45mm 30mm 45mm;
}
.evaluation-table {
  text-align: center;
  margin-bottom: 20px;
}
.evaluation-table__list-title {
  font-weight: bold;
  text-align: center;
}
tr {
  display: grid;
  grid-template-columns: 1fr 165px 1fr;
  align-items: center;
  border: 1px solid black;
  border-top: none;
  border-right: none;
}
tr > th {
  grid-column-start: span 3;
  min-height: 30px;
  border-top: 1px solid black;
  border-right: 1px solid black;
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
  padding: 0.25em 0.5em 0.25em 0.5em;
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
