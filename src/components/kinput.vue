<template>
  <div class="kinput">
    <input :type="type" :value="value" @input="onInputClick" v-bind="$attrs"/>
  </div>
</template>

<script>
export default {
    inheritAttrs:false,
  name: "kinput",
  components: {},
  props: {
    type: {
      type: String,
      default: "text",
      require: true,
    },
    value: {
      type: String
    },
  },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {
    onInputClick(event) {
        this.$emit('input',event.target.value)
    },
  },
  created() {},
  mounted() {},
  //   provide(){}
  //   inject:['']
};
</script>
<style  scoped>

</style>