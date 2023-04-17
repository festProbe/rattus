<template>
  <div class="wrapper">
    <div class="main">
      <router-view></router-view>
    </div>
    <div class="footer noprint">
      <div class="footer-page">Редактирование</div>
      <div class="footer-page">Оценка требований</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      lists: [{
        id: Date.now().toString(),
        listName: 'Требования для очень продуктивной компании',
        specifications: []
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
    },
    async fetchLists () {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=3')
        this.lists[0].specifications = response.data.map(post => {
          return {
            ...post,
            text: post.body
          }
        })
        console.log(response)
      } catch (e) {
        alert('ошибка')
      }
    }
  },
  mounted () {
    this.fetchLists()
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
  margin: auto auto 0 auto;
  bottom: 0;
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.footer-page {
  min-width: 50%;
  min-height: 30px;
  text-align: center;
  border: 2px solid black;
  border-radius: 7px;

  background-color: teal;
  color: white;
  font-weight: bold;
  cursor: pointer;
}
@media print {
  .noprint {
    display: none !important;
  }
}
</style>
