<template>
  <div class="home">
    <h1 @click="showNotice()">表单</h1>
    <kfrom :model='model' :rules='rules'>
      <kfromitem label="用户名" prop='name'>
        <kinput v-model="value" placeholder='请输入姓名'/>
      </kfromitem>
    </kfrom>
    <div>
      <countdown :end-time="end" />
    </div>
    <!-- {{counter}} -->
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import countdown from "@/components/countdown/countdown.vue";
import kinput from "@/components/kinput.vue";
import kfromitem from '@/components/kfromitem.vue';
import kfrom from '@/components/kfrom.vue';
// import Notice from '@/components/Notice.vue';
import create from '@/utils/utils.js'
export default {
  name: "Home",
  components: {
    HelloWorld,
    countdown,
    kinput,
    kfromitem,
    kfrom,
    // Notice
  },
  computed: {
    counter() {
      return this.$store.state.counter;
    },
  },
  data() {
    return {
      end: Date.now() + 50 * 1000,
      value:"",
      model:{name:"蒸馏水"},
      rules:{name:{message:'粗五'}}
    };
  },
  created() {
  },
  methods:{
    showNotice(){
     const notice = create(this.$notice,{
        title:'太年逼了'
      })
      notice.show()
    }
  }
};
</script>
