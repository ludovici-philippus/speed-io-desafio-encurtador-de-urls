<template>
  <main>
    <CriarLink />
    <LinkGerado v-if="this.$store.getters.getGerou" />
    <CardErro v-if="this.$store.getters.getLinkValido == false" />
  </main>
</template>

<script>
export default {
  name: 'Main',
  data() {
    return {
      gerou: false,
    }
  },
}
</script>

<style scoped></style>
