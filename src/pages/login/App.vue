<template>
  <div id="app">
    <div class="page-content">
      <div>
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
      <div style="clear:both"></div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
