<template>
  <section>
    <div class="text-48 text-color-DB7093 font-semibold text-center mt-30">welcome to 5C24 vue3 template</div>
    <div class="text-24 text-center mt-24 text-color-666">the identity: {{ infoStore.identity }}</div>
    <demoComponent />
    <div class="text-center mt-16">
      <button @click="updateIdentity">点点点</button>
    </div>
  </section>
</template>

<script lang="ts">
import demoComponent from './test/demo.vue';
export default {
  name: 'LoginComponent'
};
</script>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useInfoStore } from '@/store/info';

let route = useRoute();

console.log(route.meta);

console.log(import.meta.env.VITE_APP_WEB_URL);

const infoStore = useInfoStore();

const updateIdentity = () => {
  console.log(infoStore);

  infoStore.changeIdentity('teacher');
};
</script>

<style lang="scss" scoped></style>
