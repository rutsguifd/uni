<template>

  <main-masterpage-vue>
    <anime-full-info-vue :animeInfo="anime" />
  </main-masterpage-vue>

</template>

<script>
import AnimeFullInfoVue from "@/components/AnimeFullInfo.vue";
import MainMasterpageVue from "@/masterpages/MainMasterpage.vue";
export default {
  name: "App",
  components: {

    AnimeFullInfoVue,
    MainMasterpageVue,

  },

  computed: {
    
    anime() {
      

      return this.$store.state.animeInfo;
    },
   
  },
  mounted() {
    
    this.$store.dispatch("fetchAnimeInfo", this.$route.params.id);
    
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/pages/AnimeFullDescription.scss";
</style>
