<template>
  <div id="app">
    <h1>Âm tiết theo vần</h1>
    <input type="text" placeholder="gõ từ cần tìm" v-model.trim="search" @input="filterSearch">
    <div class="result" v-if="search">
      <ul v-if="textMatched.length">
        <li v-for="(find, index) in textMatched" :key="index">{{ find }}</li>
      </ul>
      <span v-show="! textMatched.length">Không tìm thấy từ khớp!</span>
    </div>
  </div>
</template>

<script>
import amtiet from './assets/amtiet.json';

export default {
  name: 'App',
  data () {
    return {
      search: '',
      listAmTiet: amtiet,
      textMatched: []
    }
  },
  methods: {
    filterSearch() {
      if (this.search) {
        this.textMatched = this.listAmTiet.filter( text => text.toLowerCase().includes(this.search.toLowerCase()) )
      }
    }
  }
}
</script>

<style>
*, *::before, *::after {
  box-sizing: border-box;
}
body, html {
  font-size: 16px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  line-height: 1.6;
}
body {
  padding: 15px;
}

#app {
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
}

input {
  width: 100%;
  border: 1px solid #ccc;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 1rem;
  padding: 10px;
}

.result {
  width: 100%;
  margin: 0 auto;
  margin-top: 18px;
  background: #f1f1f1;
  border-radius: 5px;
  padding: 10px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  white-space: pre-wrap;
}
ul {
  columns: 2;
  -webkit-columns: 2;
  -moz-columns: 2;
}
</style>
