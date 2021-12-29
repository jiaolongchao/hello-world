<template>
  <div class="wrapper">
    <label v-if="label">{{ label }}</label>
    <slot></slot>
    <p v-if="error">{{ error }}</p>
    <p>{{form.rules[prop]}}</p>
  </div>
</template>

<script>
export default {
  inject:['form'],
  components: {},
  props: {
      label:{
          type: String,
      },
      prop:{
          type:String
      }

  },
  data() {
    return {
      error: "姓名错了",
    };
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