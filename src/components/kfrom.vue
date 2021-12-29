<template>
  <div class="wrapper">
    <slot></slot>
  </div>
</template>

<script>
export default {
  provide() {
    return {
      form: this,
    };
  },
  components: {},
  props: {
      model:{type:Object,default:()=>{}},
      rules:{type: Object}
  },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style  scoped>
/* .wrapper{} */
</style>