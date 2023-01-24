<template>
  <div>
    <h1>{{ anime.title }}</h1>
    <img :src="anime.image_url" :alt="anime.title + 'Poster'" />
    <h2>Realese Date: {{ anime.aired.string }}</h2>
    <p v-for="(dem, ind) in anime.demographics" :key="ind">
      Genre:
      <a :href="anime.demographics[ind].url">{{
        anime.demographics[ind].name
      }}</a>
    </p>
    <div class="links">
      Links: 
      <p v-for="(ext, ind) in anime.external_links" :key="ind">
        <a :href="anime.external_links[ind].url">{{ anime.external_links[ind].name}}</a>
      </p>
    </div>
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