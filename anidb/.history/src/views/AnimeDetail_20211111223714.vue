<template>
     <div>
    <h2>{{anime.title}}</h2>
    <p>{{ movie.start_date }}</p>
    <img :src="anime.pictures" alt="Movie Poster" class="featured-img" />
    <p>{{ anime.rating }}</p>
  </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue';
export default {
  setup () {
    const anime = ref({});
    onBeforeMount(() => {
      fetch(`https://api.jikan.moe/v3/anime/`)
        .then(response => response.json())
        .then(data => {
          anime.value = data;
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