<template>
  <div class="header">
    <div class="test">
      <router-link class="link" to="/">Main</router-link>
      <router-link class="link" to="/add">About Page</router-link>
      <router-link class="link" to="/list">Lessons List</router-link>
    </div>
    
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.header {
  background: goldenrod;
  border-radius: 20px;
  border: solid 2px grey;
  text-align: center;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.link {
  margin: 10px;
}
</style>