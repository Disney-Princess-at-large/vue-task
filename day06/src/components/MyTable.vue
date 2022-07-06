<template>
  <div>
      <table border="1">
          <thead>
              <tr>
                  <th>序号</th>
                  <th>姓名</th>
                  <th>年龄</th>
                  <th>头像</th>
              </tr>
          </thead>
          <thead>
              <tr v-for="(item,index) in arr" :key="index">
                  <td>{{index+1}}</td>
                  <td> <slot :row="item" name="Name">{{item.name}}
                    </slot></td>
                  <td>
                    <!-- {{item.age}} -->
                    <slot :row="item" name="age">{{item.age}}
                    </slot>
                    </td>
                  <td>
                    <slot :row="item" name="toux">
                        <!-- {{item.headImgUrl}} -->
                    </slot>
                    <!-- <img style="width: 100px;" :src="item.headImgUrl" alt=""> -->
                    </td>
              </tr>
          </thead>
      </table>
  </div>
</template>

<script>
export default {
props:{
    arr:{
        type:Array,
        default:()=>([])
    }
}
}
</script>