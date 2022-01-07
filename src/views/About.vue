<template>
    <k-table :data="tableData">
      <k-table-column sortable prop="date" label="日期"></k-table-column>
      <k-table-column sortable prop="name" label="姓名"></k-table-column>
      <k-table-column prop="address" label="地址"></k-table-column>
      <!-- 自定义模板 -->
      <k-table-column label="操作">
        <template v-slot:default="scope">
          <button @click="handleClick(scope.$index,scope.row)" type="text" size="small">查看</button>
        </template>
    </k-table-column>
    </k-table>
</template>

<script>
import kTable from "@/components/table/kTable";
import KTableColumn from "@/components/table/KTableColumn";
export default {
  components: {
    kTable,
    KTableColumn,
  },
  props: {},
  data() {
    return {
      tableData: [
        
        {
          date: "2016-05-04",
          name: "刘磊",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-02",
          name: "焦龙超",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-01",
          name: "刘益辰",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "刘益林",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  watch: {},
  computed: {},
  methods: {
    handleClick(index,row){
     console.log(index,row) 
    }
  },
  created() {},
  mounted() {
  },
};
</script>
<style  scoped>
/* .wrapper{} */
</style>