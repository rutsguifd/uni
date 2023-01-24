<template>
     <div>
    123
  </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue';
export default {
  setup () {
    const anime = ref({});
    onBeforeMount(() => {
       fetch(`https://api.jikan.moe/v3/anime/${this.$route.params.id}`)
        .then(response => response.json())
        .then(data => {
          anime.value = data;
        });
    });
    return {
      anime
    }
  }
}
</script>

<style lang="scss" scoped>

</style>