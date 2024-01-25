<template>
    <header class="sticky top-0 bg-weather-primary shadow-lg">
        <nav class="flex items-center justify-center text-white py-6">
            <RouterLink :to="{ name: 'home' }" class="flex items-center gap-3">
                <div class="flex flex-col items-center">
                    <p class="text-6xl">WeatherVue</p>
                </div>
            </RouterLink>
        </nav>
    </header>
</template>


<script setup>
import { RouterLink } from "vue-router"
</script>

