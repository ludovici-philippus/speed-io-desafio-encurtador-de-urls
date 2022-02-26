<template>
  <header>
    <div class="container">
      <div class="logo">
        <NuxtLink to="/"><h1>Encurtador de URLs</h1></NuxtLink>
        <p>Ninguém gosta de links enormes e complexos, mantenha-os simples conosco!</p>
      </div>
      <HeaderLinks/>
    </div>
  </header>
</template>

<script>
  name: "Header"
</script>

<style scoped>
  header{
    background-color: var(--cor-1);
    padding: 40px 0;
  }

  .logo{
    text-align: center;
  }
  h1{
    font-size: 36px;
  }
  a{
    text-decoration: none;
    color: white;
  }
  p{
    font-weight: lighter;
    color: white;
  }
  .container{
    flex-direction: column;
  }
</style>
