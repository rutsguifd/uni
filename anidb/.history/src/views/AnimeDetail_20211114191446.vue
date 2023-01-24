<template>
  <div>
    <!-- Title -->
    <h1>{{ anime.title }}</h1>
    <!-- Image -->
    <img :src="anime.image_url" :alt="anime.title + 'Poster'" />
    <!-- Realese Date -->
    <h2>Realese Date: {{ anime.aired.string }}</h2>
    <!-- Demographics -->
    <h4 v-for="(dem, ind) in anime.demographics" :key="ind">
      Demographics:
      <a :href="anime.demographics[ind].url">{{
        anime.demographics[ind].name
      }}</a>
    </h4>
    <!-- Episodes -->
    <h4>Episodes: {{anime.Episodes}}</h4>
    <!-- Duration -->
    <h4>Duration: {{anime.duration}}</h4>
    <!-- Genres -->
    <h4 class="links">
      Genres: 
      <p v-for="(gen, ind) in anime.genres" :key="ind">
        <a :href="anime.genres[ind].url">{{ anime.genres[ind].name}}</a>
      </p>
    </h4>
    
    
    <!-- External Links -->
    <h4 class="links">
      Links: 
      <p v-for="(ext, ind) in anime.external_links" :key="ind">
        <a :href="anime.external_links[ind].url">{{ anime.external_links[ind].name}}</a>
      </p>
    </h4>
    <!-- End -->
  </div>
</template>

<script>
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    const anime = ref({});
    onBeforeMount(() => {
      fetch(`https://api.jikan.moe/v3/anime/${route.params.id}`)
        .then((response) => response.json())
        .then((data) => {
          anime.value = data;
          console.log(anime.value);
        });
    });
    return {
      anime,
    };
  },
};
</script>

<style lang="scss" scoped>
a{
  color: red;
  text-decoration: underline;
}
.links{
  display: flexbox;
  p{
    margin-left: 10px;
  }
}
</style>