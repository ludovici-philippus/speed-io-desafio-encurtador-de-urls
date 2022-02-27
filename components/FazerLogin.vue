<template>
  <form>
    <Input
      v-if="this.criar_conta"
      input_type="text"
      name="username"
      label="Nome de Usuário"
      placeholder="Insira seu nome de usuário..."
    />
    <Input
      input_type="email"
      name="email"
      label="E-mail:"
      placeholder="Insira seu e-mail..."
    />
    <Input
      input_type="password"
      name="senha"
      label="Senha:"
      placeholder="Insira sua senha..."
    />

    <div class="buttons">
      <Button
        v-if="!this.criar_conta"
        :on_click="login"
        type="submit"
        text="Logar!"
      />
      <Button
        v-if="this.criar_conta"
        :on_click="criar"
        type="submit"
        text="Criar Conta!"
      />

      <Button
        v-if="!this.criar_conta"
        :on_click="() => (this.criar_conta = true)"
        type="submit"
        text="Ainda não tem uma conta?"
      />
      <Button
        v-if="this.criar_conta"
        :on_click="() => (this.criar_conta = false)"
        type="submit"
        text="Já tem uma conta?"
      />
    </div>
  </form>
</template>

<script>
var SHA256 = require('crypto-js/sha256')

export default {
  name: 'FazerLogin',
  data() {
    return {
      criar_conta: false,
    }
  },
  methods: {
    estaVazio: function (campos_a_validar) {
      let vazio = false
      campos_a_validar.map((val) => {
        if (val == '' || val.length == 0) {
          vazio = true
          return
        }
      })
      return vazio
    },

    login: async function () {
      const email = document.querySelector('#email').value
      const senha = SHA256(document.querySelector('#senha').value).toString()

      if (this.estaVazio([email, senha])) {
        alert('Campos vazios não são permitidos!')
        return
      }

      const logado = await this.$axios
        .post(this.$store.getters.getApiPath + 'login', {
          email_post: email,
          senha_post: senha,
        })
        .then(function (response) {
          return response.data.logado
        })
      if (logado) {
        this.$store.commit('logar', true)
        alert('Logado com sucesso!')
      } else {
        this.$store.commit('logar', false)
        alert('Nome de usuário ou senha incorretos!')
      }
    },

    criar: async function () {
      const username = document.querySelector('#username').value
      const email = document.querySelector('#email').value
      const senha = SHA256(document.querySelector('#senha').value).toString()

      if (this.estaVazio([username, email, senha])) {
        alert('Campos vazios não são permitidos!')
        return
      }

      await this.$axios
        .post(this.$store.getters.getApiPath + 'cadastro', {
          username_post: username,
          email_post: email,
          senha_post: senha,
        })
        .then(function (response) {
          alert(
            'Conta criada com sucesso! Por favor, faça login com seu e-mail e senha!'
          )
        })
      this.criar_conta = false
    },
  },
}
</script>

<style scoped>
form {
  width: 100%;
}
.buttons {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
