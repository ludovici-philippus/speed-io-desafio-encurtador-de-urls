<template>
  <div class="table_wrapper">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Título</th>
          <th>Link</th>
          <th>Visualizações</th>
          <th v-if="somente_os_meus">#</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="url.id" v-for="url in urls">
          <td>{{ url.id }}</td>
          <td><a :href="$store.getters.getApiPath+''+url.link_encurtado" :title="url.titulo" rel="external" target="_blank">{{ url.titulo }}</a></td>
          <td><a :href="$store.getters.getApiPath+''+url.link_encurtado" :title="url.titulo" rel="external" target="_blank">{{ $store.getters.getApiPath+''+url.link_encurtado }}</a></td>
          <td>{{ url.views }}</td>
          <td v-if="somente_os_meus"><button @click.prevent="deletar(url.id)">X</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default{
    name: "TabelaResponsiva",
    data(){
      return{
        urls: [{}]
      }
    },
    props:{
      somente_os_meus:
        {
          type: Boolean,
          default: false,
        }
    },
    methods:{
      get_urls: async function(){
        const urls_api = await this.$axios.$post(this.$store.getters.getApiPath+"get-urls", {
              somente_os_meus: this.somente_os_meus
            }).
          then(function(response){
            return response;
          });
        this.urls = urls_api;
      },
      deletar: async function(id){
        await this.$axios.$get(this.$store.getters.getApiPath+"deletar?id="+id);

        this.urls = this.urls.filter((val) => {
          if(val.id != id)
            return val;
        })

        alert("Link deletado com sucesso!");
      }
    },
    mounted(){
      this.get_urls();
    }
  }
</script>

<style scoped>
  .table_wrapper{
    width: 100%;
    overflow-x: scroll;
    margin: auto;
  }

  table{
    width: 100%;
    min-width: 700px;
    border-collapse: collapse;
  }

  tr{
    border-bottom: 1px solid #333;
    background-color: #ccc;
  }

  td{
    padding: 10px 0;
  }

  thead tr{
    color: white;
    background-color: var(--cor-1);
  }

  thead th{
    padding: 15px 0;
  }

  tbody{
    text-align: center;
  }

  button{
    border: 0;
    background-color: var(--cor-5);
    color: white;
    padding: 5px 12px;
    cursor: pointer;
  }
</style>
