<template>
  <div class="controller">
    <button @click="endDay">FINALIZAR O DIA</button>
    <button @click="menu = !menu" :class="{'menu-active': menu}">SALVAR & CARREGAR</button>
    <Menu v-if="menu" @disable="menu = false" />
    <span>SALDO: {{ balance | real }}</span>
  </div>
</template>

<script>
import Menu from './Menu.vue'

export default {
  components: {
    Menu
  },
  data() {
    return {
      menu: false
    }
  },
  methods: {
    endDay() {
      this.$store.dispatch("changeValues")
    }
  },
  computed: {
    balance() {
      return this.$store.getters.balance
    }
  }
}
</script>

<style scoped>
.controller {
    margin-right: 20px;
}

button {
    padding: 16px;
    background-color: white;
}
button:hover {
    background-color: rgb(204, 204, 204);
}
.menu-active {
  background-color: rgb(204, 204, 204)
}

span {
    color: rgb(92, 92, 92);
    margin-left: 5px;
}
</style>