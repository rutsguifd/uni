<template>
  <div>
      <custom-header />
    <router-view />
  </div>
</template>

<script>
import CustomHeader from '@/components/Header.vue'
  export default {
    name: 'MasterPage',
    components: {
      CustomHeader
    }
  }
</script>

<style lang="scss" scoped>

</style>