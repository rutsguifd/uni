<template>
  <div class="anime-synopsis-box">
    <div class="anime-synopsis">
      {{ synopsis }}
    </div>
  </div>
</template>

<script>


export default {
  name: "AnimeDescription",
  components: {},
  props: {
    synopsis: {
      type: String,
      default: ". . .",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/components/AnimeSynopsis.scss";
</style>
