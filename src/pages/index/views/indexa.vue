<template>
  <div id="div">
    <!-- <div class="block">
      <span class="demonstration">默认</span>
      <el-slider v-model="value1"></el-slider>
    </div>
    <div class="block">
      <span class="demonstration">自定义初始值</span>
      <el-slider v-model="value2"></el-slider>
    </div>
    <div class="block">
      <span class="demonstration">隐藏 Tooltip</span>
      <el-slider v-model="value3" :show-tooltip="false"></el-slider>
    </div>
    <div class="block">
      <span class="demonstration">格式化 Tooltip</span>
      <el-slider v-model="value4" :format-tooltip="formatTooltip"></el-slider>
    </div>
    <div class="block">
      <span class="demonstration">禁用</span>
      <el-slider v-model="value5" disabled></el-slider>
    </div>-->

    <el-button>dsasadas</el-button>
    <div id="imgTooles_1">
      <img src="@/assets/logo.png" data-original="@/assets/logo.png" alt />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 0,
      value2: 50,
      value3: 36,
      value4: 48,
      value5: 42
    };
  },
  methods: {
    formatTooltip(val) {
      return val / 100;
    },
    initImageTools() {
      let vue = this,
        div_1 = document.getElementById("imgTooles_1");
      if (div_1) {
        if (vue.viewer_1) {
          vue.viewer_1.destroy();
        }
        // vue.viewer_1 = new Viewer(div_1, {
        //   url: "data-original" //图片展示的路径
        // });
        vue.viewer_1 = new Viewer(div_1);
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      //初始化
      this.initImageTools();
    });
  }
};
</script>
<style scoped>
</style>
