<template>
  <div class="wrapper">
    <select @change="(e) => setSelectedList(Number(e.target.value))">
      <option
        v-for="list in lists"
        :key="list.id"
        :value="list.id"
      >
        {{ list.name }}
      </option>
    </select>
    <table class="evaluation-table">
      <tr>
        <th class="evaluation-table__list-title">{{ getListBySelected.name }}</th>
      </tr>
      <tr>
        <td>Требование</td>
        <td>Результаты проверки</td>
        <td>Комментарий</td>
      </tr>
      <evaluation-row
        v-for="specification in getListBySelected.specifications"
        :key="specification.id"
        :specification="specification"
      />
    </table>
    <button @click="saveList">Сохранить список</button>
  </div>
</template>

<script>
import { mapMutations, mapState, mapGetters, mapActions } from 'vuex'
import EvaluationRow from '@/components/EvaluationRow'
export default {
  name: 'EvaluationList',
  components: { EvaluationRow },
  methods: {
    ...mapMutations({
      setSelectedList: 'specificationsLists/setSelectedList'
    }),
    ...mapActions({
      saveChangedList: 'specificationsLists/saveChangedList'
    }),
    saveList () {
      this.saveChangedList()
    }
  },
  computed: {
    ...mapState({
      lists: state => state.specificationsLists.lists,
      selectedList: state => state.specificationsLists.selectedList
    }),
    ...mapGetters({
      getListBySelected: 'specificationsLists/getListBySelected'
    })
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
  grid-template-columns: 1fr 170px 1fr;
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
select {
  min-height: 20px;
  display: grid;
  line-height: 1.5em;
  padding: 0.25em 0.2em 0.25em 0.2em;
  margin: 0;
  border-radius: 4px;
}
</style>
