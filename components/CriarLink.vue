<template>
  <section class="main__criar_link">
    <div class="container">
      <form>
        <Input
          class="input"
          name="titulo"
          placeholder="Insira o título do seu link"
          label="Título"
        />
        <Input
          class="input"
          name="link_original"
          placeholder="Por favor, insira o link que deseja encurtar! P.ex. https://meusite.com"
          label="Link para encurtamento:"
        />
        <button @click.prevent="gerarLink()" type="submit">Encurtar!</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CriarLink',
  data(){
    return{
      url_length: 3
    }
  },
  methods: {

    gerarLink: async function () {
      const titulo = document.querySelector('#titulo').value;
      let link_original = document.querySelector('#link_original').value;

      if(this.estaVazio([titulo, link_original]) == true){
        alert("Campos vazios não são permitidos!");
        this.$store.commit("validar", false);
        return false;
      }else if(this.verificaHttpLink(link_original) != true){
        link_original = this.verificaHttpLink(link_original);
      }
      this.$store.commit("validar", true);

      const link_novo = await this.generateUNID(this.url_length);

      /* Verifica se o id já existe no banco de dados; caso não, ele retorna o valor e adiciona as informações no banco de dados. */
      if(await this.idExists(link_novo, titulo, link_original, link_novo) == "false"){
        this.$store.commit("gerar", [titulo, this.$store.getters.getApiPath+link_novo]);
      }else{
        this.url_length += 1;
        this.generateUNID(this.url_length);
      }
      /*=== FIM ===*/

    },

    verificaHttpLink: function(link){
      if(link.substring(0, 3) != "http"){
        link = "http://"+link;
        return link;
      }
      return true;
    },

    estaVazio: function(campos_a_validar){
      let vazio = false;
      campos_a_validar.map((val) => {
        if(val == '' || val.length == 0){
          vazio = true;
          return;
        }
      });
      return vazio;
    },

    generateUNID: async function(length){
      /* Gera um ID pseudo aleatório */
      let result = "";
      let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let characters_length = characters.length;

      for(let i = 0; i < length; i++){
        result += characters.charAt(Math.floor(Math.random() * characters_length));
      }
      return result;
    },

    idExists: async function(unid, titulo, link_original, link_novo){
      const api_request = this.$store.getters.getApiPath+'exists/'+unid+'?titulo='+titulo+'&link_original='+link_original+'&link_novo='+link_novo;
      const existe = await this.$axios.$get(api_request).then(function(response){

        return response.existe;
      });
      return existe;
    }
  },
}
</script>

<style scoped>
form {
  margin-top: 40px;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: center;
}
.input {
  width: 100%;
}

button {
  padding: 10px 20px;
  border: 1px solid var(--cor-4);
  color: white;
  background-color: var(--cor-4);
  cursor: pointer;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
  transition: 0.5s;
}

button:hover {
  background-color: #2392ba;
}
</style>
