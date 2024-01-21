<script setup>
import { ref } from "vue"
import axios from "axios"

const searchQuery = ref("")
const queryTimeout = ref(null)
const apiKey = "pk.eyJ1IjoidGFtaXN0eXBpbmciLCJhIjoiY2xybmZrcnZpMDliMjJybG1mMTVqNnl6MiJ9.P_W3PKj4a85w5BrMffZ5tw"
const searchResults = ref(null)

const getSearchResults = () => {
  clearTimeout(queryTimeout.value)
  queryTimeout.value = setTimeout(async () => {
    if(searchQuery.value !== ''){
      const result = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${searchQuery.value}.json?access_token=${apiKey}&types=place`)
      searchResults.value = result.data.features
      return
    }
    searchResults.value = null
  }, 300)
}
</script>

<template>
  <main class="container text-white">
    <div class="pt-4 mb-8 relative">
      <input type="text" v-model="searchQuery" @input="getSearchResults" placeholder="Type a City" class="py-2 px-2 w-full bg-transparent 
      border focus:border-weather-secondary focus:outline-none">
      <ul class="absolute bg-weather-secondary text-white w-full shadow-md py-2 px-1 top-[66]" v-if="searchResults">
        <li v-for="searchResult in searchResults" :key="searchResult.id" class="py-2 cursor-pointer">
        {{ searchResult.place_name }}
      </li>
      </ul>
    </div>
  </main>
</template>