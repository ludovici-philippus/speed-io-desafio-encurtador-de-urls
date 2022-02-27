<template>
  <main>
    <div class="container">
      <FazerLogin v-if="this.$store.getters.getLogged == false"/>
      <h1 v-else>Estas são as suas URLs:</h1>
      <TabelaResponsiva v-if="this.$store.getters.getLogged" somente_os_meus />
    </div>
  </main>
</template>

<script>
  export default{
    name: "MainMinhaConta"
  }
</script>

<style scoped>
  .container{
    margin-top: 20px;
  }
  h1{
    margin: 10px 0;
    text-align: center;
    width: 100%
  }
</style>
