<template>
  <div class="stocks">
      <Stock v-for="stock in stocks" :stock="stock"/>
  </div>
</template>

<script>
import Stock from '@/components/Stock.vue'

export default {
  components: {
    Stock
  },
  computed: {
    stocks() {
      return this.$store.getters.stocks
    }
  }
}
</script>

<style scoped>
.stocks {
  display: flex;
  align-items: flex-start;
  flex-flow: wrap;
  margin: 10px 40px;
}
</style>