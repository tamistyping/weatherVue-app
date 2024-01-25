<template>
    <div class="flex flex-col flex-1 items-center">
        <div class="flex flex-col items-center text-black py-10">
            <p class="text-2xl drop-shadow-md text-black">{{ getDayOfWeek() }}</p>
            <div class="flex items-center">
                <h1 class="text-5xl mb-3 text-black drop-shadow-md">{{ route.params.city }}</h1>
                <img class="mb-6" :src="`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`" alt="icon">
            </div>
            <p class="text-5xl mb-5 text-black drop-shadow-lg">{{ Math.round(weatherData.main.temp) }}&deg; / {{
                weatherData.weather[0].description }}</p>
        </div>
        <hr class="border-white border-opacity-10 border w-full">
        <router-link to="/" class="bg-white p-1.5 mt-3">Back to Search!</router-link>
    </div>
</template>

<script setup>
import axios from 'axios'
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()


const getWeatherData = async () => {
    try {
        const weatherData = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${route.query.lat}&lon=${route.query.lon}&appid=b31ff412fa9480d19e05dcc0c7bb9c34&units=metric`
            )
            console.log(weatherData);
            return weatherData.data
        } catch (err) {
            console.log(err);
        }
    }
    
const getDayOfWeek = () => {
    const options = { weekday: 'long' };
    const dayOfWeek = new Date().toLocaleDateString('en-GB', options);
    return dayOfWeek;
}

const weatherData = await getWeatherData();
console.log(weatherData);


</script>