<template>
  <div id="root">
    <Header />
    <MainMinhaConta />
  </div>
</template>

<script>
export default {
  name: 'minhaConta',
  methods: {
    check_login: async function () {
      const login = await this.$axios
        .$get(this.$store.getters.getApiPath + 'is-logged')
        .then(function (response) {
          return response.logado
        })
      this.$store.commit('logar', login)
    },
  },
  mounted() {
    this.check_login()
  },
}
</script>

<style scoped></style>
