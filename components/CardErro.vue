<template>
  <div class="container">
    <div class="card">
      <h2>Erro ao gerar seu link!</h2>
      <p>Por favor, verifique se o link que você inseriu é um link válido!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LinkGerado',
  data() {
    return {
      link_valido: this.$store.getters.getLinkValido,
    }
  },
}
</script>

<style scoped>
.card {
  width: 100%;
  color: white;
  text-align: center;
  background-color: var(--cor-5);
  flex-direction: column;
  padding: 30px 0;
}
</style>
