<template>
  <div class="wrapper">
    <div class="main">
      <router-view></router-view>
    </div>
    <div class="footer noprint">
      <router-link class="footer-page" to="/">Редактирование</router-link>
      <router-link class="footer-page" to="/evaluation">Оценка требований</router-link>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  methods: {
    ...mapActions({
      fetchLists: 'specificationsLists/fetchLists'
    })
  },
  computed: {
    ...mapState({
      lists: state => state.specificationsLists.lists
    })
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
