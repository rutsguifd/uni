<template>
  <div>
    <div>
      <header-vue></header-vue>
    </div>
    <div class="main-box">
      <slot>
        <h1>Super Nika!</h1>
      </slot>
    </div>
    <div>
      <footer-vue></footer-vue>
    </div>
  </div>
</template>

<script>
import FooterVue from "@/components/Footer.vue";
import HeaderVue from "@/components/Header.vue";
export default {
  name: "MainMasterpage",
  components: {
    FooterVue,
    HeaderVue,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/masterpages/MainMasterpage.scss";
</style>
