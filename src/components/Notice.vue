<template>
  <div class="wrapper" v-if="isShow">
    <p>{{ title }}</p>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    title: {
      type: String,
    },
  },
  data() {
    return {
      duration: 1000,
      isShow: false,
    };
  },
  watch: {},
  computed: {},
  methods: {
    show() {
      this.isShow = true;
      setTimeout(this.hide, this.duration);
    },
    hide() {
      this.isShow = false;
      this.remove();
    },
  },
  created() {},
  mounted() {},
};
</script>
<style scoped>
/* .wrapper{} */
</style>