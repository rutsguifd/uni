<template>
  <main-masterpage-vue>
    <main>
      <div class="main-box">
        <anime-card-list-vue :animeListData="searchAnimes" />
      </div>
    </main>
  </main-masterpage-vue>


</template>

<script>
import AnimeCardListVue from "@/components/AnimeCardList.vue";
import MainMasterpageVue from "@/masterpages/MainMasterpage.vue";



export default {
  name: "Search",
  components: {
    AnimeCardListVue,
 
    MainMasterpageVue,
  },

  computed: {
    searchAnimes() {
      console.log(this.$store.state.animeList);
      return this.$store.state.animeList;
    },
  },
  mounted() {
 
    this.$store.dispatch("fetchAnimeList", this.$route.params.titule);
    
  },

};
</script>

<style lang="scss" scoped>
@import "@/assets/style/pages/Search.scss";
</style>
