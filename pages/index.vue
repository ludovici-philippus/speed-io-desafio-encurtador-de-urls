<template>
  <Header/>
</template>

<script>
export default {
  name: 'IndexPage',
  data(){
    return{
      api: "Oi"
    }
  },
  methods:{
    get_data: async function(){
      const api = await this.$axios.$get("http://localhost:5000").
        then(response => this.api = response);
    }
  },
  mounted(){
    this.get_data();
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Open+Sans:wght@300;400&display=swap');

:root{
  --cor-1: #4F4789;
  --cor-2: #EEBA0B;
  --cor-3: #7FC29B;
  --cor-4: #3AAED8;
  --cor-5: #CC3F0C;

  --font-padrao: 'Open Sans', sans-serif;
  --font-destaques: 'Bebas Neue', cursive;
}

*{
  font-family: var(--font-padrao);
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1, h2, h3, h4, h5, h6{
  font-family: var(--font-destaques);
}

.container{
  max-width: 900px;
  margin: auto;
  padding: 0 2%;
}

</style>
