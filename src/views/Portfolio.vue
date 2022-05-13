<template>
  <div class="portfolio">
      <HaveStock v-for="stock in myStocks" v-if="stock.qty" :stock="stock"/>
  </div>
</template>

<script>
import HaveStock from '@/components/HaveStock.vue'

export default {
  components: {
    HaveStock
  },
  computed: {
    myStocks() {
      return this.$store.getters.myStocks
    }
  }
}
</script>

<style>
.portfolio {
  display: flex;
  align-items: flex-start;
  flex-flow: wrap;
  margin: 10px 40px;
}
</style>