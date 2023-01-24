<template>
  <div>
    <!-- Title -->
    <h1>{{ anime.title }}</h1>
    <!-- Image -->
    <img :src="anime.image_url" :alt="anime.title + 'Poster'" />
    <!-- Realese Date -->
    <h2>Realese Date: {{ anime.aired.string }}</h2>
    <!-- Score -->
    <h4>Score: {{anime.score}}<span> (Scored by {{anime.scored_by}} viewers)</span></h4>
    <!-- Popularity Rank -->
    <h4>Popularity Rank: {{anime.popularity}}</h4>
    <!-- Age Rating -->
    <h4>Age Rating: {{anime.rating}}</h4>
    <!-- Demographics -->
    <h4 v-for="(dem, ind) in anime.demographics" :key="ind">
      Demographics:
      <a :href="anime.demographics[ind].url">{{
        anime.demographics[ind].name
      }}</a>
    </h4>
    <!-- Episodes -->
    <h4>Episodes: {{anime.episodes}}</h4>
    <!-- Status -->
    <h4>Status: {{anime.status}}</h4>
    <!-- Duration -->
    <h4>Duration: {{anime.duration}}</h4>
    <!-- Genres -->
    <h4 class="links">
      Genres: 
      <p v-for="(gen, ind) in anime.genres" :key="ind">
        <a :href="anime.genres[ind].url">{{ anime.genres[ind].name}}</a>
      </p>
    </h4>
    <!-- Synopsis -->
    <h5>{{anime.synopsis}}</h5>
    <!-- Trailer -->
    <iframe width="330" height="200"
    :src="anime.trailer_url"
    frameborder="0"
    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
</iframe>
    <!-- Ext Info -->
    More info:
    <!-- Source -->
    <h4>Source: {{anime.source}}</h4>
    <!-- Producers -->
    <h4 class="links">
      Producers: 
      <p v-for="(prod, ind) in anime.producers" :key="ind">
        <a :href="anime.producers[ind].url">{{ anime.producers[ind].name}}</a>
      </p>
    </h4>
    <!-- Studios -->
    <h4 class="links">
      Release Studios: 
      <p v-for="(st, ind) in anime.studios" :key="ind">
        <a :href="anime.studios[ind].url">{{ anime.studios[ind].name}}</a>
      </p>
    </h4>
    <!-- External Links -->
    <h4 class="links">
      Get More Info From Other Sources: 
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
*{
  margin-left: 5px;
}
a{
  color: red;
  text-decoration: underline;
}
h4{
  display: flexbox;
  p{
    margin-left: 10px;
  }
  border: blue solid;
  margin: 10px;
}
</style>