<script setup>
import { ref } from "vue"

</script>

<template>
  <main class="container text-white">
    <div class="pt-4 mb-8 relative">
      <input type="text" v-model="searchQuery" placeholder="Type a City" class="py-2 px-2 w-full bg-transparent 
      border focus:border-weather-secondary focus:outline-none">
    </div>
  </main>
</template>

