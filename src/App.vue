<script setup>
import navigationmenu from './components/menus/navigationmenu.vue';

</script>

<template>
  <div class="container flex flex-col mx-auto space-y-4">
      <navigationmenu />
      <RouterView />
  </div>

</template>