<template>
  <div class="home">
      <h1>Negocie e Consulte suas Ações</h1>
      <div class="blue-tip tip">
        <span>(i)</span>
        <span>Você pode Salvar & Carregar os dados</span>
      </div>
      <div class="green-tip tip">
        <span>(i)</span>
        <span>Clique em 'Finalizar o Dia' para iniciar um novo dia!</span>
      </div>
      <div class="balance">
        <span><strong>Seu Saldo: {{ balance | real }}</strong></span>
      </div>
  </div>
</template>

<script>
export default {
  computed: {
    balance() {
      return this.$store.getters.balance
    }
  }
}
</script>

<style scoped>
.home {
  max-width: 1000px;
  margin: 40px auto 0 auto;
}
h1 {
  margin-bottom: 20px;
}

.tip {
  margin-top: 10px;
  font-size: 1.5rem;
  color: white;
  padding: 5px;
  box-shadow: 2px 2px 3px black;
}
.tip span {
  margin-right: 10px;
  margin-left: 10px;
}
.green-tip {
  background-color: rgb(72, 136, 72);
}
.blue-tip {
  background-color: rgb(65, 105, 150);
}

.balance {
  font-size: 2rem;
  margin-top: 20px;
}
</style>