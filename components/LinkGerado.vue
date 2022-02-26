<template>
  <div class="container">
    <div class="card">
      <h2>O seu link foi gerado com sucesso:</h2>
      <a target="_blank" rel="external" :href="this.$store.getters.getLinkNovo">{{ this.$store.getters.getTitulo }}</a>
      <a target="_blank" rel="external" :href="this.$store.getters.getLinkNovo">{{ this.$store.getters.getLinkNovo }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LinkGerado',
}
</script>

<style scoped>
.card {
  width: 100%;
  color: white;
  text-align: center;
  background-color: var(--cor-3);
  flex-direction: column;
  padding: 30px 0;
}
a:nth-of-type(1) {
  font-size: 26px;
  display: block;
  color: var(--cor-1);
  font-weight: bold;
  text-decoration: none;
  margin-top: 10px;
}
a:nth-of-type(2){
  font-weight: lighter;

}
</style>
