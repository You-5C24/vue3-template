<template>
  <svg class="icon" aria-hidden="true" :style="{ width: `${iconWidth}px`, height: `${iconHeight}px` }" @click.stop="handleClick">
    <use :xlink:href="iconTag"></use>
  </svg>
</template>

<script lang="ts">
export default {
  label: 'iconfont symbol',
  name: 'ISymbol'
};
</script>

<script setup lang="ts">
import { computed } from 'vue';
let emits = defineEmits(['handleClick']);
let props = defineProps({
  // eslint-disable-next-line vue/require-default-prop
  iconClass: String,
  iconWidth: {
    type: [Number, String],
    default: 16
  },
  iconHeight: {
    type: [Number, String],
    default: 16
  }
});
let iconTag = computed(() => `#${props.iconClass}`);

function handleClick() {
  emits('handleClick');
}
</script>

<style scoped>
.icon {
  /* width: 16px; */
  /* height: 16px; */
  /* vertical-align: -0.15em; */
  fill: currentColor;
  overflow: hidden;
}
</style>
