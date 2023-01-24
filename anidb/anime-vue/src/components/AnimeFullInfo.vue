<template>
  <anime-main-info-vue
    :key="animeInfo.mal_id"
    :img-src="animeInfo.images?.jpg.large_image_url"
    :title="animeInfo.title"
    :type="animeInfo.type"
    :dateAired="animeInfo.aired?.from"
    :status="animeInfo.status"
    :score="animeInfo.score"
    :rating="animeInfo.rating"
    :duration="animeInfo.duration"
    :episodes="animeInfo.episodes"
    :popularity="animeInfo.popularity"
  />
  <anime-synopsis-vue :key="animeInfo.mal_id" :synopsis="animeInfo.synopsis" />
</template>

<script>
import AnimeMainInfoVue from "@/components/AnimeMainInfo.vue";
import AnimeSynopsisVue from "./AnimeSynopsis.vue";
export default {
  name: "AnimeFullInfo",
  components: {
    AnimeMainInfoVue,
    AnimeSynopsisVue,
  },
  props: {
    animeInfo: {
      type: Array,
      default: () => [],
    },
    animeImg: {
      type: Array,
      default: () => [],
    },
  },

};
</script>

<style lang="scss" scoped>
@import "@/assets/style/components/AnimeFullInfo.scss";
</style>
