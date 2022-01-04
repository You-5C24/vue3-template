<template>
  <n-message-provider>
    <n-loading-bar-provider>
      <router-view></router-view>
    </n-loading-bar-provider>
  </n-message-provider>
</template>

<script lang="ts">
export default {
  name: 'App'
};
</script>

<script setup lang="ts"></script>

<style lang="scss">
html,
body,
#app,
.n-config-provider {
  background-color: #fff;
  height: 100%;
  width: 100%;
  margin: 0;
  > section {
    height: 100%;
    width: 100%;
  }
}
</style>
