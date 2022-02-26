<template>
  <h1>{{ api }}</h1>
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
