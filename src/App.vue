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
        this.textMatched = this.listAmTiet.filter( 
          text => {
            let textLowerCase = text.toLowerCase();
            let search = this.search.toLowerCase();
            
            let slug_text = this.slug(textLowerCase);
            return slug_text.includes(search)
          }
        )
      }
    },
    slug(str) {
      str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
      str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
      str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
      str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
      str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
      str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
      str = str.replace(/đ/g, "d");
      str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
      str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
      str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
      str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
      str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
      str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
      str = str.replace(/Đ/g, "D");
      return str;
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
