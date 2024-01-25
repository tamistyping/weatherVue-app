<template>
  <div class="flex flex-col min-h-screen weatherappbg">
    <SiteNavigation />
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import SiteNavigation from "./components/SiteNavigation.vue"
</script>

<style lang="scss" scoped>
  .weatherappbg {
    background: url('@/assets/weatherappbg.jpeg') center center no-repeat;
    background-size: cover;
  }
</style>