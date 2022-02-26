<template>
  <nav>
    <ul>
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/top">Top 100</NuxtLink></li>
    </ul>
  </nav>
</template>

<script>
  export default{
    name: "HeaderLinks"
  }
</script>

<style scoped>
  ul{
    list-style: none;
    text-align: center;
    margin-top: 10px;
  }

  li{
    display: inline-block;
    margin-right: 6px;
  }

  a{
    color: var(--cor-2);
    text-decoration: none;
    font-size: 18px;
  }

  a:hover{
    text-decoration: underline;
  }
</style>
