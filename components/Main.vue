<template>
  <main>
    <CriarLink/>
    <LinkGerado v-if="gerou"/>
  </main>
</template>

<script>
  export default{
    name: "Main",
    data(){
      return{
        gerou: false
      }
    }
  }
</script>

<style scoped>

</style>
