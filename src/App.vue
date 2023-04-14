<template>
  <div class="wrapper">
    <div class="main">
      <specifications-lists
        v-if="isEditPage"
        :lists="lists"
        @create="createSpecification"
        @editSpecification="editSpecification"
        @remove="removeSpecification"
        @createList="createList"
      />
    </div>
    <div class="footer">
      <div class="footer-page" @click="chooseEditPage">Редактирование</div>
      <div class="footer-page" @click="chooseEvaluationPage">Оценка требований</div>
    </div>
  </div>
</template>

<script>
import SpecificationsLists from './components/SpecificationsLists'
export default {
  components: {
    SpecificationsLists
  },
  data () {
    return {
      lists: [{
        id: Date.now().toString(),
        listName: 'Требования для очень продуктивной компании',
        specifications: [{ id: 1, text: 'Возможность добавлять галочку' }]
      }],
      isEditPage: true,
      isEvaluationPage: false
    }
  },
  methods: {
    createSpecification (listId, specification) {
      this.lists.forEach((list) => {
        if (list.id === listId) {
          list.specifications.push(specification)
        }
      })
    },
    editSpecification (listId, specification) {
      this.lists.forEach((list) => {
        if (list.id === listId) {
          list.specifications.forEach((specif) => {
            if (specif.id === specification.id) {
              specif.text = specification.text
            }
          })
        }
      })
    },
    removeSpecification (listId, specification) {
      this.lists.forEach((list) => {
        if (list.id === listId) {
          list.specifications = list.specifications.filter(p => p.id !== specification.id)
        }
      })
    },
    createList (list) {
      this.lists.push(list)
    },
    chooseEditPage () {
      this.isEditPage = true
      this.isEvaluationPage = false
    },
    chooseEvaluationPage () {
      this.isEvaluationPage = true
      this.isEditPage = false
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  font-family: sans-serif;
  font-size: 14px;
}

.wrapper {
  margin: 0 auto;
  width: 600px;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.main {
  margin-bottom: 50px;
  flex: 1;
}

.footer {
  position: fixed;
  margin-top: auto;
  bottom: 0;
  min-width: 600px;
  display: flex;
  justify-content: space-between;
}

.footer-page {
  width: 50%;
  min-height: 30px;
  text-align: center;
  border: 2px solid black;
  border-radius: 7px;

  background-color: teal;
  color: white;
  font-weight: bold;
  cursor: pointer;
}
</style>
