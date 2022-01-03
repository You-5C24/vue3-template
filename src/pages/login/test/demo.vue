<template>
  <div class="text-color-999 text-18 mt-12 text-center">字符串长度: {{ infoStore.fontLen }}</div>
</template>

<script lang="ts">
export default {
  name: 'TestDemo'
};
</script>

<script setup lang="ts">
import { useInfoStore } from '@/store/info';

let infoStore = useInfoStore();
</script>

<style lang="scss" scoped></style>
