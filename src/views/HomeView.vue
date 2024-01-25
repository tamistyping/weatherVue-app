<script setup>
import { ref } from "vue"
import axios from "axios"
import { useRouter } from "vue-router";

import tornadoImage from '@/assets/tornado.png'

const router = useRouter()
const showCity = (searchResult) => {
  const [city, county] = searchResult.place_name.split(",")
  console.log(searchResult);
  router.push({
    name: 'city',
    params: { county: county.replaceAll(" ", ""), city: city },
    query: {
      lat: searchResult.geometry.coordinates[1],
      lon: searchResult.geometry.coordinates[0],
      preview: true,
    }
  })
}

const searchQuery = ref("")
const queryTimeout = ref(null)
const apiKey = "pk.eyJ1IjoidGFtaXN0eXBpbmciLCJhIjoiY2xybmZrcnZpMDliMjJybG1mMTVqNnl6MiJ9.P_W3PKj4a85w5BrMffZ5tw"
const searchResults = ref(null)
const searchError = ref(null)

const getSearchResults = () => {
  clearTimeout(queryTimeout.value)
  queryTimeout.value = setTimeout(async () => {
    if (searchQuery.value !== '') {
      try {
        const result = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${searchQuery.value}.json?access_token=${apiKey}&types=place`)
        searchResults.value = result.data.features
      } catch {
        searchError.value = true
      }
      return
    }
    searchResults.value = null
  }, 300)
}

</script>

<template>
  <main class="container text-white">
    <div class="pt-4 mb-8 relative flex flex-col items-center">
      <div class="flex justify-center">
        <input type="text" v-model="searchQuery" @input="getSearchResults" style="width: 50vmin;" placeholder="Type a City" class="py-2 px-2 bg-white border focus:border-weather-secondary focus:outline-none">
      </div>
      <div class="flex justify-center">
        <ul style="width: 50vmin;" class="absolute bg-weather-secondary text-white shadow-md py-2 px-1 top-[66]" v-if="searchResults">
          <p v-if="searchError">This city doesn't exist. Please try again.</p>
          <p v-if="!serverError && searchResults.length === 0">No results 😞 Try another city close by!</p>
          <template v-else>
            <li
              v-for="searchResult in searchResults" 
              :key="searchResult.id" 
              class="py-2 cursor-pointer"
              @click="showCity(searchResult)">
              {{ searchResult.place_name }}
            </li>
          </template>
        </ul>
      </div>
      <img class="mt-4 tornado-animation" :src="tornadoImage" alt="tornado">
    </div>
  </main>
</template>

<style scoped>
@keyframes moveOffScreen {
  0% {
    transform: translateX(-70vw);
  }
  100% {
    transform: translateX(70vw);
  }
}

.tornado-animation {
  animation: moveOffScreen 5s linear infinite; /* Adjust the duration and timing function as needed */
}
</style>
