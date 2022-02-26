<template>
  <div class="container">
    <div class="card">
      <h2>O seu link foi gerado com sucesso:</h2>
      <a :href="link">{{ titulo }}</a>
    </div>
  </div>
</template>

<script>
  export default{
    name: "LinkGerado",
    data(){
      return{
        titulo: "Testando",
        link: "https://testando.com"
      }
    }
  }
</script>

<style scoped>
  .card{
    width: 100%;
    color: white;
    text-align: center;
    background-color: var(--cor-3);
    flex-direction: column;
    padding: 30px 0;
  }
  a{
    font-size: 24px;
  }
</style>
