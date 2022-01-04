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
import { zhCN, dateZhCN } from 'naive-ui';
</script>

<style lang="scss" scoped></style>
