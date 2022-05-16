<template>
  <div class="portfolio">
      <MyStock v-for="stock in myStocks" v-if="stock.qty" :stock="stock"/>
  </div>
</template>

<script>
import MyStock from '@/components/MyStock.vue'

export default {
  components: {
    MyStock
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