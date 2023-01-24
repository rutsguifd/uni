<template>
  <div class="anime-card-list-box">
    <anime-card-vue
      v-for="item in animeListData"
      :key="item.mal_id"
      :img-src="item.images.jpg.large_image_url"
      :title="item.title"
      :episodes="item.episodes"
      :score="item.score"
      @open-anime-detail="onAnimeDetail(item.mal_id)"
    />
  </div>
</template>

<script>
import AnimeCardVue from "./AnimeCard.vue";
export default {
  name: "AnimeCardList",
  components: {
    AnimeCardVue,
  },
  props: {
    animeListData: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    onAnimeDetail(itemId) {
      this.$router.push({
        name: "anime",
        params: { id: itemId },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/components/AnimeCardList.scss";
</style>
