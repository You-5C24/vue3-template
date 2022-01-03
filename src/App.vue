<template>
  <router-view></router-view>
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
#app {
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
