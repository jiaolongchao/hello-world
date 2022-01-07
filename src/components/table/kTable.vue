
<script>
export default {
  components: {},
  props: {
    data: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
      orderFiled: "",
      orderBy: "desc",
    };
  },
  watch: {},
  created() {
    this.columns.forEach((column) => {
      if (column.hasOwnProperty("sortable")) {
        if (column.prop && !column.orderFiled) {
          this.sort(column.prop, this.orderBy)
        }
      }
    });
  },
  methods:{
      toggelFild(fild){
          const by = this.orderBy == 'desc'  ? 'asc' : 'desc'
          this.sort(fild,by)
      },
      sort(filed,by){
          this.orderFiled = filed;
          this.orderBy = by;
          this.data.sort( (a ,b ) => {
              const v1 = a[this.orderFiled]
              const v2 = b[this.orderFiled]
              if(typeof v1 == "number"){
                  return this.orderBy == 'desc' ? (v2  - v1) : (v1-v2)
              }else{
                  return this.orderBy == 'desc' ? v2.localeCompare(v1): v1.localeCompare(v2)
              }
          })
      }
  },
  computed: {
    columns() {
      //可以从内部的KtableColumn定义中获取prop和label
      return this.$slots.default.map(({ data: { attrs, scopedSlots } }) => {
        const column = { ...attrs };
        if (scopedSlots) {
          //自定义模板
          column.renderCell = (row, i) => (
            <div>{scopedSlots.default({ row, $index: i })}</div>
          );
        } else {
          //设置prop的情况
          column.renderCell = (row) => <div>{row[column.prop]}</div>;
        }
        return column;
      });
    },
    // rows() {
    //   return this.data.map((item) => {
    //     const ret = {};
    //     this.columns.forEach(({ prop }) => {
    //       ret[prop] = item[prop];
    //     });
    //     return ret;
    //   });
    // },
  },
  mounted() {},
  render() {
    return (
      <table>
        <thead>
          <tr>
            {this.columns.map((column) => {
                if(column.hasOwnProperty('sortable') && column.prop){
                    let orderArrow = '⬆⬇'
                    if(this.orderFiled == column.prop){
                        orderArrow = this.orderBy == 'desc' ? '⬇' : '⬆'
                    }
                    return <th key={column.label} onClick={() => this.toggelFild(column.prop)}>{column.label}<span>{orderArrow}</span></th>
                }else{
                    <th key={column.label}>{column.label}</th>
                }
            })}
          </tr>
        </thead>
        <tbody>
          {this.data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {this.columns.map((column, columnIndex) => (
                <td key={columnIndex}>{column.renderCell(row, rowIndex)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  },
};
</script>
