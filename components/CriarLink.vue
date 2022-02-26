<template>
  <section class="main__criar_link">
    <div class="container">
      <form>
        <Input class="input" name="titulo" placeholder="Insira o título do seu link" label="Título" />
        <Input class="input" name="link_original" placeholder="Por favor, insira o link que deseja encurtar! P.ex. https://meusite.com" label="Link para encurtamento:" />
        <button @click.prevent="gerarLink()" type="submit">Encurtar!</button>
      </form>
    </div>
  </section>
</template>

<script>
  export default{
    name: "CriarLink",
    methods:{
      gerarLink: function(){
        console.log(this.$store.getters.getGerou);
      }
    }
  }
</script>

<style scoped>
  form{
    margin-top: 40px;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: center;
  }
  .input{
    width: 100%;
  }

  button{
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

  button:hover{
    background-color: #2392BA;
  }
</style>
