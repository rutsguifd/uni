<template>
  <main-masterpage-vue>
    <main>
     
      <div>
    

        <anime-card-list-vue :animeListData="topAnimes" />
      </div>
    </main>
  </main-masterpage-vue>
</template>

<script>
import AnimeCardListVue from "@/components/AnimeCardList.vue";

import MainMasterpageVue from "@/masterpages/MainMasterpage.vue";

export default {
  name: "Home",
  components: {
    AnimeCardListVue,
    
    MainMasterpageVue,
  },


  computed: {
    topAnimes() {
      console.log(this.$store.state.topAnimeList);
      return this.$store.state.topAnimeList;
    },
  },

  mounted() {
    this.$store.dispatch("fetchTopAnimeList");
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/pages/home.scss";
</style>
