<template>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN">
    <router-view></router-view>
  </n-config-provider>
</template>

<script lang="ts">
export default {
  name: 'FrameBody'
};
</script>

<script setup lang="ts">
import { zhCN, dateZhCN, useMessage, useLoadingBar } from 'naive-ui';

// 挂在message到window上，用于setup外使用
declare global {
  interface Window {
    $message: any;
    $loadingBar: any;
  }
}
window.$message = useMessage();
window.$loadingBar = useLoadingBar();
</script>

<style lang="scss" scoped></style>
