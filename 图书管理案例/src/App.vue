<template>
  <div>
    <!-- 图书添加书籍组件 -->
    <HanderAdd @findFn="findBook" @addFn="addbook" />
    <!-- 图书 BookList 组件 -->
    <BookList :list="list" @delFn="delbook" @detailsFn="delDetailsFn" />
  </div>
</template>

<script>
import HanderAdd from "./components/HanderAdd.vue";
import BookList from "./components/BookList.vue";
export default {
  components: {
    HanderAdd,
    BookList,
  },
  data() {
    return {
      list: [],
      bookname: "",
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList(params = {}) {
      this.$axios({
        url: "/api/getbooks",
        params: params,
      }).then((res) => {
        this.list = res.data.data;
      });
    },
    findBook(val) {
      this.bookname = val;
      const book = this.bookname;
      const params = { bookname: book };
      this.getList(params);
    },
    addbook(val) {
      this.$axios({
        url: "/api/addbook",
        method: "POST",
        data: {
          ...val,
          appkey: "7250d3eb-18e1-41bc-8bb2-11483665535a",
        },
      }).then((res) => {
        alert(res.data.msg);
        if (res.data.status == 201) {
          this.getList();
        }
      });
    },
    delbook(id) {
      this.$axios({
        url: "/api/delbook",
        params: { id },
      }).then(() => {
        this.getList();
      });
    },
    delDetailsFn(id) {
      this.$axios({
        url: "/api/getbooks",
        params: { id },
      }).then((res) => {
        const info = res.data.data && res.data.data[0];
        alert(
          `作者：${info.author}; 出版社：${info.publisher}; 书名：${info.bookname}`
        );
      });
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: #721c24;
}
h1 {
  text-align: center;
  color: #333;
  margin: 20px 0;
}
table {
  margin: 0 auto;
  width: 800px;
  border-collapse: collapse;
  color: #004085;
}
th {
  padding: 10px;
  background: #cfe5ff;

  font-size: 20px;
  font-weight: 400;
}
td,
th {
  border: 1px solid #b8daff;
}
td {
  padding: 10px;
  color: #666;
  text-align: center;
  font-size: 16px;
}
tbody tr {
  background: #fff;
}
tbody tr:hover {
  background: #e1ecf8;
}
.info {
  width: 900px;
  margin: 50px auto;
  text-align: center;
}
.info input {
  width: 100px;
  height: 25px;
  outline: none;
  border-radius: 5px;
  border: 1px solid #b8daff;
  padding-left: 5px;
}
.info button {
  width: 60px;
  height: 25px;
  background-color: #004085;
  outline: none;
  border: 0;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
}
.add {
  margin-left: 10px;
}
</style>