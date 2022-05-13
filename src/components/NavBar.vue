<template>
  <div class="nav-bar">
      <router-link to="/" 
        active-class="active" 
        class="button-link" 
        exact>INÍCIO</router-link>
      <router-link to="/portfolio" 
        active-class="active" 
        class="button-link">PORTFÓLIO</router-link>
      <router-link to="/stocks" 
          active-class="active" 
          class="button-link">AÇÕES</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.nav-bar {
  margin-left: 20px;
}

.button-link {
  text-decoration: none;
  color: black;
  font-size: 1.1rem;
  padding: 15px;
}
.active {
  background-color: rgb(204, 204, 204);
}
</style>