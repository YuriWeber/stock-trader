<template>
  <div class="stock">
      <div class="head">
          <span><strong>{{ stock.name }}</strong> (Preço: {{ stock.price | real }} | Qtde: {{stock.qty}})</span>
      </div>
      <div class="buy">
          <div class="input-area">
            <label for="qty">Quantidade:</label>
            <input type="number" v-model.number="qty" id="qty" min="0" :max="stock.qty">
          </div>
          <button @click="sell" :disabled="!(qty > 0)">VENDER</button>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        stock: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            qty: 0,
        }
    },
    methods: {
        sell() {
            this.$store.dispatch('buySellStock', { id: this.stock.from, qty: this.qty})
            this.qty = 0
        }
    },
    watch: {
        qty(newValue) {
            if (newValue > this.stock.qty) {
                this.qty = this.stock.qty
            }
        }
    }
}
</script>

<style scoped>
.stock {
    margin: 10px;
    width: 400px;
    height: 100px;
    box-shadow: 0 2px 3px black;
}

.head {
    background-color: rgb(45, 81, 105);
    height: 40px;
    border-radius: 5px 5px 0 0;
    display: flex;
    align-items: flex-end;
    color: white;
}
.head span strong {
    font-size: 1.3rem;
}
.head span {
    margin: 5px;
}

.buy {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 20px 25px 20px;
    border-radius: 0 0 5px 5px;
}
input {
    width: 70%;
    border: 1px solid black;
}

button {
    background-color: rgb(95, 146, 255);
    padding: 5px;
    border-radius: 5px;
    margin-left: 10px;
}
button:disabled {
    background-color: rgb(187, 187, 187);
    color: gray;
}
</style>