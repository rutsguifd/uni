<template>
  <div class="anime-box">
    

    <div class="anime-img">
      <img :src="imgSrc" alt="" />
    </div>
    <div class="anime-info-box">
      <div class="anime-title">{{ title }}</div>
      <div class="info3">
        <div class="info2">
          <div class="info">
            <label for="anime-type">Type : </label>
            <div class="anime-type">{{ type }}</div>
          </div>
          <div class="info">
            <label for="anime-status">Status : </label>
            <div class="anime-status">{{ status }}</div>
          </div>
          
          <div class="info">
            <label for="anime-score">Score : </label>
            <div class="anime-score">{{ score }}</div>
          </div>
        </div>

        <div class="info2">
          <div class="info">
            <label for="anime-rating">Rating : </label>
            <div class="anime-rating">{{ rating }}</div>
          </div>
          <div class="info">
            <label for="anime-duration">Duration : </label>
            <div class="anime-duration">{{ duration }}</div>
          </div>
          <div class="info">
            <label for="anime-episodes">Episodes : </label>
            <div class="anime-episodes">{{ episodes }} ep</div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "AnimeMainInfo",
  components: {
   
  },
  props: {
    imgSrc: {
      type: String,
      default:
        "https://us.123rf.com/450wm/mathier/mathier1905/mathier190500002/134557216-no-thumbnail-image-placeholder-for-forums-blogs-and-websites.jpg?ver=6",
    },
    title: {
      type: String,
      default: ". . .",
    },
    type: {
      type: String,
      default: ". . .",
    },

    status: {
      type: String,
      default: ". . .",
    },

    score: {
      type: Number,
      default: 0,
    },
    rating: {
      type: String,
      default: ". . .",
    },
    duration: {
      type: String,
      default: ". . .",
    },
    episodes: {
      type: Number,
      default: 0,
    },

  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/components/AnimeMainInfo.scss";
</style>
