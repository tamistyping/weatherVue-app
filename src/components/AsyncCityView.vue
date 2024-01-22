<template>
    <div>

    </div>
</template>

<script setup>
import axios from 'axios'
import { useRoute } from 'vue-router';

const router = useRoute()

const getWeatherData = async () => {
    try {
        const weatherData = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${router.query.lat}&lon=${router.query.lon}&appid=b31ff412fa9480d19e05dcc0c7bb9c34`
        )
        return weatherData.data
    } catch (err) {
        console.log(err);
    }
}


const weatherData = await getWeatherData();
console.log(weatherData);


</script>