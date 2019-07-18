<template>
  <div>{{message}}</div>
</template>
<script>
export default {
  data() {
    return {
      message: "个人中心"
    };
  },
  methods: {
    async a() {
      //模拟请求
      var a = await this.$api.ssp.testMock('','post');
      console.log(a);
    }
  },
  mounted() {
    this.a(0);
  }
};
</script>
<style scoped>
</style>
