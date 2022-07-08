<template>
  <div>
    <MyTable :arr="list">
    <template #header>
        <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>
      <!-- scope的值: {row: obj, index: 索引值} -->
      <template #body="scope">
        <td>{{ scope.row.id }}</td>
        <td>{{ scope.row.goods_name }}</td>
        <td>{{ scope.row.goods_price }}</td>
        <input
          class="tag-input form-control"
          style="width: 100px;"
          type="text"
          v-model="scope.row.inputValue"
          v-if="scope.row.inputShow"
          @blur="scope.row.inputShow = false"
          @keydown.enter="enterFn(scope.row)"
          @keydown.esc="scope.row.inputValue = ''"
          />
          <button 
          v-else 
          style="display: block;" 
          class="btn btn-primary btn-sm add-tag"
          @click="scope.row.inputShow = true"
          >+Tag</button>
        <span v-for="(str, ind) in scope.row.tags" :key="ind"
            class="badge badge-warning"
        >
            {{ str }}
        </span>
        <!-- <td>
            {{ scope.row.tags }}
        </td> -->
        <td>
          <button class="btn btn-danger btn-sm" @click="removeBtn(scope.row.id)"
          >删除</button>
        </td>
      </template>
      </MyTable>
  </div>
</template>

<script>
    import MyTable from '../components/MyTable.vue'
    export default {
        components:{MyTable},
        data(){
            return{
                list:[]
            }
        },
        created(){
            this.getList()
        },
        methods:{
            getList(){
                this.$axios({
                url:"/api/goods"
            }).then((res) => {
                res.data.data.forEach(ele => {
                    ele.inputShow = false;
                });
                this.list = res.data.data
            })
            },
            removeBtn(id){
                let index = this.list.findIndex(obj => obj.id === id)
                this.list.splice(index, 1)
            },
            enterFn(obj){
                if (obj.inputValue.trim().length === 0) {
                        return alert('请输入数据')                        
                }
                obj.tags.push(obj.inputValue) // 表单里的字符串状态tags数组
                obj.inputValue = ""                
            }
        }
    }
</script>

<style lang="less" scoped>
.my-goods-list {
  .badge {
    margin-right: 5px;
  }
}
</style>