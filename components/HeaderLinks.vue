<template>
  <nav>
    <ul>
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/top-cem">Top 100</NuxtLink></li>
      <li><NuxtLink to="/minha-conta">Minha Conta</NuxtLink></li>
      <li v-if="this.$store.getters.getLogged">
        <button @click.prevent="sair" to="/">Sair da Conta</button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'HeaderLinks',
  methods: {
    sair: async function () {
      await this.$axios.$get(this.$store.getters.getApiPath + 'sair')
      window.location.reload()
    },
  },
}
</script>

<style scoped>
ul {
  list-style: none;
  text-align: center;
  margin-top: 10px;
}

li {
  display: inline-block;
  margin-right: 6px;
}

a {
  color: var(--cor-2);
  text-decoration: none;
  font-size: 18px;
}

a:hover {
  text-decoration: underline;
}

button {
  background-color: transparent;
  color: var(--cor-2);
  text-decoration: none;
  font-size: 18px;
  cursor: pointer;
  border: 0;
}

button:hover {
  text-decoration: underline;
}
</style>
