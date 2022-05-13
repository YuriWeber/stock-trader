<template>
  <div class="menu">
      <button @click="save">Salvar Dados</button>
      <button @click="load">Carregar Dados</button>
  </div>
</template>

<script>
export default {
    methods: {
        save() {
            const { stocks, myStocks, balance } = this.$store.getters
            this.$http.put("data.json", { stocks, myStocks, balance })
            this.$emit("disable")
        },
        load() {
            const data = this.$http.get("data.json")
                .then(res => {
                    const data = res.data
                    this.$store.commit("updateBalance", data.balance)
                    this.$store.commit("updateStocks", data.stocks)
                    this.$store.commit("updateMyStocks", data.myStocks)
                })
            this.$emit("disable")
        }
    }
}
</script>

<style scoped>
.menu {
    position: absolute;
    background-color: white;
    width: 168px;
    top: 0;
    right: 0;
    margin-right: 146px;
    margin-top: 49px;
    box-shadow: 2px 3px 5px -1px black;
}

button {
    padding: 10px 20px;
    text-align: left;
    width: 100%;
}
button:hover {
    background-color: rgb(204, 204, 204);
}
</style>