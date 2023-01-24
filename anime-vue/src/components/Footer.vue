<template>
  <footer class="header-box">
    <div class="header-panel-box">
      <div class="logo-box"></div>
      <router-link class="router-link-button" to="/randomanime"
        ><my-button-vue text="Random Anime"
      /></router-link>

      <router-link class="router-link-button" to="/"
        ><my-button-vue text="Go to Home"
      /></router-link>

      <form action="https://github.com/tiastaa/anime" class="git">
        <button>
          <img
            src="https://pbs.twimg.com/profile_images/1176197551453687808/CTlnrRea_400x400.jpg"
            alt=""
          />
        </button>
      </form>
    </div>
  </footer>
</template>

<script>
import MyButtonVue from "@/ui/MyButton.vue";


export default {
  name: "Footer",
  components: {
    MyButtonVue,
  },
  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/components/Footer.scss";
</style>
