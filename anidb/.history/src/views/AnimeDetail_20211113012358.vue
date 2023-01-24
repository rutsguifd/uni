<template>
    <div>
        {{anime.title}}
        {{anime.rating}}
    </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
export default {
  setup () {
    const route = useRoute();
    const anime = ref({});
    onBeforeMount(() => {
       fetch(`https://api.jikan.moe/v3/anime/${route.params.id}`)
        .then(response => response.json())
        .then(data => {
          anime.value = data;
          console.log(anime.value)
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