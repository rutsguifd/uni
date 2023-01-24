<template>
    <div>
        <h1>{{ anime.title }}</h1>
        <img :src="anime.image_url" :alt="anime.title+'Poster'">
        <h2>Realese Date: {{ anime.aired.string }}</h2>
        <p>Genre: <a :href="anime.demographics[0].url">{{anime.demographics[0].name}}</a></p>
        <p>Duration: {{anime.duration}}</p>
    </div> 
</template>

<script>
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
export default {
  setup () {
    const route = useRoute();
    const anime = ref({});
    onBeforeMount(() => {
       fetch(`https://api.jikan.moe/v3/anime/${route.params.id}`)
        .then(response => response.json())
        .then(data => {
          anime.value = data;
          console.log(anime.value)
        });
    });
    return {
      anime
    }
  }
}
</script>

<style lang="scss" scoped>

</style>