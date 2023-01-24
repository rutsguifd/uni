<template>
  <div class="header">
    <span><router-link to="/station-form">Station Form</router-link></span>
    <span><router-link to="/">Home</router-link></span>
    <span><router-link to="/about">About</router-link></span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header{
    text-align: center;
    margin: 10px 20px;
    background: pink;
    border-radius: 5px;
    span{
        margin: 0px 20px;
    }
}
</style>