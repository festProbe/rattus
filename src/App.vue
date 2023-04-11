<template>
  <div class="wrapper">
    <specifications-lists
      :lists="lists"
      @create="createSpecification"
      @editSpecification="editSpecification"
      @remove="removeSpecification"
      @createList="createList"
    />
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
      }]
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
}

.hidden {
  display: none;
}
</style>
